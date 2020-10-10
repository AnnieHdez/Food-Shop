import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();
    private ingredients: Ingredient[] = [];

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient( ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients( ings: Ingredient[]){
        this.ingredients.push(...ings);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

}