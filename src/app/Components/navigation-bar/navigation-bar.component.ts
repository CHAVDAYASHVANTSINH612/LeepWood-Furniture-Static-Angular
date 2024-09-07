import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBars,
  faXmark,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css',
})
export class NavigationBarComponent {
  @ViewChild('ulElement') ulElement!: ElementRef;

  isMenuOpen = false;
  faBars = faBars;
  faXmark = faXmark;
  menuIcon = faBars;
  faLocationDot = faLocationDot;

  toggleFunc(): void {
    console.log('hello');
    this.isMenuOpen = !this.isMenuOpen;

    if (this.isMenuOpen) {
      this.menuIcon = this.faXmark; // Change icon to X mark
      this.ulElement.nativeElement.classList.add('showDropDown');
      console.log(this.ulElement.nativeElement);
    } else {
      this.menuIcon = this.faBars; // Change icon back to bars
      this.ulElement.nativeElement.classList.remove('showDropDown');
      console.log(this.ulElement.nativeElement);
    }
  }
}
