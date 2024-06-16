import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5148/api'; 
  private token: string | null = null;

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<void> {
    return new Observable((observer) => {
      this.http.post<{ token: string }>(`${this.apiUrl}/auth/login`, { username, password }).subscribe(response => {
        this.token = response.token;
        observer.next();
        observer.complete();
      });
    });
  }

  getToken(): string | null {
    return this.token;
  }
}
