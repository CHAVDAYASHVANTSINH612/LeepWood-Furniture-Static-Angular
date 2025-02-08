import { AfterViewInit, Component } from '@angular/core';

import {
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { ProductServiceService } from '../../Service/product-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit{
  faLocationDot = faLocationDot;

  constructor(private productService: ProductServiceService) {}

  ngAfterViewInit(): void {

    let ua = navigator.userAgent;

    if(ua != null){

      let model_form = {
       name : ua
      };

      this.productService.submitPageVisitUAForm(model_form).subscribe(
        (response) => {
          console.log("Page Visit UA Form Submitted Successfully");
        },
        (error) => {
          console.error('Error submitting UAform', error);
        }

      );
    }

  }
}
