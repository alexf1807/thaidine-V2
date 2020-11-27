import { $$, $$$ } from '../../lib.js';
import { Footer } from '../Footer/Footer.js';
import { CakeCardBottom } from './CakeCardBottom.js';
import { CakeCardLocation } from './CakeCardLocation.js';
import { CakeCardMid } from './CakeCardMid.js';
import { CakeCardTop } from './CakeCardTop.js';
import { CakeCardWeSell } from './CakeCardWeSell.js';


export class PageCakeShop {
    constructor(location){
        this.el = $$('div');
        this.el.classList = "main d-none";
            
        this.cakeCardTop = new CakeCardTop(this.el);
        this.cakeCardMid = new CakeCardMid(this.el);
        this.cakeCardLocation = new CakeCardLocation(this.el);
        this.cakeCardWeSell = new CakeCardWeSell(this.el);
        this.cakeCardBottom = new CakeCardBottom(this.el);
        this.footer = new Footer(this.el);

        this.el.addEventListener('scroll', () => {
            this.cakeCardTop.updateScrollPosition(this.el.scrollTop);
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