import { $$, $$$ } from '../../lib.js';




export class CakeCardLocation {
    constructor(location){
        this.el = $$('div');
        this.el.classList = 'cake-card-location';
        
            var i1 = $$('img');
            i1.classList = 'cake-bnr-1';
            i1.src = '/images/td_cakeshop-bnr-1.png';

            var h1 = $$('h3');
            h1.innerHTML = `We are located at <a href="https://goo.gl/maps/CzYdxjZqkDhdZKm46" target="_blank">Srinakarin</a>, Bangkok`;

            var h2 = $$('h1');
            h2.textContent = `Pickup is available as soon as your order is ready...`;

            var p1 = $$('p');
            p1.textContent = `Deliveries are available depending upon location. To find out more, please make an enquiry!`;

            $$$(this.el, [i1, h1, h2, p1]);
        $$$(location, [this.el]);

    }   
}