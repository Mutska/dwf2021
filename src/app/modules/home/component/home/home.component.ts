import { Component, OnInit } from '@angular/core';
import { DtoProductCategory } from '../../_model/dtoProductCategory';
import { ProductService } from 'src/app/modules/product/_service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Productos recuperados y sus imagenes
  products: DtoProductCategory[] = [];


  constructor(
    private product_service: ProductService,
  ) { }

  ngOnInit(): void {
    this.getProductsRandom();
  }

  getProductsRandom(){
    this.product_service.getProductsRandom().subscribe(
      res => {
        this.products = res;
      },
      err => console.log(err)
    )
  }



}
