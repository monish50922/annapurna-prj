import { Component, OnInit } from '@angular/core';
import { DonationService } from '../../services/donation.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-ngo-dashboard',
  templateUrl: './dashboard.component.html'
})
export class NgoDashboardComponent implements OnInit {

  donations: any[] = [];

  constructor(
    private donationService: DonationService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loadDonations();
  }

  loadDonations() {
    const token = this.authService.getToken();

    this.donationService.getAvailableDonations(token).subscribe({
      next: (res: any) => {
        console.log('NGO DONATIONS:', res);   // 🔥 DEBUG
        this.donations = res;
      },
      error: (err) => {
        console.error('NGO API ERROR:', err);
      }
    });
  }

  claim(id: number) {
    const token = this.authService.getToken();

    this.donationService.claimDonation(id, token).subscribe(() => {
      this.loadDonations();
    });
  }
}
