import {Product} from './app.product.model';
export class Logic {
  private products: Array<Product>;

  constructor(){
    this.products = new Array<Product>();
    this.products.push(new Product("Prd101", "Laptop", "ECT", "IBM","Gaming",120000));
    this.products.push(new Product("Prd102", "Router", "ECT", "HP","100GBPS",1200));
    this.products.push(new Product("Prd103", "Biscuts", "FOD", "TATA","Energy",20));
    this.products.push(new Product("Prd104", "Mixer", "ECL", "RIL","Food Processor",12000));
  }

  getProducts(): Array<Product> {
    return this.products;
  }
  saveProduct(prd: Product): Array<Product> {
    this.products.push(prd);
    return this.products;
  }
}
