import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {BookDto} from "../../model/book/book-dto";
import {CreateBookRequestDto} from "../../model/book/create-book-request-dto";
import {BookSearchParametersDto} from "../../model/book/book-search-parameters-dto";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl = 'http://localhost:8080/api/books';

  constructor(private http: HttpClient) {
  }

  private getHttpOptions() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return {headers};
  }

  getAllBooks(): Observable<BookDto[]> {
    return this.http.get<BookDto[]>(this.baseUrl, this.getHttpOptions());
  }


  getBookById(id: number): Observable<BookDto> {
    return this.http.get<BookDto>(`${this.baseUrl}/${id}`, this.getHttpOptions());
  }

  deleteBookById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`, this.getHttpOptions());
  }

  createBook(request: CreateBookRequestDto): Observable<any> {
    return this.http.post(this.baseUrl, request, this.getHttpOptions());
  }

  searchBooks(params: BookSearchParametersDto): Observable<BookDto[]> {
    const options = {
      params: {
        titles: params.titles,
        authors: params.authors,
        // Додайте інші параметри тут
      },
      headers: this.getHttpOptions().headers
    };

    // Виконання GET запиту з налаштуваннями опцій
    return this.http.get<BookDto[]>(`${this.baseUrl}/search`, options);
  }

  updateBook(id: number, request: CreateBookRequestDto): Observable<BookDto> {
    return this.http.put<BookDto>(`${this.baseUrl}/${id}`, request, this.getHttpOptions());
  }

}
