import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserRegistrationRequest } from 'src/app/model/user/user-registration-request';
import { UserResponseDto } from 'src/app/model/user/user-response-dto';
import { UserResponseRoleDto } from "src/app/model/user/user-response-role-dto";
import { UserLoginRequestDto } from "../../model/user/user-login-request-dto";
import { UserLoginResponseDto } from "../../model/user/user-login-response-dto";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrlRegister = 'http://localhost:8080/api/auth/register';
  private baseUrl = 'http://localhost:8080/api/users';
  private baseUrlLogin = 'http://localhost:8080/api/auth/login';

  constructor(private http: HttpClient) { }

  private getHttpOptions() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return { headers };
  }

  registerUser(request: UserRegistrationRequest): Observable<any> {
    return this.http.post(`${this.baseUrlRegister}`, request);
  }

  loginUser(request: UserLoginRequestDto): Observable<UserLoginResponseDto> {
    return this.http.post<UserLoginResponseDto>(this.baseUrlLogin, request);
  }

  deleteUserById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`, this.getHttpOptions());
  }

  getAllUsers(): Observable<UserResponseDto[]> {
    return this.http.get<UserResponseDto[]>(this.baseUrl, this.getHttpOptions());
  }

  getUserById(id: number): Observable<UserResponseDto> {
    return this.http.get<UserResponseDto>(`${this.baseUrl}/${id}`, this.getHttpOptions());
  }

  updateUserRole(email: string, roleName: string): Observable<UserResponseRoleDto> {
    return this.http.put<UserResponseRoleDto>(`${this.baseUrl}/${email}/updateRole`, { roleName }, this.getHttpOptions());
  }
}
