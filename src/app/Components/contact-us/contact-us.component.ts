import { Component, OnInit } from '@angular/core';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  constructor() {}
  faLocationDot = faLocationDot;
  faPhone = faPhone;
  ngOnInit() {}
}
