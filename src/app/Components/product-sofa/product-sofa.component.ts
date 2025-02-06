import { Component, OnInit } from '@angular/core';
import { Product } from '../../Models/Product';
import { ProductServiceService } from '../../Service/product-service.service';

@Component({
  selector: 'app-product-sofa',
  templateUrl: './product-sofa.component.html',
  styleUrls: ['./product-sofa.component.scss'],
})
export class ProductSofaComponent  implements OnInit {

  constructor(private productService:ProductServiceService) { }


  Jhulas:Product[] = [];
  CofeeTables :Product[] = [];
  Sofas:Product[]=[];

  ngOnInit() {
    this.Jhulas = this.productService.getProductsByCategory("Jhulas");
    this.CofeeTables = this.productService.getProductsByCategory("Coffee Tables");
    this.Sofas = this.productService.getProductsByCategory("Sofa");
    console.log(this.Sofas);
  }


}
