from django.db import models
from django.utils.text import slugify
from django.utils import timezone
from django.contrib.postgres.indexes import GinIndex
from django.contrib.auth.models import AbstractUser

# Abstract base class for common timestamp fields
class TimeStampedModel(models.Model):
    created_at = models.DateTimeField(default=timezone.now, db_index=True)
    updated_at = models.DateTimeField(auto_now=True, db_index=True)
    deleted_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        abstract = True

# Author model based on AbstractUser for authentication and extra profile data
class Author(AbstractUser):
    avatar = models.URLField(max_length=255, blank=True, null=True)
    role = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.username

# Category model to normalize article categories
class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)
    slug = models.SlugField(max_length=100, unique=True, blank=True)

    class Meta:
        verbose_name_plural = "categories"
        ordering = ['name']

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super(Category, self).save(*args, **kwargs)

    def __str__(self):
        return self.name

# Custom QuerySet for NewsArticle to filter published articles
class NewsArticleQuerySet(models.QuerySet):
    def published(self):
        return self.filter(
            deleted=False,
            published_date__lte=timezone.now()
        ).select_related('author', 'category')

# Main NewsArticle model
class NewsArticle(TimeStampedModel):
    title = models.CharField(max_length=255, db_index=True, unique=True)
    slug = models.SlugField(max_length=255, unique=True, blank=True, db_index=True)
    excerpt = models.TextField()
    content = models.TextField()

    # Use a ForeignKey to Category for normalization
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, related_name='articles')

    # Renamed for clarity and indexed for performance
    published_date = models.DateTimeField(default=timezone.now, db_index=True)

    image = models.URLField(max_length=255)
    image_caption = models.CharField(max_length=255, blank=True, null=True)
    image_credit = models.CharField(max_length=255, blank=True, null=True)

    author = models.ForeignKey(Author, on_delete=models.CASCADE, related_name='articles')
    deleted = models.BooleanField(default=False, db_index=True)

    # Use the custom manager so that filtering for non-deleted articles is easy.
    objects = NewsArticleQuerySet.as_manager()

    class Meta:
        ordering = ['-published_date']
        indexes = [
            models.Index(fields=['published_date']),
            models.Index(fields=['slug']),
            models.Index(fields=['title']),
            GinIndex(fields=['content'], opclasses=['gin_trgm_ops'], name='newsarticle_content_gin_idx'),

        ]

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super(NewsArticle, self).save(*args, **kwargs)

    def delete(self, *args, **kwargs):
        self.deleted_at = timezone.now()
        self.save()

    def __str__(self):
        return f"{self.title} ({self.published_date.strftime('%Y-%m-%d')})"
