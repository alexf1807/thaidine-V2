import { $$, $$$ } from '../../lib.js';




export class CakeCardMid {
    constructor(location){
        this.el = $$('div');
        this.el.classList = 'cake-card-mid';

            var h3 = $$('h3');
            h3.textContent = "We sell cakes in Bangkok...";

            var h1 = $$('h1');
            h1.textContent = `Made with the Finest English Recipes`;

            var p1 = $$('p');
            p1.textContent = `All of our cakes are homemade to order! This way we can ensure you get the freshest, and best quality cakes possible`;

            var i3 = $$('img');
            i3.classList = 'cake-img-1';
            i3.src = '/images/td_gift-1.jpg' ;

            var p2 = $$('p');
            p2.textContent = `If you want a custom design adding to a cake, please let us know what you'd like, 
                            and we will do our best to make your perfect cake - just for you. 
                            This includes birthday messages, celebrations, and names...`;

            var p3 = $$('p');
            p3.textContent = `If you can't see what you want, feel free to let us know - We are open to special requests!`;

            var i2 = $$('img');
            i2.classList="cake-logo";
            i2.src="/images/td_cake-logo-1.png";

            $$$(this.el, [h3, h1, p1, i3, p2, p3, i2]);
        $$$(location, [this.el]);

    }   
}