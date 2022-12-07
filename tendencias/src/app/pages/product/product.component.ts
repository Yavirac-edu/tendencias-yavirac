import { HttpClient } from '@angular/common/http';
import { Component, OnInit, } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(
    private httpClient: HttpClient,
  ) { }


  ngOnInit(): void {
    // this.createProduct();
    // this.getProducts();
    // this.getProductsId();
    // this.updateProduct();
    this.deleteProduct();
  }

  private url: string = "https://api.escuelajs.co/api/v1/products/8";

  data = {

    title: 'Hector Ordoñez',
    price: 50,
    description: 'Quinto A',
    images: [],
    categoryId: 1,
  }

  getProducts() {
    this.httpClient.get(this.url).subscribe(response => {
      console.log(response);
      console.log('get')
    })
  };

  getProductsId() {
    this.httpClient.get(this.url).subscribe(response => {
      console.log(response);
      console.log('get')
    })
  };

  createProduct() {
    this.httpClient.post(this.url, this.data).subscribe(
      response => {
        console.log('response');
        console.log('post');
      }
    );
  }


  updateProduct() {
    this.httpClient.put(this.url, this.data).subscribe(
      response => {
        console.log('response');
        console.log('put');
      }
    );
  }

  deleteProduct() {
    this.httpClient.delete(this.url).subscribe(
      response => {
        console.log(response);
        console.log('delete');
      }
    );
  }


}

