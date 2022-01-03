import { Component, OnInit } from '@angular/core';
import { InvoiceService } from 'src/app/modules/invoice/_service/invoice.service';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  private rfc = "SAIV920101A00";

  constructor(
    private invoice_service: InvoiceService
  ) { 
  }

  ngOnInit(): void {
  }


  testing(){

    var credit_card = (<HTMLInputElement>document.getElementById("cc-number")).value;
    var cvc = (<HTMLInputElement>document.getElementById("cc-cvc")).value;
    var today   = new Date();
    var someday = new Date();
    var exMonth =  (<HTMLInputElement>document.getElementById("month-exp")).value;
    var exYear  =  (<HTMLInputElement>document.getElementById("year-exp")).value;

    var ok = true;

    if (!this.validateCardNumber(credit_card)){
      ok = false;
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Número de tarjeta inválido.',
      })
    }

    if (!this.validateMonth(exMonth)){
      ok = false;
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Formato de mes inválido',
      })
    }

    if (!this.validateYear(exYear)){
      ok = false;
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Formato de año inválido',
      })
    }

    let year = parseInt(exYear);
    let month = parseInt(exYear);
    someday.setFullYear(year, month, 1);

    if (someday.getMinutes() < today.getMinutes()){
      ok = false;
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'La fecha de vencimiento es cercana a la fecha de hoy. Seleccione una fecha de caducidad válida',
      })
    }


    if (!this.validateCVCNumber(cvc)){
      ok = false;
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'CVC Inválido',
      })
    }

    if (ok) {
    Swal.fire({
      title: 'Deseas realizar la compra?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, confirmar compra!'
    }).then((result) => {
      if (result.isConfirmed) {
       this.invoice_service.purchase(this.rfc).subscribe(
         res => {
           Swal.fire({
             position: 'top-end',
             icon: 'success',
             title: 'Compra exitosa',
             showConfirmButton: false,
             timer: 1500
           })
         },
         err => {
           console.log(err);
           Swal.fire({
             icon: 'error',
             title: 'Error!',
             text: 'Compra fallida',
           })
         }
       )
      }
    })
  }

  }

validateCardNumber(number: string) {
    var regex = new RegExp("^[0-9]{16}$");
    if (!regex.test(number))
        return false;

    return this.luhnCheck(number);
}

validateMonth(number: string){
    var regex = new RegExp("^[0-9]{2}$");
    if (!regex.test(number))
      return false;
    return true;
}

validateYear(number: string){
    var regex = new RegExp("^[0-9]{2}$");
    if (!regex.test(number))
      return false;
    return true;
}

validateCVCNumber(number: string){
    var regex = new RegExp("^[0-9]{3}$");
    if (!regex.test(number))
      return false;
    return true;
}

luhnCheck(val: string) {
    var sum = 0;
    for (var i = 0; i < val.length; i++) {
        var intVal = parseInt(val.substr(i, 1));
        if (i % 2 == 0) {
            intVal *= 2;
            if (intVal > 9) {
                intVal = 1 + (intVal % 10);
            }
        }
        sum += intVal;
    }
    return (sum % 10) == 0;
}

}
