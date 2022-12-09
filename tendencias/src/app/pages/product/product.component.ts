import { HttpClient } from '@angular/common/http';
import { Component, OnInit, } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';
import { ProductHttpService } from '../../service/product-http.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(
    private httpClient: HttpClient,
    private productHttpService: ProductHttpService, 
  ) { }


  ngOnInit(): void {
    // this.createProduct();
    // this.getProducts();
    // this.getProductsId();
    // this.updateProduct();
    this.deleteProduct();
  }

  getProducts() {
    this.productHttpService.getAll().subscribe(
      response=>(
        console.log(response)
      )
    )
  }

  getProductsId() {
    this.productHttpService.getOne(9).subscribe(response => {
      console.log(response);
      console.log('get')
    })
  };

  createProduct() {
    this.productHttpService.createProduct().subscribe(
      response => {
        console.log('response');
        console.log('post');
      }
    );
  }


  updateProduct() {
    this.productHttpService.updateProduct().subscribe(
      response => {
        console.log('response');
        console.log('put');
      }
    );
  }

  updateOne() {
    this.productHttpService.updateOne(8).subscribe(
      response => {
        console.log('response');
        console.log('put');
      }
    );
  }

  deleteProduct() {
    this.productHttpService.deleteProduct(9).subscribe(
      response => {
        console.log(response);
        console.log('delete');
      }
    );
  }


}

