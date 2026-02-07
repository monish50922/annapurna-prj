import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  email = ''; password = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth.login(this.email, this.password).subscribe(res => {
      this.auth.saveToken(res.token);
      const role = this.auth.getRole();
      if (role === 'DONOR') this.router.navigate(['/donor']);
      if (role === 'NGO') this.router.navigate(['/ngo']);
      if (role === 'ADMIN') this.router.navigate(['/admin']);
    });
  }
}
