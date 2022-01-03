import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceComponent } from './component/invoice/invoice.component';
import { InvoiceDetailComponent } from './component/invoice-detail/invoice-detail.component';
import { RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'invoice-detail/:rfc/:id_invoice', component: InvoiceDetailComponent}
];

@NgModule({
  declarations: [
    InvoiceComponent,
    InvoiceDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
     InvoiceComponent,
     InvoiceDetailComponent
  ]
})
export class InvoiceModule { }
