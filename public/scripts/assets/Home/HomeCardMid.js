import { $$, $$$ } from '../../lib.js';
import { navLeft } from '../../app.js';



export class HomeCardMid {
    constructor(location){
        this.el = $$('div');
        this.el.classList = 'home-card-mid';

            var i1 = $$('img');
            i1.src = '/images/td_cooking2.jpg';

            this.d1 = $$('div');
                var d2 = $$('div');

                    var h4 = $$('h4');
                    h4.textContent = "More about ..";

                    var h5 = $$('h5');
                    h5.textContent = "Traditional cooking styles of Thailand";

                    var i2 = $$('img');
                    i2.src = '/images/td_wok.png';
                
                    var b1 = $$('button');
                    b1.textContent = "+";
                    b1.addEventListener('click', () => {
                        navLeft.clickCooking();
                    })

                    $$$(d2, [h4, h5, i2, b1]);

                $$$(this.d1, [d2]);
            $$$(this.el, [i1, this.d1]);
        $$$(location, [this.el]);
    }    

    updateScrollPosition(sTop){
        this.d1.style.bottom = (sTop / 6) - 110 + "px";
    }
}