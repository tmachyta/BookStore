import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/service/user/user.service';
import { UserRegistrationRequest } from '../../model/user/user-registration-request';
import { Router } from '@angular/router'; // Додайте імпорт Router

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  registrationRequest: UserRegistrationRequest = new UserRegistrationRequest();

  @ViewChild('registrationForm') registrationForm!: NgForm;

  constructor(private userService: UserService, private router: Router) {} // Додайте Router до конструктора

  register(registerForm: NgForm) {
    if (registerForm.valid) {
      this.userService.registerUser(this.registrationRequest).subscribe(
        (response: any) => {
          console.log('Successfully registered user:', response);
          // Перенаправляємо користувача на іншу сторінку, наприклад, на сторінку входу (login)
          this.router.navigate(['/api/auth/login']);
        },
        (error) => {
          console.error('Registration error:', error);
          // Тут ви можете обробити помилку реєстрації
        }
      );
    }
  }
}
