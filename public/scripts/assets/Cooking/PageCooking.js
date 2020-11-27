import { $$, $$$ } from '../../lib.js';
import { Footer } from '../Footer/Footer.js';
import { CookingCardMid } from './CookingCardMid.js';
import { CookingCardTop } from './CookingCardTop.js';


export class PageCooking {
    constructor(location){
        this.el = $$('div');
        this.el.classList = "main d-none";

        this.theCookingCardTop = new CookingCardTop(this.el);
        this.theCookingCardMid = new CookingCardMid(this.el);
        this.footer = new Footer(this.el);

        this.el.addEventListener('scroll', () => {
            this.theCookingCardTop.updateScrollPosition(this.el.scrollTop);
        });

        $$$(location, [this.el]);
    }

    show(){
        this.el.classList.remove('d-none');
    }

    hide(){
        this.el.classList.add('d-none');
    }
}