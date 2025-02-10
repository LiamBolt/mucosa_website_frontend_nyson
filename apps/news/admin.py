# your_app_name/admin.py
from django.contrib import admin
from .models import Author, Category, NewsArticle

@admin.register(Author)
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'role', 'avatar')
    search_fields = ('username', 'email')

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('name',)}
    list_display = ('name', 'slug')

@admin.register(NewsArticle)
class NewsArticleAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'author', 'published_date', 'deleted_at')
    list_filter = ('category', 'author', 'published_date')
    search_fields = ('title', 'content')
    prepopulated_fields = {'slug': ('title',)}
