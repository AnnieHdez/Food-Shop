import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [];

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient( ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients( ings: Ingredient[]){
        this.ingredients.push(...ings);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

}