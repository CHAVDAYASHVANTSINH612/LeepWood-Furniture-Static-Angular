import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { ProductServiceService } from '../../Service/product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  faLocationDot = faLocationDot;
  faPhone = faPhone;
  statusMessage:string='';
  isLoading:boolean = false;

  constructor(private productService:ProductServiceService,private router:Router) {
   }


  ngOnInit() {}

  contactUsForm = new FormGroup({
    name: new FormControl('',Validators.required),
    phoneNumber: new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]),
    message: new FormControl(''),
  });


  submitContactUsForm(){
    this.isLoading = true;
    this.statusMessage=''
    let name= this.contactUsForm.get('name');
    let phoneNumber= this.contactUsForm.get('phoneNumber');
    let message= this.contactUsForm.get('message');
    
    let form_name = "Name="+name?.value+"&&phonenumber="+phoneNumber?.value+"&&message="+message?.value;

    if(!name?.valid){
      this.statusMessage="Name Required"
      this.isLoading = false;
      return;
    }
    else if(!phoneNumber?.valid){
      this.statusMessage="PhoneNumber must be 10 digit"
      this.isLoading = false;
      return;
    }

   let model_form = {
      name : form_name ,
      // email: product_val
     };

     this.productService.submitContactUsForm(model_form).subscribe(
      (response) => {
        console.log('Form submitted successfully', response);
        this.contactUsForm.reset();
        this.isLoading = false;
        alert("Form submitted successfully")
      },
      (error) => {
        console.error('Error submitting form', error);
        this.isLoading = false;
      }
    );

  }


}
