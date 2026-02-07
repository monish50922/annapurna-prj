import { Component } from '@angular/core';
import { DonationService } from '../../services/donation.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-donor-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  food_type = ''; quantity = ''; pickup_time = ''; location = '';

  constructor(private ds: DonationService, private auth: AuthService) {}

  submitDonation() {
    const token = this.auth.getToken();
    this.ds.createDonation({
      food_type: this.food_type,
      quantity: this.quantity,
      pickup_time: this.pickup_time,
      location: this.location
    }, token).subscribe(() => alert('Donation posted'));
  }
}
