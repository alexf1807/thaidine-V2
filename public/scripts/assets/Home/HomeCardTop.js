import { $$, $$$ } from '../../lib.js';
import { navLeft } from '../../app.js';



export class HomeCardTop {
    constructor(location){
        this.el = $$('div');
        this.el.classList = 'home-card-top';

            var h1 = $$('h1');

            var h2 = $$('h5');
            h2.textContent = "Authentic Recipes Brought To You From Thailand";

            var b1 = $$('button');
            b1.textContent = "View Recipes";
            b1.addEventListener('click', () => {
                navLeft.clickRecipes();
            })

            $$$(this.el, [h1, h2, b1]);
        $$$(location, [this.el]);
    }   

    updateScrollPosition(sTop){
        this.el.style.backgroundPosition="0px " + sTop / 6 + "px";
    }
}