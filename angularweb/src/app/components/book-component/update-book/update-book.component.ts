import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { CreateBookRequestDto } from '../../../model/book/create-book-request-dto';
import { BookService } from '../../../service/book/book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {
  id: number = 0;
  newBook: CreateBookRequestDto = {
    title: '',
    author: '',
    isbn: '',
    price: 0,
    description: '',
    coverImage: ''
  };

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id']; // Конвертуємо параметр 'id' у число
      if (this.id) {
        this.loadBook(this.id);
      }
    });
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

  loadBook(id: number): void {
    this.bookService.getBookById(id).subscribe(
      (book: CreateBookRequestDto) => {
        this.newBook = book;
      },
      (error) => {
        console.error('Error loading book:', error);
      }
    );
  }

  updateBook(): void {
    if (!this.id) {
      console.error('Book ID is required for updating.');
      return;
    }

    this.bookService.updateBook(this.id, this.newBook).subscribe(
      () => {
        console.log('Book updated successfully.');
        this.clearForm();
        this.router.navigate(['/api/books']);
      },
      (error) => {
        console.error('Error updating book:', error);
      }
    );
  }
}
