import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ListResponseModel} from "../models/listResponseModel";
import {Product} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = "https://zeynelsahin.com/api/"

  constructor(private httpClient: HttpClient) { }

  getProducts():Observable<ListResponseModel<Product>> {
    let newPath=this.apiUrl+"products/getall";
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }
  getProductByCategory(categoryId:number):Observable<ListResponseModel<Product>> {
    let newPath=this.apiUrl+"products/getallbycategory?id="+categoryId;
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }
}
