import { $$, $$$ } from '../../lib.js';
import { Footer } from '../Footer/Footer.js';
import { HomeCardLow } from './HomeCardLow.js';
import { HomeCardMid } from './HomeCardMid.js';
import { HomeCardTop } from './HomeCardTop.js';
import { TopPickCard } from './TopPickCard.js';


export class PageHome {
    constructor(location){
        this.el = $$('div');
        this.el.classList = "main";
            
        this.homeCardTop = new HomeCardTop(this.el);
        this.topPickCard = new TopPickCard(this.el);
        this.homeCardMid = new HomeCardMid(this.el);
        this.homeCardLow = new HomeCardLow(this.el);
        this.footer = new Footer(this.el);

        this.el.addEventListener('scroll', () => {
            this.homeCardTop.updateScrollPosition(this.el.scrollTop);
            this.homeCardMid.updateScrollPosition(this.el.scrollTop);
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