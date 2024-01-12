import { Injectable } from '@angular/core';
import { IProduct } from '../model/product';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from '../../auth/services/token.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private header!: HttpHeaders;

  private baseURL: string = 'http://localhost:3100';

  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService
  ) {}

  getProducts(): Observable<IProduct[]> {
    this.header = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.tokenService.loadToken()}`
    );

    return this.httpClient.get<IProduct[]>(`${this.baseURL}/product`, {
      headers: this.header,
    });
  }

  getProduct(id: string): Observable<IProduct> {
    this.header = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.tokenService.loadToken()}`
    );

    return this.httpClient.get<IProduct>(`${this.baseURL}/product/${id}`, {
      headers: this.header,
    });
  }

  searchProduct(searchTerm: string): Observable<IProduct[]> {
    this.header = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.tokenService.loadToken()}`
    );
    return this.httpClient.get<IProduct[]>(
      `${this.baseURL}/product/search?key=${searchTerm}`,
      { headers: this.header }
    );
  }
}
