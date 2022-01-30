import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../../_model/item';
import { InvoiceService } from '../../_service/invoice.service';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.css']
})
export class InvoiceDetailComponent implements OnInit {

  items: Item[] = [];

  id_invoice: any = null;
  constructor(
    private invoice_service: InvoiceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id_invoice = this.route.snapshot.paramMap.get('id_invoice');
    this.getItems(this.id_invoice);
  }

  getItems(id_invoice: number) {
    this.invoice_service.getItems(id_invoice).subscribe(
      res => {
        this.items = res;
      },
      err => console.log(err)
    )
  }

}
