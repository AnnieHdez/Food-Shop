import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipeService{
    recipesChanged = new Subject<Recipe[]>();

    // private recipes: Recipe[] = [
    //     new Recipe('Tasty Schnitzel',
    //      'This is simply a testy recipe', 
    //      'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
    //      [new Ingredient ('Meat',1), new Ingredient('French Fries', 20)]),
    //     new Recipe('Big Burguer', 
    //     'This is simply another testy recipe',
    //      'https://i.redd.it/u6axcalpx6531.jpg',
    //      [new Ingredient('Bread', 2), new Ingredient('Meat', 1)])

    //   ];

    private recipes: Recipe[] = []; 

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(id: number) {
        return this.recipes[id];
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }
}