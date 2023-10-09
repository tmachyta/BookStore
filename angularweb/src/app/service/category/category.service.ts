import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryDto } from "../../model/category/category-dto";
import { CreateCategoryRequestDto } from "../../model/category/create-category-request-dto";

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private baseUrl = 'http://localhost:8080/api/categories';

  constructor(private http: HttpClient) {}

  private getHttpOptions() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return { headers };
  }

  getAllCategories(): Observable<CategoryDto[]> {
    return this.http.get<CategoryDto[]>(this.baseUrl, this.getHttpOptions());
  }

  getCategoryById(id: number): Observable<CategoryDto> {
    return this.http.get<CategoryDto>(`${this.baseUrl}/${id}`, this.getHttpOptions());
  }

  saveCategory(requestDto: CreateCategoryRequestDto): Observable<CategoryDto> {
    return this.http.post<CategoryDto>(this.baseUrl, requestDto, this.getHttpOptions());
  }

  deleteCategoryById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`, this.getHttpOptions());
  }

  updateCategory(id: number, requestDto: CreateCategoryRequestDto): Observable<CategoryDto> {
    return this.http.put<CategoryDto>(`${this.baseUrl}/${id}`, requestDto, this.getHttpOptions());
  }
}
