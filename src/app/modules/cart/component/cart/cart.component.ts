import { Component, OnInit } from '@angular/core';
import { Cart } from '../../_model/cart';
import { CartService } from '../../_service/cart.service';

import Swal from 'sweetalert2';
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


  deleteCart(){
    Swal.fire({
      title: 'Deseas eliminar el carrito de compras?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.cart_service.deleteCart(this.rfc).subscribe(
          res => {
            this.getCart(this.rfc);
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Eliminacion exitosa!',
              showConfirmButton: false,
              timer: 1500
            })
          },
          err => {
            console.log(err);
            Swal.fire({
              icon: 'error',
              title: 'Error!',
              text: 'El carrito  no puede ser eliminado',
            })
          }
        )
      }
    })
  }

  removeFromCart(id_cart: number){

    Swal.fire({
      title: 'Deseas eliminar este producto del carrito de compras?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.cart_service.removeFromCart(id_cart).subscribe(
          res => {
            this.getCart(this.rfc);
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Eliminacion exitosa!',
              showConfirmButton: false,
              timer: 1500
            })
          },
          err => {
            console.log(err);
            Swal.fire({
              icon: 'error',
              title: 'Error!',
              text: 'El producto  no puede ser eliminado del carrito de compras',
            })
          }
        )
      }
    })
  }



}
