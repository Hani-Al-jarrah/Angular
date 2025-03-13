import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  private categoriesUrl = 'https://67cd64b6dd7651e464ee3d63.mockapi.io/categories';
  private productsUrl = 'https://67cd64b6dd7651e464ee3d63.mockapi.io/products';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<any[]> {
    return this.http.get<any[]>(this.categoriesUrl);
  }

  getProductsByCategory(categoryId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.productsUrl}?categoryId=${categoryId}`);
  }

  getProductById(productId: string): Observable<any> {
    return this.http.get<any>(`${this.productsUrl}/${productId}`);
  }
}
