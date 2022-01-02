import { ProductCart } from '../_model/productCart';

export class Cart{
    id_cart: number;
    id_product: number;
    product: ProductCart;
    quantity: number;
    rfc: string;
    status: number;

    constructor(){
        this.id_cart = 0;
        this.id_product = 0;
        this.product = new ProductCart();
        this.quantity = 0;
        this.rfc = "";
        this.status = 1;
    }
}