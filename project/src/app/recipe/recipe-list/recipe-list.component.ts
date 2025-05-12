import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Recipe } from '../recipe.model';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [CommonModule, RecipeCardComponent],
  template: `
    <div class="recipe-list-container">
      <h2 class="results-title" *ngIf="recipes.length">Resultados ({{recipes.length}})</h2>
      <h2 class="no-results" *ngIf="showNoResults">No se encontraron recetas con ese ingrediente</h2>
      <div class="recipe-grid">
        <app-recipe-card 
          *ngFor="let recipe of recipes"
          [recipe]="recipe">
        </app-recipe-card>
      </div>
    </div>
  `,
  styles: [`
    .recipe-list-container {
      padding: 20px;
    }
    .results-title, .no-results {
      margin-bottom: 20px;
      color: #333;
      font-weight: 500;
    }
    .no-results {
      text-align: center;
      color: #666;
    }
    .recipe-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;
    }
    @media (max-width: 768px) {
      .recipe-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class RecipeListComponent {
  @Input() recipes: Recipe[] = [];
  @Input() showNoResults = false;
}