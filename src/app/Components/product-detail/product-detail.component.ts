import { Component, model, OnInit } from '@angular/core';
import { Product } from '../../Models/Product';
import { ProductServiceService } from '../../Service/product-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent  implements OnInit {

  constructor(private productService:ProductServiceService,private route:ActivatedRoute,private router:Router) { }

  product!:Product;
  currentIndex: number = 0;
  totalImages: number = 3;
  sku:string = '';
  statusMessage:string=''
 

  ngOnInit() {
    this.sku = this.route.snapshot.params['sku'];
    this.product =  this.productService.getProductBySKU(this.sku);
    this.totalImages = this.product.ImageUrls.length;
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

  orderForm = new FormGroup({
    name: new FormControl('',Validators.required),
    phoneNumber: new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]),
    address: new FormControl('',Validators.required),
    product: new FormControl('')
  });

  placeOrder(){
    this.statusMessage=''
    let name= this.orderForm.get('name');
    let phoneNumber= this.orderForm.get('phoneNumber');
    let address= this.orderForm.get('address');
    let product_val="SKU="+this.product.SKU +" ProductName="+this.product.Title ;
    
    let form_name = "Name="+name?.value+"&&phonenumber="+phoneNumber?.value+"&&address="+address?.value+"&&product="+product_val;

    if(!name?.valid){
      this.statusMessage="Name Required"
      return;
    }
    else if(!phoneNumber?.valid){
      this.statusMessage="PhoneNumber must be 10 digit"
      return;
    }
    else if(!address?.valid){
      this.statusMessage="Address Required"
      return;
    }

   let model_form = {
      name : form_name ,
      // email: product_val
     };

     this.productService.submitForm(model_form).subscribe(
      (response) => {
        console.log('Form submitted successfully', response);
        this.router.navigate(["/order-placed"])
        // alert("Order Placed Successfully")
        // Handle success (e.g., display a thank-you message)
      },
      (error) => {
        console.error('Error submitting form', error);
        // Handle error (e.g., display an error message)
      }
    );

  }
  
 
}
