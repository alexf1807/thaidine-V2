import { $$, $$$ } from '../../lib.js';
import { Footer } from '../Footer/Footer.js';
import { AboutCardMid } from './AboutCardMid.js';
import { AboutCardTop } from './AboutCardTop.js';


export class PageAbout {
    constructor(location){
        this.el = $$('div');
        this.el.classList = "main d-none";
            
        this.aboutCardTop = new AboutCardTop(this.el);
        this.aboutCardMid = new AboutCardMid(this.el);
        this.footer = new Footer(this.el);

        this.el.addEventListener('scroll', () => {
            this.aboutCardTop.updateScrollPosition(this.el.scrollTop);
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