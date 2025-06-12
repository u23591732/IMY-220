import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/Product.Model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MydataService {

  constructor(private http:HttpClient) { }

   

  getData():Observable<Product[]>{

    return this.http.get<Product[]>("https://localhost:7247/api/Product");
  }

  updateProduct(id: number, product: Product): Observable<void> {
    return this.http.put<void>(`https://localhost:7247/api/Product/${id}`, product);
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`https://localhost:7247/api/Product`,product);
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`https://localhost:7247/api/Product/${id}`);
  }

}
