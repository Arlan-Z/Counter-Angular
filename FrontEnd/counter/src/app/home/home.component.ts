import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  counter = 0;
  nextCounter = 0;
  showPopup = false;

  constructor(private http: HttpClient, private authService: AuthService) {}

  increment() {
    const token = this.authService.getToken();
    this.http.post<{ newCounter: number }>('http://localhost:5148/api/counter/increment', { counter: this.counter }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).subscribe(response => {
      this.nextCounter = response.newCounter;
      this.showPopup = true;
    });
  }

  confirm() {
    this.counter = this.nextCounter;
    this.showPopup = false;
  }

  cancel() {
    this.showPopup = false;
  }
}
