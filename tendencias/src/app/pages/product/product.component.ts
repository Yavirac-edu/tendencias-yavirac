import { Component, OnInit, } from '@angular/core';
import { ProductHttpService } from '../../service/product-http.service';
import { ProductModel, UpdateProductDto } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products : ProductModel[] = [];
  selectProduct : UpdateProductDto={};  

  constructor(private productHttpService: ProductHttpService) {
    this.initProduct();
  }
  initProduct(){
    this.selectProduct = {title:"",price:0,description:""};
  }
  ngOnInit(): void {
    //this.getProduct();
    this.getProducts();
    //this.createProduct();
    //this.updateProduct();
    //this.deleteProduct();
  }  

   data = {
    id: this.selectProduct.id ? this.selectProduct.id : 0,
    title: this.selectProduct.title,
    description: this.selectProduct.description,
    images: this.selectProduct.images,
    price: this.selectProduct.price,
    categoryId: this.selectProduct.categoryId
  };

  getProducts() {
    return this.productHttpService.getAll().subscribe((response) => {
      this.products = response;     
    });
  }  
  getProduct() {
    return this.productHttpService.getOne(6).subscribe((response) => {
      console.log(response);
    });
  }  
  createProduct() {
    const data ={
      id: 2,
      title: "zapato",
      description:"zapato grande",
      price: 23,
      categoryId:2,
      images:["https://api.lorem.space/image/fashion?w=640&h=480&r=3268"]

    }
    return this.productHttpService.store(data).subscribe((response) => {
      console.log(response);
    });
  }
  updateProduct() {
    return this.productHttpService.update(this.data, this.selectProduct.id ? this.selectProduct.id : 0 ).subscribe((response) => {
      console.log(response);
    });
  }

  editProduct(product:ProductModel){
    this.selectProduct = product;
  }
  deleteProduct(id:ProductModel['id']) {
    return this.productHttpService.destroy(id).subscribe((response) => {
      this.products = this.products.filter(product => product.id != id);
      //console.log(response);
    });
  }
}



