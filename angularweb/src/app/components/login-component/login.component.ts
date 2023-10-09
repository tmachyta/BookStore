import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../service/user/user.service';
import { UserLoginRequestDto } from '../../model/user/user-login-request-dto';
import { UserLoginResponseDto } from '../../model/user/user-login-response-dto';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth/auth.service'; // Імпортуйте AuthService

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  @ViewChild('loginForm') loginForm!: NgForm;

  constructor(private userService: UserService, private authService: AuthService, private router: Router) {
  }

  login() {
    if (this.loginForm.valid) {
      const request: UserLoginRequestDto = {
        email: this.email,
        password: this.password,
      };

      console.log('Logging in...');
      this.userService.loginUser(request).subscribe(
        (response: UserLoginResponseDto) => {
          console.log('Successfully logged in:', response);
          this.authService.saveToken(response.token)
          this.router.navigate(['/api/users']);
        },
        (error) => {
          console.error('Login error:', error);
        }
      );
    }
  }
}
