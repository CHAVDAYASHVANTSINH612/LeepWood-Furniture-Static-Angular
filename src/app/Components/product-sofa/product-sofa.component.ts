import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-sofa',
  templateUrl: './product-sofa.component.html',
  styleUrls: ['./product-sofa.component.scss'],
})
export class ProductSofaComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  totalSlides = 3; // Number of static cards
  currentSlide = 0;

  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }
  }

  nextSlide() {
    if (this.currentSlide < this.totalSlides - 1) {
      this.currentSlide++;
    }
  }

}
