import { Injectable } from '@angular/core';
import { Cart } from '../_model/cart';
import { ApiResponse } from '../_model/apiResponse';
import { HttpClient } from '@angular/common/http';
import { ApisURI } from '../../../shared/apis-uri';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private apiURI = ApisURI.dwf20221apiURI;
  private resource = "/cart";

  constructor(
    private http: HttpClient
  ) { }

  getCart(rfc: string){
    return this.http.get<Cart[]>(this.apiURI + this.resource + `/${rfc}`);
  }

  addToCart(cart: JSON){
    return this.http.post(this.apiURI + this.resource, cart);
  }


  removeFromCart(id_cart: number){
    return this.http.delete(this.apiURI + this.resource + `/${id_cart}`);
  }

  deleteCart(rfc: string){
    return this.http.delete(this.apiURI + this.resource + `/${rfc}`);
  }
}
