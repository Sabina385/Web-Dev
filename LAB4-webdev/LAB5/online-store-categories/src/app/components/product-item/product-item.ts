import { Component, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrls: ['./product-item.css']
})
export class ProductItemComponent {
  product = input.required<Product>();
  remove = output<number>(); 
  likeChanged = output<number>();
  
  

  like() {
    this.likeChanged.emit(this.product().id);
  }

  delete() {
   
    this.remove.emit(this.product().id);
  }
  openKaspi() {
  window.open(this.product().link, '_blank');
}

  share(platform: string) {
    const url = encodeURIComponent(this.product().link);
    const text = encodeURIComponent(`Посмотри на ${this.product().name} на Kaspi!`);
    
    if (platform === 'wa') {
      window.open(`https://wa.me/?text=${text}%20${url}`);
    
  }
}
}