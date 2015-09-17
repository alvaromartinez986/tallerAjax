__author__ = 'alvaromartinez'
from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.http import HttpResponseRedirect


def index(request):
    return render(request,'index.html',{})