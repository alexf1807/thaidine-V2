import { $$, $$$ } from '../../lib.js';




export class CakeCardWeSell {
    constructor(location){
        this.el = $$('div');
        this.el.classList = 'cake-card-we-sell';
        
            var i1 = $$('img');
            i1.classList = 'cake-bnr-2';
            i1.src = '/images/td_cake-bnr-2.jpg';

            var h1 = $$('h3');
            h1.textContent = `Brownies, Cookies, Full Cakes, Cupcakes, Sandwiches, Delicatessen`;

            $$$(this.el, [i1, h1]);
        $$$(location, [this.el]);
        
    }   
}