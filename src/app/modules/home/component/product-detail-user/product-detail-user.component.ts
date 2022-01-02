import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/modules/product/_model/product';
import { ProductService } from 'src/app/modules/product/_service/product.service';
import { ProductImage } from 'src/app/modules/product/_model/productImage';
import { ProductImageService } from 'src/app/modules/product/_service/product-image.service';
import { Category } from 'src/app/modules/product/_model/category';
import { CategoryService } from 'src/app/modules/product/_service/category.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail-user',
  templateUrl: './product-detail-user.component.html',
  styleUrls: ['./product-detail-user.component.css']
})
export class ProductDetailUserComponent implements OnInit {

  // Datos del producto
  product: Product = new Product();
  gtin: any = null;

  // Categorias asociadas al producto
  categories: Category[] = [];
  category: Category = new Category();

  // Imagenes del producto
  images: ProductImage[] = [];




  constructor(
    private product_service: ProductService,
    private product_image_service: ProductImageService,
    private category_service: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.gtin = this.route.snapshot.paramMap.get('gtin');
    this.getProduct(this.gtin);
  }

  // Read y update de producto

  getProduct(gtin: string) {
    this.product_service.getProduct(gtin).subscribe(
      res => {
        this.product = res;
        this.getCategory(this.product.id_category);
        this.getProductImages(this.product.id_product);
      },
      err => console.log(err)
    )
  }



  // Read y Update de categoria del producto

  getCategories(){
    this.category_service.getCategories().subscribe(
      res => {
        this.categories = res;
      },
      err => console.log(err)
    )
  }


  getCategory(id_category: number){
    this.category_service.getCategory(id_category).subscribe(
      res => {
        this.category = res;
      },
      err => console.log(err)
    )
  }

  // Read, Create Y Delete de imagenes del producto

  getProductImages(id_product: number){
    this.product_image_service.getProductImages(id_product).subscribe(
      res => {
        this.images = res;
        console.log(this.images);
      },
      err => console.log(err)
    )
  }

}
