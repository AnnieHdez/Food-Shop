import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Tasty Schnitzel',
         'This is simply a testy recipe', 
         'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
         [new Ingredient ('Meat',1), new Ingredient('French Fries', 20)]),
        new Recipe('Big Burguer', 
        'This is simply another testy recipe',
         'https://i.redd.it/u6axcalpx6531.jpg',
         [new Ingredient('Bread', 2), new Ingredient('Meat', 1)])

      ];

    getRecipes() {
        return this.recipes.slice();
    }
}