import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
    selector:'app-recipe',
    templateUrl: './recipe.component.html',
    styleUrls: ['./recipe.component.css']
})
export class RecipeComponent{
    elementRecipe: Recipe;

    onShowDetails(recipe: Recipe){
        this.elementRecipe = recipe;
    }

}