from django.conf.urls import url
from . import views

urlpatterns = [
    url(
        regex=r'^all/$',
        view=views.ListAllImages.as_view(),
        name='all_images'
    ),
    url(
        regex=r'^comments/$',
        view=views.ListAllComments.as_view(),
        name='all_images'
    ),
    url(
        regex=r'^likes/$',
        view=views.ListAllLikes.as_view(),
        name='all_images'
    )
]
