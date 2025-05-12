import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="recipe-card">
      <div class="recipe-image" [style.backgroundImage]="'url(' + (recipe.imageUrl || 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg') + ')'"></div>
      <div class="recipe-content">
        <h3 class="recipe-title">{{recipe.name}}</h3>
        <div class="recipe-ingredients">
          <h4>Ingredientes:</h4>
          <ul>
            <li *ngFor="let ingredient of recipe.ingredients">{{ingredient}}</li>
          </ul>
        </div>
        <div class="recipe-instructions">
          <h4>Instrucciones:</h4>
          <p>{{recipe.instructions}}</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .recipe-card {
      background-color: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .recipe-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }
    .recipe-image {
      height: 200px;
      background-size: cover;
      background-position: center;
    }
    .recipe-content {
      padding: 20px;
    }
    .recipe-title {
      margin-top: 0;
      margin-bottom: 15px;
      color: #333;
      font-size: 1.5rem;
    }
    .recipe-ingredients, .recipe-instructions {
      margin-bottom: 15px;
    }
    .recipe-ingredients h4, .recipe-instructions h4 {
      margin-bottom: 8px;
      color: #4CAF50;
      font-weight: 500;
    }
    .recipe-ingredients ul {
      padding-left: 20px;
      margin: 0;
    }
    .recipe-ingredients li {
      margin-bottom: 4px;
    }
    .recipe-instructions p {
      margin: 0;
      line-height: 1.5;
    }
  `]
})
export class RecipeCardComponent {
  @Input() recipe!: Recipe;
}