from rest_framework import serializers
from .models import NewsArticle, Author, Category

class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = ['id', 'username', 'email', 'avatar', 'role']

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'slug']

class NewsArticleSerializer(serializers.ModelSerializer):
    author = AuthorSerializer(read_only=True)
    category = CategorySerializer(read_only=True)

    class Meta:
        model = NewsArticle
        fields = [
            'id',
            'title',
            'slug',
            'excerpt',
            'content',
            'published_date',
            'image',
            'image_caption',
            'image_credit',
            'author',
            'category',
            'created_at',
            'updated_at',
            'deleted_at',
            'deleted',
        ]
