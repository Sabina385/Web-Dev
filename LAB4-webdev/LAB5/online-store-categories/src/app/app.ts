import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list';
import { ProductService } from './services/product.service';
import { Category } from './models/category.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent], 
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  categories: Category[];
  selectedCategoryId: number | null = null;

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
  }

  selectCategory(id: number) {
    this.selectedCategoryId = id;
  }

  getFilteredProducts() {
    return this.productService.getProducts().filter(p => p.categoryId === this.selectedCategoryId);
  }
}