import { $$, $$$ } from '../../lib.js';




export class LogoMain {
    constructor(location){
        this.el = $$('img');
        this.el.classList = "logo-main";
        this.el.src = 'images/td_logo.png ';

        $$$(location, [this.el]);
    }
}