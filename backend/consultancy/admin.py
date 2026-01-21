from django.contrib import admin
from .models import StudentInquiry

@admin.register(StudentInquiry)
class StudentInquiryAdmin(admin.ModelAdmin):
    # This displays these columns in the list view
    list_display = ('full_name', 'email', 'desired_country', 'created_at')
    
    # This adds a filter sidebar on the right
    list_filter = ('desired_country', 'created_at')
    
    # This adds a search bar at the top
    search_fields = ('full_name', 'email', 'message')