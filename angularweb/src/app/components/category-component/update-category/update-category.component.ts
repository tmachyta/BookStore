import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateCategoryRequestDto } from '../../../model/category/create-category-request-dto';
import { CategoryService } from '../../../service/category/category.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent {
  id: number = 0;
  newCategory: CreateCategoryRequestDto = {
    name: '',
    description: '',
  };

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id']; // Конвертируем параметр 'id' в число
      if (this.id) {
        this.loadCategory(this.id);
      }
    });
  }

  clearForm(): void {
    this.newCategory = {
      name: '',
      description: '',
    };
  }

  loadCategory(id: number): void {
    this.categoryService.getCategoryById(id).subscribe(
      (category: CreateCategoryRequestDto) => {
        this.newCategory = category;
      },
      (error) => {
        console.error('Error loading category:', error);
      }
    );
  }

  updateCategory(): void {
    if (!this.id) {
      console.error('Category ID is required for updating.');
      return;
    }
    this.categoryService.updateCategory(this.id, this.newCategory).subscribe(
      () => {
        console.log('Category updated successfully.');
        this.clearForm();
        this.router.navigate(['/api/categories']);
      },
      (error) => {
        console.error('Error updating category:', error);
      }
    );
  }
}
