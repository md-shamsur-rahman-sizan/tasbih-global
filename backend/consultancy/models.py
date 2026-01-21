from django.db import models

class StudentInquiry(models.Model):
    COUNTRY_CHOICES = [
        ('UK', 'United Kingdom'),
        ('USA', 'USA'),
        ('CAN', 'Canada'),
        ('AUS', 'Australia'),
    ]

    full_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    desired_country = models.CharField(max_length=3, choices=COUNTRY_CHOICES)
    message = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.full_name} - {self.desired_country}"