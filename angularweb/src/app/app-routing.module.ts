import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './components/registration-component/registration.component';
import { LoginComponent } from './components/login-component/login.component';
import { WelcomeComponent } from './components/welcome-component/welcome.component';
import {UserListComponent} from "./components/user-component/user-list.component";
import {BookComponent} from "./components/book-component/book.component";
import {CreateBookComponent} from "./components/book-component/create-book/create-book.component";
import {UpdateBookComponent} from "./components/book-component/update-book/update-book.component";
import {SearchBooksComponent} from "./components/book-component/search-books/search-books.component";
import {CategoriesComponent} from "./components/category-component/categories.component";
import {CreateCategoryComponent} from "./components/category-component/create-category/create-category.component";
import {UpdateCategoryComponent} from "./components/category-component/update-category/update-category.component";
import {OrderComponent} from "./components/order-component/order.component";
import {CreateOrderComponent} from "./components/order-component/create-order/create-order.component";
import {OrdersByUserComponent} from "./components/order-component/orders-by-user/orders-by-user.component";
import {UpdateOrderComponent} from "./components/order-component/update-order/update-order.component";
import {ShoppingCartComponent} from "./components/shopping-cart/shopping-cart.component";
import {AddBookComponent} from "./components/shopping-cart/add-book/add-book.component";

const routes: Routes = [
  { path: '', redirectTo: '/api/welcome', pathMatch: 'full' },
  { path: 'api/welcome', component: WelcomeComponent },
  { path: 'api/auth/register', component: RegistrationComponent },
  { path: 'api/auth/login', component: LoginComponent },
  { path: 'api/users', component: UserListComponent},
  { path: 'api/books', component: BookComponent},
  { path: 'api/books/create', component: CreateBookComponent},
  { path: 'api/books/update', component: UpdateBookComponent},
  { path: 'api/books/search', component: SearchBooksComponent},
  { path: 'api/categories', component: CategoriesComponent},
  { path: 'api/categories/create', component: CreateCategoryComponent},
  { path: 'api/categories/update', component: UpdateCategoryComponent},
  { path: 'api/orders', component: OrderComponent},
  { path: 'api/orders/addOrder', component: CreateOrderComponent},
  { path: `api/order/user`, component: OrdersByUserComponent},
  { path: 'api/orders/update', component: UpdateOrderComponent},
  { path: 'api/shopping-cart', component: ShoppingCartComponent},
  { path: 'api/shopping-cart/cart-item/add', component: AddBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

