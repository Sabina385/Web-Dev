import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  categories: Category[] = [
    { id: 1, name: 'Jewellery' },
    { id: 2, name: 'Accessories' },
    { id: 3, name: 'Perfumery ' },
    { id: 4, name: 'Decorative cosmetics ' }
  ];

  products: Product[] = [
    
    {
      id: 1,
      name: 'Earrings SOKOLOV 94023538 weight  2.54 g silver, cubic zirconia',
      description: ' SOKOLOV 94023538, made of 925 sterling silver and decorated with white cubic zirconia',
      price: 15671,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h8d/hed/83817454665758.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/ser-gi-sokolov-94023538-ves-2-54-g-serebro-fianit-113359686/?c=750000000',
      likes: 0,
      categoryId: 1
    },
    {
      id: 2,
      name: 'SOKOLOV bracelet 94050714 ',
      description: 'Stylish SOKOLOV designer jewelry length 18 cm, weight 1.81 g silver, shell weaving',
      price: 11800,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h82/h3f/85546795630622.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/sokolov-94050714-dlina-18-sm-ves-1-81-g-serebro-pletenie-pantsirnoe-104153214/?c=750000000',
      likes: 0,
      categoryId: 1
    },
    {
      id: 3,
      name: 'Ring 585 GOLD Z1484',
      description: 'Size 17.5 weight 0.6 g gold, cubic zirconia',
      price: 43000,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pd5/p08/29510342.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/585-zolotoi-z1484-razmer-17-5-ves-0-6-g-zoloto-fianit-136130508/?c=750000000',
      likes: 0,
      categoryId: 1
    },
    {
      id: 4,
      name: 'PANDORA "Sparkling Herbarium" Necklace 392387C01',
      description: 'Pandora Sparkling Herbarium Cluster Pendant 45 length 45 cm weight 4.16g silver, zirconium ',
      price: 47530,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p77/pd1/19414236.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/kol-e-pandora-sverkajuschii-gerbarii-392387c01-45-dlina-45-sm-ves-4-16-g-serebro-tsirkonii-108225274/?c=750000000',
      likes: 0,
      categoryId: 1
    },
    {
      id: 5,
      name: 'SOKOLOV Brooch 92040073',
      description: 'SOKOLOV 92040073 brooch is a unique accessory weight 2.25 g silver, gold, cubic zirconia, rauchtopaz ',
      price: 22458,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hd0/h67/64610703736862.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/brosh-sokolov-92040073-ves-2-25-g-serebro-zoloto-fianit-rauhtopaz-107231076/?c=750000000',
      likes: 0,
      categoryId: 1
    },

    // LAPTOPS
    {
      id: 6,
      name: 'Mini bag genuine leather black',
      description: 'A mini bag that will become an indispensable accessory for stylish women! ',
      price: 1150,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h0d/hd3/85403792277534.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/mini-sumka-17589077-737166-natural-naja-kozha-chernyi-109541031/?c=750000000',
      likes: 0,
      categoryId: 2
    },
    {
      id: 7,
      name: 'Wallet PU Leather Black',
      description: 'A wallet made of artificial leather is a stylish and practical accessory',
      price: 717,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h4b/h71/79720555610142.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/koshelek-638978-iskusstvennaja-kozha-chernyi-109722410/?c=750000000',
      likes: 0,
      categoryId: 2
    },
    {
      id: 8,
      name: 'Quartz SOKOLOV steel',
      description: 'Typical Quartz, time display method analog (arrows)',
      price: 42459,
      rating: 4.4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p58/pc2/88877642.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/kvartsevye-sokolov-601-71-00-600-04-01-2---zhenskie-stal-nye-chasy-stal--152856983/?c=750000000',
      likes: 0,
      categoryId: 2
    },
    {
      id: 9,
      name: 'Oval sunglasses',
      description: 'Trendy glasses are popular in Korea roller anti-glare',
      price: 361,
      rating: 4.3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa3/p4c/1338590.jpeg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/leopardovye-ochki-oval-nye-antiblikovye-128084536/?c=750000000',
      likes: 0,
      categoryId: 2
    },
    {
      id: 10,
      name: 'Mini Bag',
      description: 'Materials: The main material is polyester, the lining material is acrylic.',
      price: 1534,
      rating: 4.2,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pb3/p86/50750430.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/mini-sumka-30257009-500275062-iskusstvennaja-kozha-chernyi-118119588/?c=750000000',
      likes: 0,
      categoryId: 2
    },

  
    {
      id: 11,
      name:'Yves Saint Laurent LIBRE INTENSE',
      description: 'LIBRE is the new INTENSE eau de parfum from Yves Saint Laurent,EDP 50 ml, for women',
      price: 20000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p4e/p5d/67244566.jpeg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/yves-saint-laurent-libre-intense-parfjumernaja-voda-edp-50-ml-dlja-zhenschin-100826950/?c=750000000',
      likes: 0,
      categoryId: 3
    },
    {
      id: 12,
      name: 'CHANEL Coco Mademoiselle',
      description: 'Chanel Coco Mademoiselle is an elegant and flawless, classic French perfume from the famous Coco Chanel, released in 2001,EDP 50 ml',
      price: 30296,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h0a/h25/81249138868254.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/chanel-coco-mademoiselle-parfjumernaja-voda-edp-50-ml-dlja-zhenschin-17302625/?c=750000000',
      likes: 0,
      categoryId: 3
    },
    {
      id: 13,
      name: 'Versace Bright Crystal',
      description: ' An alluring and luxurious fragrance for a Versace woman, strong and confident, EDT 90 мл',
      price: 35925,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h00/h43/63757221429278.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/versace-bright-crystal-tualetnaja-voda-edt-90-ml-dlja-zhenschin-17300749/?c=750000000',
      likes: 0,
      categoryId: 3
    },
    {
      id: 14,
      name: 'Dior Miss Dior 2021',
      description: 'Top notes: pink pepper, red orange, sweet orange, mandarin, Calabrian bergamot and lemon. Middle notes: Grasse rose, damask rose and jasmine leaf. Base notes: patchouli and rosewood,EDP 100 ml',
      price: 65297,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc4/h6c/86436472160286.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/dior-miss-dior-2021-parfjumernaja-voda-edp-100-ml-dlja-zhenschin-103903582/?c=750000000',
      likes: 0,
      categoryId: 3
    },
    {
      id: 15,
      name: 'CHANEL Chance Eau Tendre ',
      description: 'The opening chords of the fruit and flower composition are a refined duet of refreshing lightness of quince and exquisite grapefruit with a slight bitterness,EDP 50 ml',
      price: 50499,
      rating: 4.3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h44/h18/63823642099742.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/chanel-chance-eau-tendre-parfjumernaja-voda-edp-50-ml-dlja-zhenschin-100061195/?c=750000000',
      likes: 0,
      categoryId: 3
    },

  
    {
      id: 16,
      name: 'Estee Lauder Double Wear SPF10',
      description: ' Double Wear matte foundation for a flawless natural tone with a light and comfortable texture, 30ml',
      price: 23000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pc2/pe5/46896462.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/estee-lauder-double-wear-spf10-tonal-nyi-krem-1n1-ivory-nude-30-ml-103070444/?c=750000000',
      likes: 0,
      categoryId: 4
    },
    {
      id: 17,
      name: 'Dior Addict Lip Glow',
      description: 'Dior Addict Lip Glow 001 Pink Tint Lip Balm is the perfect combination of care and color that will give your lips a natural and healthy look.',
      price: 16000,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pd6/pdf/88216253.jpeg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/dior-addict-lip-glow-bal-zam-ottenochnyi-dlja-gub-001-pink-109233668/?c=750000000',
      likes: 0,
      categoryId: 4
    },
    {
      id: 18,
      name: 'Charlotte Tilbury Glowgasm Face Palette',
      description: 'A palette for the face, including four magnificent radiant shades for any skin tone.',
      price: 50000,
      rating: 4.4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h4a/hb6/64137153871902.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/charlotte-tilbury-glowgasm-face-palette-hailaiter-rumjana-bronzer-nudegasm-102477849/?c=750000000',
      likes: 0,
      categoryId: 4
    },
    {
      id: 19,
      name: 'Dior Forever Natural Velvet ',
      description: 'Powder Dior Forever Natural Velvet dry 2W warm beige',
      price: 45500,
      rating: 4.3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h8d/h46/85865406791710.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/pudra-dior-forever-natural-velvet-suhaja-2w-teplyi-bezhevyi-118843468/',
      likes: 0,
      categoryId: 4
    },
    {
      id: 20,
      name: 'TOM FORD shadows',
      description: 'Exquisite shades with pressed shadows TOM FORD Eye Color Quad 03 Nude Dip',
      price: 53475,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hef/h46/64120842125342.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/tom-ford-teni-pressovannye-eye-color-quad-03-nude-dip-100985470/?c=750000000',
      likes: 0,
      categoryId: 4
    }
  ];

  getCategories() {
    return this.categories;
  }

 
  getProducts() { return this.products; }

  likeProduct(productId: number) {
  const product = this.products.find(p => p.id === productId);
  if (product) {
    product.likes++;
  }
}

deleteProduct(productId: number) {
  this.products = this.products.filter(p => p.id !== productId);
}
}