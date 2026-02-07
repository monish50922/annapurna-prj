import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  name = '';
  email = '';
  password = '';
  role = 'DONOR';

  constructor(private http: HttpClient, private router: Router) {}

  register() {
    this.http.post('http://localhost:3000/api/auth/register', {
      name: this.name,
      email: this.email,
      password: this.password,
      role: this.role
    }).subscribe({
      next: () => {
        alert('Registration successful. Please login.');
        this.router.navigate(['/login']);
      },
      error: () => {
        alert('Registration failed');
      }
    });
  }
}
