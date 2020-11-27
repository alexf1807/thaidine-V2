import { $$, $$$ } from '../../lib.js';
import { state, pageHome, pageRecipes, pageRecipe } from '../../app.js';



export class Card {
    constructor(recipe, location){
        this.recipe = recipe;
        this.category = recipe.type;
        this.el = $$('div');
        this.el.classList = 'recipe-card';

            this.img = $$('img');
            this.img.src = this.recipe.image;

            this.url = this.recipe.url;
            
            this.title = $$('h5');
            this.title.textContent = this.recipe.name;

            $$$(this.el, [this.img, this.title]);

            this.el.addEventListener('click', () => {
                state.recipeSelected = this.recipe;
                this.getRecipe();
            });
        $$$(location, [this.el]);
        state.cards.push(this);        
    }

    getURL(){
        return this.url;
    }

    getRecipe(){
        pageHome.hide();
        pageRecipes.hide();

        if(!state.isBackClick2){
            history.pushState({page: 'recipes', recipe: this.url}, 'Recipes', 'recipes?recipe=' + this.url);
        } else {
            state.isBackClick2 = false;
        };

        pageRecipe.show();
        pageRecipe.setTitle(state.recipeSelected.name)
        pageRecipe.setThaiName(state.recipeSelected.namethai)
        pageRecipe.setSubtitle(state.recipeSelected.type)
        pageRecipe.setTime(state.recipeSelected.preptime)
        pageRecipe.setPortions(state.recipeSelected.servesqty + ' ' + state.recipeSelected.servesqtyunit)
        pageRecipe.setDescription(state.recipeSelected.description)
        pageRecipe.setImgSrc(state.recipeSelected.image)
        pageRecipe.setIngredients(state.recipeSelected.ingredients)
        pageRecipe.setInstructions(state.recipeSelected.instructions)
        pageRecipe.setTips(state.recipeSelected.tips)
        pageRecipe.scrollToTop();
    }

    click(){
        this.el.click();
    }

    show(){
        this.el.classList.remove('d-none');
    }   

    hide(){
        this.el.classList.add('d-none');
    }
}