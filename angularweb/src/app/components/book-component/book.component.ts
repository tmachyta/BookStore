import { Component, OnInit } from '@angular/core';

import { BookDto } from '../../model/book/book-dto';
import {BookService} from "../../service/book/book.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books: BookDto[] = [];

  constructor(private bookService: BookService, private router: Router) {;
  }

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks() {
    this.bookService.getAllBooks().subscribe(
      (books: BookDto[]) => {
        this.books = books;
      },
      (error) => {
        console.error('Error loading books:', error);
      }
    );
  }


  deleteBook(id: number) {
    this.bookService.deleteBookById(id).subscribe(
      () => {
        this.loadBooks();
      },
      (error) => {
        console.error('Error deleting book:', error);
      }
    );
  }

}

