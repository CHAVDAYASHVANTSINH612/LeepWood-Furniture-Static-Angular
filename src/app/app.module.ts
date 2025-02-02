import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './Components/navigation-bar/navigation-bar.component';
import { HomeComponent } from './Components/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductsComponent } from './Components/products/products.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { ThreeDComponent } from './Components/three-d/three-d.component';
import { ProductSofaComponent } from './Components/product-sofa/product-sofa.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeLandingPageComponent } from './Components/home-landing-page/home-landing-page.component';
import { ProductDetailComponent } from './Components/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HomeComponent,
    ProductsComponent,
    ContactUsComponent,
    ThreeDComponent,
    ProductSofaComponent,
    FooterComponent,
    HomeLandingPageComponent,
    ProductDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
