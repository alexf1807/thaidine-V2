import { $$, $$$ } from '../../lib.js';




export class CakeCardTop {
    constructor(location){
        this.el = $$('div');
        this.el.classList = 'cake-card-top';

            var h1 = $$('h1');

            var h2 = $$('h5');
            h2.textContent = "Freshly Made Cakes For Any Occasion";

            $$$(this.el, [h1, h2]);
        $$$(location, [this.el]);
    }   

    updateScrollPosition(sTop){
        this.el.style.backgroundPosition="0px " + sTop / 6 + "px";
    }
}