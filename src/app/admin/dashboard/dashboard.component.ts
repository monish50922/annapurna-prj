import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './dashboard.component.html'
})
export class AdminDashboardComponent implements OnInit {

  users: any[] = [];
  report: any = {};

  constructor(private http: HttpClient, private auth: AuthService) {}

  ngOnInit() {
    const token = this.auth.getToken();

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    // ✅ Load users
    this.http.get<any[]>(
      'http://localhost:3000/api/admin/users',
      { headers }
    ).subscribe({
      next: res => this.users = res,
      error: err => console.error('Users API error:', err)
    });

    // ✅ Load report
    this.http.get<any>(
      'http://localhost:3000/api/admin/reports',
      { headers }
    ).subscribe({
      next: res => this.report = res,
      error: err => console.error('Report API error:', err)
    });
  }
}
