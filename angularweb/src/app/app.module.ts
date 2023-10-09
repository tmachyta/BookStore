import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration-component/registration.component';
import { LoginComponent } from './components/login-component/login.component';
import { WelcomeComponent } from './components/welcome-component/welcome.component';
import { HomeComponent } from './components/home-component/home.component';
import { UserListComponent } from './components/user-component/user-list.component';
import { BookComponent } from './components/book-component/book.component';
import { CreateBookComponent } from './components/book-component/create-book/create-book.component';
import { UpdateBookComponent } from './components/book-component/update-book/update-book.component';
import { SearchBooksComponent } from './components/book-component/search-books/search-books.component';
import { CategoriesComponent } from './components/category-component/categories.component';
import { CreateCategoryComponent } from './components/category-component/create-category/create-category.component';
import { UpdateCategoryComponent } from './components/category-component/update-category/update-category.component';
import { OrderComponent } from './components/order-component/order.component';
import { CreateOrderComponent } from './components/order-component/create-order/create-order.component';
import { UpdateOrderComponent } from './components/order-component/update-order/update-order.component';
import { OrdersByUserComponent } from './components/order-component/orders-by-user/orders-by-user.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { AddBookComponent } from './components/shopping-cart/add-book/add-book.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    WelcomeComponent,
    HomeComponent,
    UserListComponent,
    BookComponent,
    CreateBookComponent,
    UpdateBookComponent,
    SearchBooksComponent,
    CategoriesComponent,
    CreateCategoryComponent,
    UpdateCategoryComponent,
    OrderComponent,
    CreateOrderComponent,
    UpdateOrderComponent,
    OrdersByUserComponent,
    ShoppingCartComponent,
    AddBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([]) // Додайте RouterModule.forRoot() тут
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
