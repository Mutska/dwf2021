import { Injectable } from '@angular/core';
import { Invoice } from '../_model/invoice';
import { Item } from '../_model/item';
import { HttpClient } from '@angular/common/http';
import { ApisURI } from '../../../shared/apis-uri';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private apiURI = ApisURI.dwf20221apiURI;
  private resource = "/invoice";

  constructor(
    private http: HttpClient
  ) { }

  getCart(rfc: string){
    return this.http.get<Invoice[]>(this.apiURI + this.resource + `/${rfc}`);
  }

  purchase(rfc: string){
    return this.http.post(this.apiURI + this.resource + `/${rfc}`, rfc);
  }

  getItems(id_invoice: number){
    return this.http.get<Item[]>(this.apiURI + this.resource + "/item" + `/${id_invoice}`);
  }
}
