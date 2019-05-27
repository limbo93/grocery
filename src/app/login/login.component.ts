import { Component } from '@angular/core';
import { AuthService } from '../core/security/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(public authService: AuthService) {

  }

}
