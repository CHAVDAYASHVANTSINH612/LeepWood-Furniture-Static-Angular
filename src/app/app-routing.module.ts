import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLandingPageComponent } from './Components/home-landing-page/home-landing-page.component';
import { ProductDetailComponent } from './Components/product-detail/product-detail.component';
import { OrderPlacedThanksComponent } from './Components/order-placed-thanks/order-placed-thanks.component';

const routes: Routes = [
    { path: '', component: HomeLandingPageComponent },
    { path: 'product-detail/:sku', component: ProductDetailComponent },
    { path: 'order-placed', component: OrderPlacedThanksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}

