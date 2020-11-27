import { $$, $$$ } from '../../lib.js';
import { navLeft } from '../../app.js';



export class MenuButton {
    constructor(location){
        this.el = $$('div');
            this.el.classList = 'menu-button';
            this.menuVisible = false;

            this.el.addEventListener('click', () => {
                if(!this.menuVisible){
                    navLeft.el.classList.add('inView')
                    this.menuVisible = true;
                } else {
                    navLeft.el.classList.remove('inView')
                    this.menuVisible = false;
                }
            })

        $$$(location, [this.el]);
    }

    click(){
        this.el.click();
    }

    hideMenu(){
        navLeft.el.classList.remove('inView')
        this.menuVisible = false;
    }
    
}