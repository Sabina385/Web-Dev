import { Component, input, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent], 
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent {
  products = input.required<Product[]>();
  

  displayProducts = signal<Product[]>([]);

  constructor(private productService: ProductService) {
    
    effect(() => {
      this.displayProducts.set(this.products());
    }, { allowSignalWrites: true });
  }

  onRemoveProduct(productId: number) {
    this.productService.deleteProduct(productId);
    this.displayProducts.update(prods => prods.filter(p => p.id !== productId));
  }

onLikeProduct(productId: number) {
   this.productService.likeProduct(productId);
 
}
}
