import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TokenService {
  private baseURL: string = 'http://localhost:3100';

  constructor(private httpClient: HttpClient) {}

  loadToken(): any {
    return localStorage.getItem('accessToken');
  }

  saveToken(token: string): void {
    localStorage.setItem('accessToken', token);
  }

  removeToken(): void {
    localStorage.removeItem('accessToken');
  }

  getToken(username: string, password: string): Observable<{ token: string }> {
    return this.httpClient.post<any>(`${this.baseURL}/login`, {
      username,
      password,
    });
  }

  validateToken(): Observable<boolean> {
    let token: string = this.loadToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.httpClient.get<boolean>(`${this.baseURL}/validateToken`, {
      headers: headers,
    });
  }
}
