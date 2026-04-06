from django.urls import path
from . import views

urlpatterns = [
    path('', views.home),
    path('register/', views.register),
    path('login/', views.login),
    path('add_certificate/', views.add_certificate),
    path('verify/', views.verify_certificate),
] 