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
    // private  productModel:ProductModel,
    private httpClient: HttpClient,

  ) { }


  ngOnInit(): void {
  }

  getProducts() {
    let url = 'https://api.escuelajs.co/api/v1/products'
    const response = this.httpClient.get(url).subscribe(Response => {
      console.log(response);
    })
  };

  getProductiId() {
    let id = 1;
    let url = 'https://api.escuelajs.co/api/v1/products';

    let response = this.httpClient.get(url + '/' + id).subscribe(Response => {
      console.log(response);

    })
  }

  createProduct() {
   let  data = {
      title: 'quinto a',
      price: Number.toString,
      descripcion: 'steveen ordoñez',
      images: ['imagen'],
      category: 1,
    }
    let id = 1;
    let url = 'https://api.escuelajs.co/api/v1/products';

    let response = this.httpClient.post(url,data).subscribe(Response => {
      console.log(response);

    })
  }

  updateProduct() {
    let  data = {
       title: 'quinto a',
       price: Number.toString,
       descripcion: 'Steveen Ordoñez',
       images: ['imagen'],
       category: 1,
     }
     let url = 'https://api.escuelajs.co/api/v1/products';
 
     let response = this.httpClient.put(url,data).subscribe(Response => {
       console.log(response);
 
     })
   }

   deleteProduct() {
    let  data = {
       title: 'quinto a',
       price: Number.toString,
       descripcion: 'Steveen Ordoñez',
       images: ['imagen'],
       category: 1,
     }
     let url = 'https://api.escuelajs.co/api/v1/products';
 
     let response = this.httpClient.delete(url+'/'+data).subscribe(Response => {
       console.log(response);
 
     })
   }
}

