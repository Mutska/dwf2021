export class ProductCart{
    gtin: string;
    id_product: number;
    price: number;
    product: string;
    stock: number;
    status: number;

    constructor(){
        this.gtin = "";
        this.id_product = 0;
        this.price = 0;
        this.product = "";
        this.stock = 0;
        this.status = 1;
    }
}