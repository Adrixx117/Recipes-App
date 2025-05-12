import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, forkJoin } from 'rxjs';
import { Recipe } from '../recipe/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private apiKey = 'a13d15e675214b83b28c31b2606315f3';
  private apiUrl = 'https://api.spoonacular.com/recipes';

  constructor(private http: HttpClient) { }

  searchRecipesByIngredient(ingredient: string): Observable<Recipe[]> {
    const params = {
      apiKey: this.apiKey,
      query: ingredient,
      number: 10,
      addRecipeInformation: 'true',
      fillIngredients: 'true'
    };

    return this.http.get<any>(`${this.apiUrl}/complexSearch`, { params }).pipe(
      map(response => response.results.map((item: any) => ({
        id: item.id,
        name: item.title,
        imageUrl: item.image,
        ingredients: item.extendedIngredients.map((ing: any) => ing.original),
        instructions: item.instructions || 'No hay instrucciones disponibles.'
      })))
    );
  }
}