from django.shortcuts import render

# Create your views here.
def post_list(request):
    return render(request, 'blog/2018 WebSite/softwing/index.html',{})