import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './component/cart/cart.component';
import { PurchaseComponent } from './component/purchase/purchase.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'purchase', component: PurchaseComponent}
];

@NgModule({
  declarations: [
    CartComponent,
    PurchaseComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
     CartComponent,
     RouterModule
  ]
})
export class CartModule { }
