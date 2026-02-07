import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class DonationService {
  private api = 'http://localhost:3000/api/donations';

  constructor(private http: HttpClient) {}

  private headers(token: string) {
    return { headers: new HttpHeaders({ Authorization: `Bearer ${token}` }) };
  }

  createDonation(data: any, token: string) {
    return this.http.post(this.api, data, this.headers(token));
  }

  getAvailableDonations(token: string) {
    return this.http.get(this.api, this.headers(token));
  }

  claimDonation(id: number, token: string) {
    return this.http.post(`${this.api}/${id}/claim`, {}, this.headers(token));
  }
}
