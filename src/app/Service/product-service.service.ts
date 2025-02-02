import { Injectable } from '@angular/core';
import { Product } from '../Models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() { }

  getProductBySKU(sku:string):Product{
    return this.products.find(product => product.SKU === sku)!;
  }

  getProductsByCategory(category:string):Product[]{
    return this.products.filter(product => product.Category === category);
  }

  getAllProducts():Product[]{
    return this.products;
  }

  products :Product[] = [
    {
      Title: "Elegant Metal Frame Swing",
      SmallDescription: "Add a stylish touch with this sturdy, comfortable swing, perfect for indoor and outdoor relaxation.",
      LongDescription: "In Development .. stay tuned",
      Price: 22000,
      ImageUrls: ["assets/jhula1.jpeg","assets/jhula2.jpeg"],
      Category: "Jhulas",
      InStock: true,
      Rating: 4.5,
      Dimensions: {
        length: 72,
        width: 48,
        height: 78
      },
      Material: "Metal Frame with Cushions",
      Color: "Black/Beige",
      Weight: 45,
      SKU: "JH-001"
    },
    {
      Title: "Classic 2-Seater Swing",
      SmallDescription: "Relax in style with this durable, spacious swing, perfect for both indoor and outdoor use.",
      LongDescription: "In Development .. stay tuned",
      Price: 12000,
      ImageUrls: ["assets/jhula2.jpeg"], 
      Category: "Jhulas",
      InStock: true,
      Rating: 4.2,
      Dimensions: {
        length: 68,
        width: 45,
        height: 75
      },
      Material: "Steel with Weather-resistant Fabric",
      Color: "Brown",
      Weight: 38,
      SKU: "JH-002"
    },
    {
      Title: "Wooden Slat Swing",
      SmallDescription: "Enjoy a cozy retreat with this sturdy 2-seater swing, ideal for indoor and outdoor spaces.",
      LongDescription: "In Development .. stay tuned",
      Price: 14500,
      ImageUrls: ["assets/jhula3.jpeg"],
      Category: "Jhulas",
      InStock: true,
      Rating: 4.3,
      Dimensions: {
        length: 70,
        width: 46,
        height: 76
      },
      Material: "Teak Wood",
      Color: "Natural Wood",
      Weight: 42,
      SKU: "JH-003"
    }
    ,{
      Title: "Elegant 2-Seater Swing Jhula",
      SmallDescription: "Add charm to your space with this stylish, sturdy swing, perfect for relaxing indoors or outdoors.",
      LongDescription: "In Development .. stay tuned",
      Price: 9000,
      ImageUrls: ["assets/jhula5.jpeg"],
      Category: "Jhulas", 
      InStock: true,
      Rating: 4.0,
      Dimensions: {
        length: 65,
        width: 44,
        height: 72
      },
      Material: "Metal Frame with Cushions",
      Color: "Red/Black",
      Weight: 35,
      SKU: "JH-005"
    },
    {
      Title: "2-Seater Garden Swing Jhula",
      SmallDescription: "Classic wooden slat swing with floral canopy combines comfort for peaceful outdoor relaxation.",
      LongDescription: "In Development .. stay tuned",
      Price: 9000,
      ImageUrls: ["assets/jhula6.jpeg"],
      Category: "Jhulas", 
      InStock: true,
      Rating: 4.0,
      Dimensions: {
        length: 65,
        width: 44,
        height: 72
      },
      Material: "Metal Frame with Cushions",
      Color: "Brown/Black",
      Weight: 35,
      SKU: "JH-006"
    },
    {
      Title: "Modern Blue Garden Swing Jhula",
      SmallDescription: "Sleek outdoor swing featuring vibrant blue slats and floral canopy for refreshing relaxation.",
      LongDescription: "In Development .. stay tuned",
      Price: 9000,
      ImageUrls: ["assets/jhula7.jpeg"],
      Category: "Jhulas", 
      InStock: true,
      Rating: 4.0,
      Dimensions: {
        length: 65,
        width: 44,
        height: 72
      },
      Material: "Metal Frame with Cushions",
      Color: "Blue/Black",
      Weight: 35,
      SKU: "JH-007"
    },
    {
      Title: "Minimalist 2-Seater Garden Swing",
      SmallDescription: " Sleek garden swing with mint green slats combines design with durable metal framing.",
      LongDescription: "In Development .. stay tuned",
      Price: 9000,
      ImageUrls: ["assets/jhula4.jpeg"],
      Category: "Jhulas", 
      InStock: true,
      Rating: 4.0,
      Dimensions: {
        length: 65,
        width: 44,
        height: 72
      },
      Material: "Metal Frame with Cushions",
      Color: "Blue/Black",
      Weight: 35,
      SKU: "JH-004"
    },
    {
      Title: "Traditional Jhulas",
      SmallDescription: "Add a traditional touch with our stylish Jhulas, perfect for both indoor and outdoor relaxation.",
      LongDescription: "In Development .. stay tuned",
      Price: 9000,
      ImageUrls: ["assets/products1_jhula.webp"],
      Category: "Jhulas", 
      InStock: true,
      Rating: 4.0,
      Dimensions: {
        length: 65,
        width: 44,
        height: 72
      },
      Material: "Metal Frame with Cushions",
      Color: "Blue/Black",
      Weight: 35,
      SKU: "JH-004"
    },
    {
      Title: "Marble Duo Nesting Coffee Tables",
      SmallDescription: "Elegant marble-topped nesting tables with black metal frames bring style to any room.",
      LongDescription: "In Development .. stay tuned",
      Price: 22000,
      ImageUrls: ["assets/CofeeTable1.jpeg"],
      Category: "Coffee Tables",
      InStock: true,
      Rating: 4.0,
      Dimensions: {
        length: 65,
        width: 44, 
        height: 72
      },
      Material: "Marble, Metal Frame",
      Color: "White/Black",
      Weight: 35,
      SKU: "CT-001"
    },
    {
      Title: "Luxe Gold Marble Side Tables",
      SmallDescription: "Elegant marble-topped tables with gold-finished frames bring luxury to contemporary spaces.",
      LongDescription: "In Development .. stay tuned",
      Price: 9000,
      ImageUrls: ["assets/CofeeTable4.jpeg"], 
      Category: "Coffee Tables",
      InStock: true,
      Rating: 4.0,
      Dimensions: {
        length: 65,
        width: 44,
        height: 72
      },
      Material: "Marble, Gold-finished Metal",
      Color: "White/Gold",
      Weight: 35,
      SKU: "CT-002"
    },
    {
      Title: "Modern Nesting Coffee Tables",
      SmallDescription: "Elevate your space with these marble-top tables, perfect for stylish and functional living.",
      LongDescription: "In Development .. stay tuned",
      Price: 12000,
      ImageUrls: ["assets/CofeeTable2.jpeg"],
      Category: "Coffee Tables", 
      InStock: true,
      Rating: 4.0,
      Dimensions: {
        length: 65,
        width: 44,
        height: 72
      },
      Material: "Marble, Metal Frame",
      Color: "White/Black",
      Weight: 35,
      SKU: "CT-003"
    },
    {
      Title: "Contemporary Marble Effect Side Tables",
      SmallDescription: "Modern side tables featuring pristine white marble-effect tops with black metal framing.",
      LongDescription: "In Development .. stay tuned",
      Price: 12000,
      ImageUrls: ["assets/CofeeTable2.jpeg"],
      Category: "Coffee Tables", 
      InStock: true,
      Rating: 4.0,
      Dimensions: {
        length: 65,
        width: 44,
        height: 72
      },
      Material: "Marble, Metal Frame",
      Color: "White/Black",
      Weight: 35,
      SKU: "CT-004"
    }

  ]
}
