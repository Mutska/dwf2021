import { ProductImage } from "../../product/_model/productImage";

export class DtoProductCategory{
    gtin: string;
    id_product: number;
    images: ProductImage[];
    price: number;
    product: string;
    status: number;

    constructor(){
        this.gtin = "";
        this.id_product = 0;
        this.images = [];
        this.price = 0.0;
        this.product = "";
        this.status = 1;
    }

}