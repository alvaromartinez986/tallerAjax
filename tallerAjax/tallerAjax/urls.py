from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.contrib import admin
from .views import *

urlpatterns = patterns('',
    url(r'^$',index),
    # Examples:
    # url(r'^$', 'tallerAjax.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
)
