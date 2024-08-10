from django.contrib import admin
from django.urls import path
from rest_framework import routers
from api.views import UsersViewSet, BlogsViewSet, AnnouncementViewSet, AlertViewSet, HelpRequestViewSet, VolunteerViewSet
from django.conf.urls import include
from rest_framework_simplejwt import views as jwt_views


router = routers.DefaultRouter()
router.register(r'users', UsersViewSet)
router.register(r'blogs', BlogsViewSet)
router.register(r'volunteer', VolunteerViewSet)
router.register(r'announcement', AnnouncementViewSet)
router.register(r'alert', AlertViewSet)
router.register(r'helprequest', HelpRequestViewSet)





urlpatterns = [
    path('api/token/', 
         jwt_views.TokenObtainPairView.as_view(), 
         name ='token_obtain_pair'), 
    path('api/token/refresh/', 
         jwt_views.TokenRefreshView.as_view(), 
         name ='token_refresh'), 
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
