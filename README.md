# API Implementation

A Django REST Framework-based project with JWT authentication, caching, and full-text search capabilities.

## Features

- ✅ JWT Authentication
- ✅ Redis Caching
- ✅ Full-text Search
- ✅ Image Management
- ✅ Category Management
- ✅ Author Profiles
- ✅ API Documentation with Swagger UI

## Prerequisites

Ensure you have the following installed:

- **Python** 3.8+
- **PostgreSQL**
- **Redis**

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/news-api.git
cd news-api
```

### 2. Create and activate a virtual environment

```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

### 4. Copy environment variables file and configure

```bash
cp .env.example .env
```

### 5. Apply database migrations

```bash
python manage.py migrate
```

### 6. Create a superuser

```bash
python manage.py createsuperuser
```

### 7. Run the development server

```bash
python manage.py runserver
```

## API Documentation

Access interactive API documentation at:

```
http://127.0.0.1:8000/swagger/
```

## Testing

Run tests using:

```bash
python manage.py test
```

## Generate `requirements.txt`

Create a `requirements.txt` file with:

```bash
pip freeze > requirements.txt
```

## Project Structure

```
news-api/
├── .env
├── .env.example
├── .gitignore
├── README.md
├── api.http
├── requirements.txt
├── manage.py
├── apps/
│   └── news/
└── config/
```

## License

MIT License
