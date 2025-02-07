import { Injectable } from '@angular/core';
import { Product } from '../Models/Product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  formspreeUrl = "https://formspree.io/f/xovjwkww";

  ContactUsformspreeUrl = "https://formspree.io/f/movqqgak";
  
  constructor(private http:HttpClient) { }

  submitForm(formData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post(this.formspreeUrl, formData, { headers });
  }

  submitContactUsForm(formData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post(this.ContactUsformspreeUrl, formData, { headers });
  }

  getProductBySKU(sku:string):Product{
    return this.products.find(product => product.SKU === sku)!;
  }

  getProductsByCategory(category:string):Product[]{
    return this.products.filter(product => product.Category.toLowerCase() === category.toLowerCase());
  }

  getAllProducts():Product[]{
    return this.products;
  }

  products :Product[] = [
    {
      Title: "Elegant Metal Frame Swing",
      SmallDescription: "Add a stylish touch with this sturdy, comfortable swing, perfect for indoor and outdoor relaxation.",
      LongDescription: "In Development .. stay tuned",
      Price: 34000,
      ImageUrls: ["assets/jhula1.png"],
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
      Price: 29000,
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
      Price: 29500,
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
      Price: 29000,
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
      Price: 29900,
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
      Price: 29500,
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
      Price: 29000,
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
      Price: 39000,
      ImageUrls: ["assets/jhula8.webp"],
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
      SKU: "JH-008"
    },


    {
      Title: "Marble Duo Nesting Coffee Tables",
      SmallDescription: "Elegant marble-topped nesting tables with black metal frames bring style to any room.",
      LongDescription: "In Development .. stay tuned",
      Price: 24000,
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
      Price: 26000,
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
      SKU: "CT-004"
    },
    {
      Title: "Modern Nesting Coffee Tables",
      SmallDescription: "Elevate your space with these marble-top tables, perfect for stylish and functional living.",
      LongDescription: "In Development .. stay tuned",
      Price: 24000,
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
      SKU: "CT-002"
    },
    {
      Title: "Contemporary Marble Effect Side Tables",
      SmallDescription: "Modern side tables featuring pristine white marble-effect tops with black metal framing.",
      LongDescription: "In Development .. stay tuned",
      Price: 22000,
      ImageUrls: ["assets/CofeeTable3.jpeg"],
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
      Title: "Luxurious Velvet Sofa Set",
      SmallDescription: "Elevate your space with this plush, modern sofa set, designed for ultimate comfort and style.",
      LongDescription: "In Development .. stay tuned",
      Price: 46000,
      ImageUrls: ["assets/Sofas/Sofa1_Blue.jpeg","assets/Sofas/Sofa2_Blue.png","assets/Sofas/Sofa3_Blue.png","assets/Sofas/Sofa4_Blue.png"],
      Category: "Sofa", 
      InStock: true,
      Rating: 4.0,
      Dimensions: {
        length: 65,
        width: 44,
        height: 72
      },
      Material: "Velvet",
      Color: "Blue",
      Weight: 35,
      SKU: "SF-001"
    },
    {
      Title: "Elegant Peach Sofa Set",
      SmallDescription: " Soft peach fabric with sleek design, adding warmth and style to any space.",
      LongDescription: "In Development .. stay tuned",
      Price: 42000,
      ImageUrls: ["assets/Sofas/Sofa7_type3.jpeg","assets/Sofas/Sofa8_type3.jpeg"],
      Category: "Sofa", 
      InStock: true,
      Rating: 4.0,
      Dimensions: {
        length: 65,
        width: 44,
        height: 72
      },
      Material: "Velvet",
      Color: "Blue",
      Weight: 35,
      SKU: "SF-003"
    },
    {
      Title: "Classic 3+2 Sofa Set",
      SmallDescription: " Elegant pink upholstery with a vintage-inspired design, perfect for cozy and stylish interiors.",
      LongDescription: "In Development .. stay tuned",
      Price: 43000,
      ImageUrls: ["assets/Sofas/Sofa10_type4_3plus2rado2.png","assets/Sofas/Sofa11_type4_3plus2rado2.png","assets/Sofas/Sofa12_type4_3plus2rado2.jpeg"],
      Category: "Sofa", 
      InStock: true,
      Rating: 4.0,
      Dimensions: {
        length: 65,
        width: 44,
        height: 72
      },
      Material: "Velvet",
      Color: "Blue",
      Weight: 35,
      SKU: "SF-004"
    },
    // {
    //   Title: "Modern 3+2 Sofa Set",
    //   SmallDescription: "Contemporary beige sofa set with plush cushions and floral accent pillows, adding elegance to any living space.",
    //   LongDescription: "In Development .. stay tuned",
    //   Price: 47000,
    //   ImageUrls: ["assets/Sofa10_type4_3plus2rado2.png","assets/Sofa11_type4_3plus2rado2.png","assets/Sofa12_type4_3plus2rado2.png"],
    //   Category: "Sofa", 
    //   InStock: true,
    //   Rating: 4.0,
    //   Dimensions: {
    //     length: 65,
    //     width: 44,
    //     height: 72
    //   },
    //   Material: "Velvet",
    //   Color: "Blue",
    //   Weight: 35,
    //   SKU: "SF-004"
    // },
    {
      Title: "Modern 3+2 Sofa Set",
      SmallDescription: "Contemporary beige sofa set with plush cushions and floral accent pillows, adding elegance to any living space.",
      LongDescription: "In Development .. stay tuned",
      Price: 46000,
      ImageUrls: ["assets/Sofas/Sofa14_type5_3plus2rado2.jpeg","assets/Sofas/Sofa13_type5_3plus2rado2.png"],
      Category: "Sofa", 
      InStock: true,
      Rating: 4.0,
      Dimensions: {
        length: 65,
        width: 44,
        height: 72
      },
      Material: "Velvet",
      Color: "Blue",
      Weight: 35,
      SKU: "SF-005"
    },
    {
      Title: "Modern L-Shaped Sofa",
      SmallDescription: "Stylish and spacious L-shaped sofa in neutral beige, offering comfort and elegance for contemporary living spaces.",
      LongDescription: "In Development .. stay tuned",
      Price: 75000,
      ImageUrls: ["assets/Sofas/Sofa18_Type6_Ltype.jpeg","assets/Sofas/Sofa19_Type6_Ltype.jpeg","assets/Sofas/Sofa16_Type6_Ltype.jpeg","assets/Sofas/Sofa17_Type6_Ltype.jpeg"],
      Category: "Sofa", 
      InStock: true,
      Rating: 4.0,
      Dimensions: {
        length: 65,
        width: 44,
        height: 72
      },
      Material: "Velvet",
      Color: "Blue",
      Weight: 35,
      SKU: "SF-006"
    },
    {
      Title: "Red Sofa Cum Bed",
      SmallDescription: "Elegant and multifunctional sofa cum bed in deep red, perfect for maximizing space with style and comfort.",
      LongDescription: "In Development .. stay tuned",
      Price: 60000,
      ImageUrls: ["assets/Sofas/Sofa9_Red_Type7_SofacumBed.png","assets/Sofas/Sofa9_Red_Type7_SofacumBed2.jpeg"],
      Category: "Sofa", 
      InStock: true,
      Rating: 4.0,
      Dimensions: {
        length: 65,
        width: 44,
        height: 72
      },
      Material: "Velvet",
      Color: "Blue",
      Weight: 35,
      SKU: "SF-006"
    }


  ]
}
