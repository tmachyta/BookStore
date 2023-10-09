import { Component, OnInit } from '@angular/core';
import { UserResponseDto } from '../../model/user/user-response-dto';
import { UserService } from '../../service/user/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: UserResponseDto[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getAllUsers().subscribe(
      (users) => {
        this.users = users;
      },
      (error) => {
        console.error('Error loading users:', error);
      }
    );
  }

  deleteUser(id: number) {
    this.userService.deleteUserById(id).subscribe(
      () => {
        // Користувача успішно видалено, оновлюємо список користувачів
        this.loadUsers();
      },
      (error) => {
        console.error('Error deleting user:', error);
      }
    );
  }

  getUser(id: number) {
    // Отримання інформації про користувача по його ID
    this.userService.getUserById(id).subscribe(
      (user) => {
        console.log('User information:', user);
      },
      (error) => {
        console.error('Error getting user information:', error);
      }
    );
  }

  updateUserRole(email: string, roleName: string) {
    console.log('Updating role for email:', email);
    this.userService.updateUserRole(email, roleName).subscribe(
      (response) => {
        console.log('User role updated:', response);
      },
      (error) => {
        console.error('Error updating user role:', error);
      }
    );
  }
}
