from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from .models import Author, NewsArticle

class NewsArticleAPITests(APITestCase):
    def setUp(self):
        self.author = Author.objects.create(name="Test Author", avatar="https://drive.google.com/file/d/1irl8D6tGm9QIUKk20KqED6yQOmFyYzrx/view")
        self.article = NewsArticle.objects.create(
            title="Test Article",
            excerpt="Test excerpt",
            content="Test content",
            category="General",
            image="https://drive.google.com/file/d/1irl8D6tGm9QIUKk20KqED6yQOmFyYzrx/view",
            author=self.author
        )

    def test_get_news_article_list(self):
        url = reverse('news-list')  # Using the DefaultRouter naming convention
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_create_article(self):
        url = reverse('newsarticle-list')
        data = {
            'title': 'Test Article',
            'content': 'Test content',
            'category': self.category.id
        }
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
