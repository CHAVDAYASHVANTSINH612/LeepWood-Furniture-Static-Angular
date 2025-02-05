import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-slider-banner',
  templateUrl: './slider-banner.component.html',
  styleUrls: ['./slider-banner.component.scss'],
})
export class SliderBannerComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  interval: any;

  constructor() { }

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  startAutoSlide() {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 3000); // Change slide every 3 seconds
  }

  prevSlide() {
    this.currentSlide = this.currentSlide === 0 ? 2 : this.currentSlide - 1;
    this.updateSlidePosition();
  }

  nextSlide() {
    this.currentSlide = this.currentSlide === 2 ? 0 : this.currentSlide + 1;
    this.updateSlidePosition();
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.updateSlidePosition();
  }

  private updateSlidePosition() {
    const slidesContainer = document.querySelector('.flex') as HTMLElement;
    if (slidesContainer) {
      slidesContainer.style.transform = `translateX(-${this.currentSlide * 100}%)`;
    }
  }

  touchStartX = 0;
  touchEndX = 0;

  startTouch(event: TouchEvent) {
    this.touchStartX = event.touches[0].clientX;
  }

  moveTouch(event: TouchEvent) {
    this.touchEndX = event.touches[0].clientX;
  }

  endTouch(event: TouchEvent) {
    const difference = this.touchStartX - this.touchEndX;
    const threshold = 100; // minimum distance for swipe
    
    if (Math.abs(difference) > threshold) {
      if (difference > 0) {
        // Swipe left
        this.currentSlide = Math.min(this.currentSlide + 1, 2);
      } else {
        // Swipe right
        this.currentSlide = Math.max(this.currentSlide - 1, 0);
      }
    }
  }

}
