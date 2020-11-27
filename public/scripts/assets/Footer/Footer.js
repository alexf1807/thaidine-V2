import { $$, $$$ } from '../../lib.js';




export class Footer {
    constructor(location){
        this.el = $$('div');
        this.el.classList = "footer";
        this.el.textContent = 'www.thai-dine.com © 2020'
            this.logo = $$('div');
            this.logo.classList = 'footer-logo';
                this.logoImg = $$('img');
                this.logoImg.src="/images/td_logo.png";
                $$$(this.logo, [this.logoImg]);
            $$$(this.el, [this.logo]);
        $$$(location, [this.el]);
    }

    show(){
        this.el.classList.remove('d-none');
    }
    
    hide(){
        this.el.classList.add('d-none');
    }
}