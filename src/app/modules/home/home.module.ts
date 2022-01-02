import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProductDetailUserComponent } from './component/product-detail-user/product-detail-user.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'product-detail-user/:gtin', component: ProductDetailUserComponent}
];

@NgModule({
  declarations: [
    HomeComponent,
    ProductDetailUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
     HomeComponent,
     RouterModule
  ]
})
export class HomeModule { }
