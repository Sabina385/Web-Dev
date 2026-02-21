import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent {

  currentImageIndex: { [key: number]: number } = {};

  getCurrentImage(product: Product): string {
    const idx = this.currentImageIndex[product.id] || 0;
    if (idx === 0) return product.image;
    return product.images[idx - 1];
  }

  
  nextImage(product: Product, event: Event) {
    event.stopPropagation(); 
    const total = product.images.length + 1;
    const current = this.currentImageIndex[product.id] || 0;
    this.currentImageIndex[product.id] = (current + 1) % total;
  }

  prevImage(product: Product, event: Event) {
    event.stopPropagation();
    const total = product.images.length + 1;
    const current = this.currentImageIndex[product.id] || 0;
    this.currentImageIndex[product.id] = (current - 1 + total) % total;
  }

  products: Product[] = [
    {
      id: 123890344,
      name: 'Apple iPhone 16 Pro Max 512 GB',
      description: 'The flagship iPhone 16 Pro Max combines the best features of a modern gadget. This is the most productive device in the Apple iPhone line with a large-scale display, amazing performance and incredible external ergonomics. The iPhone 16 pro max is a true titan in its family.',
      price: 899990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hd4/h2c/87295489736734.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h58/hc8/87295489769502.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h04/ha7/87295489802270.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h7e/h61/87295489835038.png?format=gallery-medium'
      ],
      link: 'https://l.kaspi.kz/shop/DPF8wHs14t5UN5Q'
    },
    {
      id: 128574070,
      name: 'Apple Watch Series 10 S/M 42mm',
      description :'The Series 10 display is the largest in Apple Watch history, even slightly larger than the Ultra 2. The new wide-angle OLED screen technology provides 40% more brightness. The new screen improves angular visibility, which makes information more readable from different angles.',
      price: 208467,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p45/p26/3345922.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p44/paa/3346092.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p28/paa/3346093.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p0c/paa/3346094.png?format=gallery-medium'
      ],
      link: 'https://l.kaspi.kz/shop/66TEbyDJsM3jUxn'
    },
    {
      id: 141757964,
      name: 'Apple MacBook Air 13 2025 / 16 Гб / SSD 512 Гб / macOS / MC6U4',
      description :'The new MacBook Air, which features lightning-fast M4 chip performance, up to 18 hours of battery life, and a new 12-megapixel Center Stage camera. It also offers support for up to two external displays in addition to the built—in one, 16 GB of starter memory combined. ',
      price: 664013,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p6f/pa7/37097219.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p92/p91/37097220.jpeg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p3b/p11/51021522.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p73/p11/51021524.jpg?format=gallery-medium'
      ],
      link: 'https://l.kaspi.kz/shop/BrhMHYaLsvERtvo'
    },
    {
      id: 136101629,
      name: 'By Wishtrend Toner Soft tonic-exfoliant with mandelic Acid By Wishtrend Mandelic Acid 5% Prep Water 120 ml',
      description :'A mild almond acid exfoliant tonic By Wishtrend Mandelic Acid5% Prep Water is designed for gentle exfoliation: it stimulates cellular renewal, improves complexion, and evens skin tone.',
      price: 8098,
      rating: 4.9,
      image:'https://resources.cdn-kaspi.kz/img/m/p/pe2/p21/29414548.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p3a/p1e/68880646.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p56/p1e/68880647.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p73/p1e/68880648.jpg?format=gallery-medium'
      ],
      link: 'https://l.kaspi.kz/shop/GQVnjW1Xm9QxVW9'
    },
    {
      id: 120217395,
      name: 'Apple iPad Pro 11 2024 8 Гб/512 Гб',
      description :'Introducing iPad Pro 2024 — your ideal companion for work and entertainment! This powerful tablet with an Apple M4 processor and 8 GB of RAM will provide you with high performance and smooth application operation.',
      price: 641523,
      rating: 5.0,
      image:'https://resources.cdn-kaspi.kz/img/m/p/h75/hf3/86233419055134.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h5b/h25/86233379831838.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h27/h89/86106948272158.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h5c/h80/86473003728926.png?format=gallery-medium'
      ],
      link: 'https://l.kaspi.kz/shop/Btg45T49rz5JKmb'
    },
    {
      id: 124333372,
      name: 'Headphones Apple AirPods 4 ',
      description :'The updated Apple AirPods 4 wireless headphones with personalized spatial audio and adaptive equalizer will make music an integral part of your life.A more powerful battery allows you to listen to music for up to 5 hours without recharging, and you can recharge up to 5 more times from the charging case.',
      price: 61452,
      rating: 4.9,
      image:'https://resources.cdn-kaspi.kz/img/m/p/hcb/h97/87309386809374.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pec/pd7/97865769.jpeg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h9f/had/87309385662494.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-4-belyi-124333372/?c=750000000'
    },
     {
      id: 100950846,
      name: 'Headphones Apple AirPods Max ',
      description :'The Apple AirPods Max Bluetooth headset can completely change your perception of full-size headphones. This model has been developed using first-class materials and advanced technologies. It is based on the Apple H1 processor.',
      price: 426763,
      rating: 4.9,
      image:'https://resources.cdn-kaspi.kz/img/m/p/hf4/hcc/64145010163742.jpg?format=gallery-medium',
      images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h76/h33/64145012654110.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hbb/h18/64145015734302.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h2a/h0c/64145021239326.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-max-chernyi-100950846/?c=750000000'
    },
    {
      id: 135143809,
      name: 'BIDALLI  serum Vegan 10% Mandelic Acid + Arginine  for face 50ml',
      description :'The Apple AirPods Max Bluetooth headset can completely change your perception of full-size headphones. This model has been developed using first-class materials and advanced technologies. It is based on the Apple H1 processor.',
      price: 11212,
      rating: 4.9,
      image:'https://resources.cdn-kaspi.kz/img/m/p/pe4/p2e/46191059.jpg?format=gallery-medium',
      images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p6e/p59/45247514.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p3f/p0d/26326520.jpeg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p20/p56/45247523.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/bidalli-syvorotka-vegan-10-mandelic-acid-arginine-dlja-litsa-50-ml-135143809/?c=750000000'
    },
    {
      id: 102536400,
      name: 'La Sultane de Saba Amber Vanilla Patchouli body lotion',
      description :'The Apple AirPods Max Bluetooth headset can completely change your perception of full-size headphones. This model has been developed using first-class materials and advanced technologies. It is based on the Apple H1 processor.',
      price: 22989,
      rating: 4.7,
      image:'https://resources.cdn-kaspi.kz/img/m/p/paf/pc0/45518544.jpg?format=gallery-medium',
      images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p83/pe4/94602308.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p22/p95/94602280.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p20/pc1/45518548.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/la-sultane-de-saba-amber-vanilla-patchouli-los-on-dlja-tela-200-ml-102536400/?c=750000000'
    },
     {
      id: 110037980,
      name: 'Bioderma Sensibio H2O micellar water 850ml ',
      description :'Simply moisten a cotton pad with Bioderma Sensibio H2O liquid and gently remove makeup, moving along the massage lines. You will like the result. How to use: Wipe your face with a cotton pad soaked in Bioderma Sensibio H2O. Does not require rinsing with water.',
      price: 10400,
      rating: 4.7,
      image:'https://resources.cdn-kaspi.kz/img/m/p/p8b/p08/81511896.png?format=gallery-medium',
      images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p4d/p48/81531894.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p15/pfa/46219077.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pf9/pf9/46219076.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/bioderma-sensibio-h2o-mitselljarnaja-voda-850-ml-110037980/?c=750000000'
    }


  ];
  formatPrice(price: number): string {
  return price
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}


getStars(rating: number): number[] {
  const starsCount = rating < 4.5 ? 4 : 5;
  return Array(starsCount).fill(0);
}

 

  shareWhatsApp(product: Product) {
    const url = encodeURIComponent(product.link);
    window.open(`https://wa.me/?text=Check out this product: ${url}`, '_blank');
  }
  trackById(index: number, product: Product): number {
    return product.id;
  }
  

}



