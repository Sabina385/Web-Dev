from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .serializers import CategorySerializer,ProductSerializer
from .models import Category, Product


class ProductViewSet(viewsets.ModelViewSet):
    queryset=Product.objects.all().filter(is_active=True)
    serializer_class=ProductSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset=Category.objects.all()
    serializer_class=CategorySerializer
    
    @action(detail=True,methods=['GET'])
    def products(self,request,pk=None):
        category=self.get_object()
        products=Product.objects.filter(category=category)
        serializer=ProductSerializer(products, many=True)
        return Response(serializer.data)