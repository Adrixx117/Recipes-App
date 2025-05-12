import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeService } from './services/recipe.service';
import { Recipe } from './recipe/recipe.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SearchBarComponent, RecipeListComponent],
  template: `
    <div class="app-container">
      <header class="app-header">
        <h1>Buscador de Recetas</h1>
        <p>Encuentra recetas deliciosas usando tus ingredientes favoritos</p>
      </header>
      
      <app-search-bar (search)="onSearch($event)"></app-search-bar>
      
      <div *ngIf="loading" class="loading">Buscando recetas...</div>
      
      <app-recipe-list 
        [recipes]="recipes"
        [showNoResults]="searchPerformed && !loading && recipes.length === 0">
      </app-recipe-list>
    </div>
  `,
  styles: [`
    .app-container {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f9f9f9;
      min-height: 100vh;
    }
    .app-header {
      text-align: center;
      margin-bottom: 30px;
      padding: 20px;
      background-color: #4CAF50;
      color: white;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .app-header h1 {
      margin: 0;
      font-size: 2.5rem;
      font-weight: 600;
    }
    .app-header p {
      margin: 10px 0 0;
      font-size: 1.2rem;
      opacity: 0.9;
    }
    .loading {
      text-align: center;
      padding: 20px;
      font-size: 1.2rem;
      color: #666;
    }
    @media (max-width: 768px) {
      .app-header h1 {
        font-size: 2rem;
      }
      .app-header p {
        font-size: 1rem;
      }
    }
  `]
})
export class AppComponent {
  recipes: Recipe[] = [];
  searchPerformed = false;
  loading = false;

  constructor(private recipeService: RecipeService) {}

  onSearch(ingredient: string) {
    this.searchPerformed = true;
    this.loading = true;
    this.recipes = [];

    this.recipeService.searchRecipesByIngredient(ingredient).subscribe({
      next: (recipes) => {
        this.recipes = recipes;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error searching recipes:', error);
        this.loading = false;
      }
    });
  }
}