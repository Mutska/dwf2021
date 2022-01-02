import { Component, OnInit } from '@angular/core';
import { DtoProductCategory } from '../../_model/dtoProductCategory';
import { ProductService } from 'src/app/modules/product/_service/product.service';
import { Category } from 'src/app/modules/product/_model/category';
import { CategoryService } from 'src/app/modules/product/_service/category.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Productos recuperados y sus imagenes
  products: DtoProductCategory[] = [];
  categories: Category[] = [];

  // Formulario para actualizar la categoria del producto
  formularioCategory = this.formBuilder.group({
    id_category: ['', Validators.required],
  });

  constructor(
    private product_service: ProductService,
    private category_service: CategoryService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.getProductsRandom();
    this.getCategories();
  }

  getProductsRandom(){
    this.product_service.getProductsRandom().subscribe(
      res => {
        this.products = res;
      },
      err => console.log(err)
    )
  }

  getCategories(){
    this.category_service.getCategories().subscribe(
      res => {
        this.categories = res;
      },
      err => console.log(err)
    )
  }

  onSubmitCategory(){
    var id_category = this.formularioCategory.controls['id_category'].value;
    this.product_service.getProductsCategory(id_category).subscribe(
      res => {
        this.products = res;
      },
      err => console.log(err)
    )
  }


}
