import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './Components/navigation-bar/navigation-bar.component';
import { HomeComponent } from './Components/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductsComponent } from './Components/products/products.component';
import { ServicesComponent } from './Components/services/services.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { ThreeDComponent } from './Components/three-d/three-d.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HomeComponent,
    ProductsComponent,
    ServicesComponent,
    ContactUsComponent,
    ThreeDComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
