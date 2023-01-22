import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import {CreateProductDto, ProductModel, UpdateProductDto } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductHttpService {

  readonly API_URL = 'https://api.escuelajs.co/api/v1/products';

  constructor(private httpClient: HttpClient) {
  }
  getAll():Observable<ProductModel[]> {
    const url = `${this.API_URL}`;
    return this.httpClient.get<ProductModel[]>(url);
  }
  getOne(id:ProductModel['id']):Observable<ProductModel> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.get<ProductModel>(url);
  }
  store(product: CreateProductDto):Observable<ProductModel> {
    const url = `${this.API_URL}`;
    return this.httpClient.post<ProductModel>(url, product);
  }
  update(id:ProductModel['id'], product: UpdateProductDto):Observable<ProductModel> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.put<ProductModel>(url, product);
  }
  destroy(id:ProductModel['id']):Observable<any> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.delete<any>(url).
    pipe(map((response:{rta:boolean})=>{return response.rta;})
    );
  }

}
