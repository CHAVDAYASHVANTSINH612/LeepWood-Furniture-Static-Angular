import { Component, OnInit } from '@angular/core';
import { Product } from '../../Models/Product';
import { ProductServiceService } from '../../Service/product-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent  implements OnInit {

  constructor(private productService:ProductServiceService,private route:ActivatedRoute) { }

  product!:Product;
  currentIndex: number = 0;
  totalImages: number = 3;
  sku:string = '';
 

  ngOnInit() {
    this.sku = this.route.snapshot.params['sku'];
    this.product =  this.productService.getProductBySKU(this.sku);
    this.totalImages = this.product.ImageUrls.length;
    console.log(this.product);
    window.scrollTo(0, 0);
  }
  

  prevImage(): void {
    this.currentIndex = (this.currentIndex - 1 + this.totalImages) % this.totalImages;
  }

  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.totalImages;
  }

  goToImage(index: number): void {
    this.currentIndex = index;
  }

}
