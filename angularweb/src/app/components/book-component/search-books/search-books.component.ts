import {Component, OnInit} from '@angular/core';
import {BookDto} from "../../../model/book/book-dto";
import {BookSearchParametersDto} from "../../../model/book/book-search-parameters-dto";
import {BookService} from "../../../service/book/book.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-books',
  templateUrl: './search-books.component.html',
  styleUrls: ['./search-books.component.css']
})
export class SearchBooksComponent implements OnInit {
  books: BookDto[] = [];
  searchParams!: BookSearchParametersDto;


  constructor(private bookService: BookService, private router: Router) {
    this.searchParams = new BookSearchParametersDto([], []);
  }

  ngOnInit(): void {
    this.searchParams = new BookSearchParametersDto([], []);
  }


  searchBooks() {
    this.bookService.searchBooks(this.searchParams).subscribe(
      (books: BookDto[]) => {
        this.books = books;
        this.router.navigate(['/api/books']);
      },
      (error) => {
        console.error('Error searching books:', error);
      }
    );
  }

}
