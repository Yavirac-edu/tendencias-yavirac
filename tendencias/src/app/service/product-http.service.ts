import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductHttpService {

  constructor(
    private httpClient: HttpClient,
  ) { }


  ngOnInit(): void {
    // this.createProduct();
    // this.getProducts();
    // this.getProductsId(8);
    // this.updateProduct();
    this.deleteProduct(9);
  }

  private url: string = "https://api.escuelajs.co/api/v1/products";

  data = {

    title: 'Hector Ordoñez',
    price: 50,
    description: 'Quinto A',
    images: [],
    categoryId: 1,
  }

  getAll() {
   return this.httpClient.get(this.url)
  };

  getOne(id:number) {
    const urls = `${this.url}/$(id)`
     return this.httpClient.get(urls)
  };

  createProduct() {
    return this.httpClient.post(this.url, this.data)
  }


  updateProduct(productsss:CreateProduct) {
    return this.httpClient.put(this.url, productsss)
  }

  updateOne(id:number) {
    const urls = `${this.url}/$(id)`;
     return this.httpClient.put(urls, this.data)
  }

  deleteProduct(id:number) {
    const urls = `${this.url}/$(id)`
    return this.httpClient.delete(urls)
  }

}
