import { $$, $$$ } from '../../lib.js';
import { state, navLeft } from '../../app.js';



export class TopPickCard {
    constructor(location){
        this.el = $$('div');
        this.el.classList = 'top-pick-card';

            this.h1 = $$('h1');
            this.h1.textContent = "Today's Top Pick";

            this.topPickGrid = $$("div");
            this.topPickGrid.classList = "top-pick-grid";
                this.img = $$('img');
                this.link;
                this.divR = $$('div');
                    this.title = $$("h5");
                        this.subTitle = $$("a");
                        this.subTitle.textContent = "";
                        this.subTitle.addEventListener('click', () => {                            
                            state.isBackClick = true;
                            navLeft.clickRecipes();

                            for(var v = 0 ; v < state.cards.length ; v++){
                                if(state.cards[v].getURL() == this.link){
                                    state.cards[v].click();
                                    break;
                                }
                            }
                        });

                    this.lowDiv = $$("div");
                    this.lowDiv.classList = "low-grid";

                        this.time = $$("div");
                        this.time.classList = 'recipe-time';

                        this.portions = $$("div");
                        this.portions.classList = 'recipe-portions';

                    $$$(this.lowDiv, [this.time, this.portions]);
                $$$(this.divR, [this.title, this.subTitle, this.lowDiv]);
            $$$(this.topPickGrid, [this.img, this.divR]);
            $$$(this.el, [this.h1, this.topPickGrid]);
        $$$(location, [this.el]);
    } 
    
    set(recipe){
        this.img.src = recipe.image;
        this.link = recipe.url
        this.title.textContent = recipe.namethai;
        this.subTitle.textContent = recipe.name;
        this.time.textContent = recipe.preptime;
        this.portions.textContent = recipe.servesqty + ' ' + recipe.servesqtyunit;
    }
}