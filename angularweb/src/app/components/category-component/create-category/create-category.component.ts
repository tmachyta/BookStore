import { Component } from '@angular/core';
import { CreateCategoryRequestDto } from "../../../model/category/create-category-request-dto";
import { CategoryService } from "../../../service/category/category.service";
import { CategoryDto } from "../../../model/category/category-dto";
import { Router } from '@angular/router'; // Импортируйте Router

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent {
  categories: CategoryDto[] = [];
  newCategory: CreateCategoryRequestDto = {
    name: '',
    description: '',
  };
  errorMessage: string = ''; // Добавляем поле для отображения ошибок

  constructor(private categoryService: CategoryService, private router: Router) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoryService.getAllCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  createCategory(): void {
    this.categoryService.saveCategory(this.newCategory).subscribe(
      () => {
        // Перенаправляем на страницу "categories" после успешного создания категории
        this.router.navigate(['/api/categories']);
      },
      (error) => {
        this.errorMessage = 'Failed to create category. Please check your input and try again.'; // Отображаем сообщение об ошибке
        console.error('Error creating category:', error);
      }
    );
  }
}
