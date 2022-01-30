import { Component, OnInit } from '@angular/core';
import { Invoice } from '../../_model/invoice';
import { InvoiceService } from '../../_service/invoice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  private rfc = "SAIV920101A00";

  // Facturas
  invoices: Invoice[] = [];

  constructor(
    private invoice_service: InvoiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCart(this.rfc)
  }


  getCart(rfc: string){
    this.invoice_service.getCart(rfc).subscribe(
      res => {
        this.invoices = res;
      },
      err => console.log(err)
    )
  }

  invoiceDetail(rfc: string, id_invoice: number){
  // Redireccionar a detalle del producto
    this.router.navigate(['invoice-detail/'+ rfc + '/' + id_invoice]);
}

}
