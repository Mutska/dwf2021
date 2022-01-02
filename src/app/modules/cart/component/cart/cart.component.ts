import { Component, OnInit } from '@angular/core';
import { Cart } from '../../_model/cart';
import { CartService } from '../../_service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  private rfc = "SAIV920101A00";

  // Carrito
  carts: Cart[] = [];

  constructor(
    private cart_service: CartService
  ) { }

  ngOnInit(): void {
    this.getCart(this.rfc);
  }


  getCart(rfc: string){
    this.cart_service.getCart(rfc).subscribe(
      res => {
        this.carts = res;
      },
      err => console.log(err)
    )
  }


}
