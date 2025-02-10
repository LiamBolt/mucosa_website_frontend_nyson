# your_app_name/views.py
from django.views.decorators.cache import cache_page
from django.utils.decorators import method_decorator
from rest_framework import viewsets, filters
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from django_filters.rest_framework import DjangoFilterBackend
from .models import NewsArticle
from .serializers import NewsArticleSerializer

@method_decorator(cache_page(60 * 15), name='dispatch')
class NewsArticleViewSet(viewsets.ModelViewSet):
    queryset = NewsArticle.objects.published().select_related('author', 'category')
    serializer_class = NewsArticleSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['category__slug', 'author__username']
    search_fields = ['title', 'excerpt', 'content']
    ordering_fields = ['published_date', 'title']

    def perform_create(self, serializer):
        # Automatically set the article's author as the logged-in user
        serializer.save(author=self.request.user)
