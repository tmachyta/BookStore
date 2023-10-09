import {Component, OnInit} from '@angular/core';
import {CreateBookRequestDto} from "../../../model/book/create-book-request-dto";
import {BookService} from "../../../service/book/book.service";
import {BookDto} from "../../../model/book/book-dto";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  books: BookDto[] = [];

  newBook: CreateBookRequestDto = {
    title: '',
    author: '',
    isbn: '',
    price: 0,
    description: '',
    coverImage: ''
  };

  constructor(private bookService: BookService, private router: Router){}

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


  clearForm(): void {
    this.newBook = {
      title: '',
      author: '',
      isbn: '',
      price: 0,
      description: '',
      coverImage: ''
    };
  }


  createBook() {
    this.bookService.createBook(this.newBook).subscribe(
      () => {
        this.loadBooks();
        console.log('Book c successfully.');
        this.clearForm();
        this.router.navigate(['/api/books']);
      },
      (error) => {
        console.error('Error creating book:', error);
      }
    );
  }
}
