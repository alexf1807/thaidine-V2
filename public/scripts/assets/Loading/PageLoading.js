import { $$, $$$ } from '../../lib.js';




export class PageLoading {
    constructor(location){
        this.el = $$('div');
        this.el.classList = "loading";

            var d1 = $$('div');                           
            d1.textContent = "loading";                           
            
            var i1 = $$('div');
            i1.classList = "loading-wok"

            $$$(this.el, [d1, i1]);

        $$$(location, [this.el]);
    }

    show(){
        this.el.classList.remove('d-none');
    }

    hide(){
        this.el.classList.add('loading-hidden');
    } 
}