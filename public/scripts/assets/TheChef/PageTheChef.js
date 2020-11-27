import { $$, $$$ } from '../../lib.js';
import { TheChefCardTop } from './TheChefCardTop.js';
import { TheChefCardMid } from './TheChefCardMid.js';
import { Footer } from '../Footer/Footer.js';


export class PageTheChef {
    constructor(location){
        this.el = $$('div');
        this.el.classList = "main d-none";

        this.theChefCardTop = new TheChefCardTop(this.el);
        this.theChefCardMid = new TheChefCardMid(this.el);
        this.footer = new Footer(this.el);

        this.el.addEventListener('scroll', () => {
            this.theChefCardTop.updateScrollPosition(this.el.scrollTop);
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