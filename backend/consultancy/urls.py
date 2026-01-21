from django.urls import path
from .views import StudentInquiryCreateView

urlpatterns = [
    path('inquiry/', StudentInquiryCreateView.as_view(), name='inquiry-create'),
]