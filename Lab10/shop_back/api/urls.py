from django.urls import path, include
#from rest_framework.routers import DefaultRouter
#from .views import CategoryViewSet, ProductViewSet

#from api.views.cbv import ProductListAPIView, ProductDetailAPIView
from api.views.generics import CategoryListAPIView,CategoryDetailAPIView,CategoryProductsAPIView,ProductListAPIView,ProductDetailAPIView
from api.views.fbv import products_list, product_detail
#from api.views.mixins import ProductListAPIView, ProductDetailAPIView


#router=DefaultRouter()
#router.register(r'categories', CategoryViewSet)
#router.register(r'products', ProductViewSet)
urlpatterns = [
    #path('', include(router.urls)),
    
    #generics
    
    path('categories/', CategoryListAPIView.as_view()),
    path('categories/<int:category_id>/',CategoryDetailAPIView.as_view()),
    path('categories/<int:category_id>/products/',CategoryProductsAPIView.as_view()),
    path('products/', ProductListAPIView.as_view()),
    path('products/<int:product_id>/',ProductDetailAPIView.as_view()),
    

    #fbv
    #path('products/', products_list),
    #path('products/<int:product_id>/', product_detail),
    
    #mixins
    #path('products/', ProductListAPIView.as_view()),
    #path('products/<int:product_id>/', ProductDetailAPIView.as_view()),
    
    #cbv
    #path('products/', ProductListAPIView.as_view()),
    #path('products/<int:product_id>/', ProductDetailAPIView.as_view()),
]
