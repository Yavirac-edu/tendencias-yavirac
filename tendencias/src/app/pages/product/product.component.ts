import { HttpClient } from '@angular/common/http';
import { Component, OnInit, } from '@angular/core';
import { ProductHttpService } from '../../service/product-http.service';
import { ProductModel, UpdateProductDto } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: ProductModel[] = [];
  selectedProduct:UpdateProductDto = {};

  constructor(private productHttpService:ProductHttpService) {
   }

  ngOnInit(): void {
    this.getProducts();
    //this.getProduct();
    //this.createProduct();
    this.updateProduct();
    //this.deleteProduct();
  }
  
    getProducts() {
      this.productHttpService.getAll().subscribe(
        response => {
          this.products = response;
          console.log(response);
        });
    }
    getProduct() {
      this.productHttpService.getOne(2).subscribe(
        response => {
        console.log(response);
      });
    }
  
    createProduct() {
      const data = {
        title: 'Computadora Itel core i7',
        price: 650,
        description: 'Electrodomesticos / Erick Guevara',
        images: [
          'https://m.media-amazon.com/images/I/51A+xXT0yiL._AC_SY580_.jpg',
        ],
        categoryId: 1,
      };
      this.productHttpService.store(data).subscribe(
        response => {
        console.log(response);
      });
    }
    editProduct(product: ProductModel){
      this.selectedProduct = product;
    }
    updateProduct() {
      const data = {
        title: 'Computadora Itel core i10',
        price: 1150,
        description: 'Electrodomesticos / Erick Guevara',
      };
      this.productHttpService.update(1, data).subscribe(
        response => {
        console.log(response);
      });
    }
    deleteProduct(id: ProductModel['id']) {
      this.productHttpService.destroy(id).subscribe(
        response => {
          this.products = this.products.filter(product => product.id != id );
        console.log(response);
      });
    }
}

