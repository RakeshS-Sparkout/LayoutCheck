import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define the product interface
interface Product {
  id: number;
  name: string;
  price: number;
}

// If your server returns an object like `{ total: number, data: Product[] }`
interface PaginatedResponse {
  total: number;
  data: Product[];
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/products'; 

  constructor(private http: HttpClient) {}

  getProducts(page: number, size: number): Observable<Product[] | PaginatedResponse> {
    const params = new HttpParams()
      .set('_page', page.toString())  
      .set('_limit', size.toString());  

    return this.http.get<Product[] | PaginatedResponse>(this.apiUrl, { params });
  }
}
