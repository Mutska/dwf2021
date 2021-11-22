import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExchangeRateComponent } from '../app/modules/exchange-rate/component/exchange-rate/exchange-rate.component';
import { HomeComponent } from '../app/modules/home/component/home/home.component';
import { RegionComponent } from '../app/modules/customer/component/region/region.component';
import { CategoryComponent } from '../app/modules/product/component/category/category.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'exchange-rate', component: ExchangeRateComponent},
  {path: 'home', component: HomeComponent },
  {path: 'region', component: RegionComponent },
  {path: 'category', component: CategoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
