import { $$, $$$ } from '../../lib.js';




export class CakeCardBottom {
    constructor(location){
        this.el = $$('div');
        this.el.classList = 'cake-card-bottom';
        
            var i1 = $$('img');
            i1.classList="cake-shop-logo";
            i1.src="/images/td_cakeshop-logo-m.png";

            var h1 = $$('h1');
            h1.innerHTML = `How To Order?`;
                var d = $$('div');
                d.innerHTML = `
                                <strong>- 1 -</strong>
                                <p>Choose your cakes from our downloadable <a href="/files/file1.pdf" download>menu</a></p>
                                <strong>- 2 -</strong>
                                <p>Send us your order...</p>
                                <strong>- 3 -</strong>
                                <p>We bake your cakes ⏱️</p>
                                <strong>- 4 -</strong>
                                <p>We notify you when your order is ready ✔️</p>
                            `

            $$$(this.el, [i1, h1, d]);
        $$$(location, [this.el]);
        
    }   
}