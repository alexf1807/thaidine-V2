import { $$, $$$ } from '../../lib.js';
import { state, navLeft } from '../../app.js';
import { NavFooter } from '../Footer/NavFooter.js';


export class NavRight {
    constructor(location){
        this.el = $$('div');
        this.el.classList = 'nav-right';

            this.bnr1 = $$('div');
            this.bnr1.classList = 'nav-right-bnr-recipes';
            
                this.bnrH5 = $$('h5');
                this.bnrH5.textContent = "More About Us..";
                
                this.bnrBtn1 = $$('button');
                this.bnrBtn1.textContent = "+";
                this.bnrBtn1.addEventListener('click', () => {
                    navLeft.clickAbout();
                })

            $$$(this.bnr1, [this.bnrH5, this.bnrBtn1]);

            this.h5 = $$('h5');
            this.h5.textContent = "Thai Desserts & Puddings!"

            this.btn1 = $$('div');
            this.btn1.classList = 'nav-right-button';
                this.btn1img = $$('img');
                this.btn1img.src = "/images/td_dessert-1.jpg";
                this.btn1txt = $$('div');
                this.btn1txt.textContent = "Coconut Cream & Pandan Leaves Pudding";
                this.btn1.addEventListener('click', () => {
                    
                    state.isBackClick = true;
                    navLeft.clickRecipes();

                    for(var v = 0 ; v < state.cards.length ; v++){
                        if(state.cards[v].getURL() == 'coconut-cream-and-pandan-leaves-pudding'){
                            state.cards[v].click();
                            break;
                        }
                    }
                })
            $$$(this.btn1, [this.btn1img, this.btn1txt]);

            this.btn2 = $$('div');
            this.btn2.classList = 'nav-right-button';
                this.btn2img = $$('img');
                this.btn2img.src = "/images/td_dessert-2.jpg";
                this.btn2txt = $$('div');
                this.btn2txt.textContent = "Mango & Sticky Rice";
                this.btn2.addEventListener('click', () => {
                    
                    state.isBackClick = true;
                    navLeft.clickRecipes();

                    for(var v = 0 ; v < state.cards.length ; v++){
                        if(state.cards[v].getURL() == 'mango-and-sticky-rice'){
                            state.cards[v].click();
                            break;
                        }
                    }
                })
            $$$(this.btn2, [this.btn2img, this.btn2txt]);

            this.btn3 = $$('div');
            this.btn3.classList = 'nav-right-button';
                this.btn3img = $$('img');
                this.btn3img.src = "/images/td_dessert-3.jpg";
                this.btn3txt = $$('div');
                this.btn3txt.textContent = "Purple Sweet Potatoes with Coconut Cream";
                this.btn3.addEventListener('click', () => {
                    
                    state.isBackClick = true;
                    navLeft.clickRecipes();

                    for(var v = 0 ; v < state.cards.length ; v++){
                        if(state.cards[v].getURL() == 'purple-sweet-potatoes-with-coconut-cream'){
                            state.cards[v].click();
                            break;
                        }
                    }

                })
            $$$(this.btn3, [this.btn3img, this.btn3txt]);

            this.h5_2 = $$('h5');
            this.h5_2.textContent = "About The Chef!"

            this.bnr3 = $$('div');
            this.bnr3.classList = 'nav-right-bnr-author';
            
                this.bnr3H3 = $$('h3');
                this.bnr3H3.textContent = "Gift K.";
                this.bnr3H3.addEventListener('click', () => {
                    navLeft.clickTheChef();
                })
            
                this.bnr3H5 = $$('h5');
                this.bnr3H5.textContent = "Home Cook & Author";

            $$$(this.bnr3, [this.bnr3H3, this.bnr3H5]);

            this.bnr2 = $$('div');
            this.bnr2.classList = 'nav-right-bnr-newsletter';
            
                this.bnr2H5 = $$('h5');
                this.bnr2H5.textContent = "Subscribe to our Newsletter!";
                
                this.bnr2Inp1 = $$('input');
                this.bnr2Inp1.type = "email";
                this.bnr2Inp1.placeholder = "name@email.com"
                
                this.bnr2Btn1 = $$('div');
                this.bnr2Btn1.classList = 'news-button';
                this.bnr2Btn1.addEventListener('click', () => {
                    this.sendEnq();
                })

            $$$(this.bnr2, [this.bnr2H5, this.bnr2Inp1, this.bnr2Btn1]);
            $$$(this.el, [this.bnr1, this.h5, this.btn1, this.btn2, this.btn3, this.h5_2, this.bnr3, this.bnr2]);

            this.footer = new NavFooter(this.el)
        $$$(location, [this.el]);
    }

    sendEnq(){
        var banner2 = this.bnr2
        var input1 =  this.bnr2Inp1;
        var button1 =  this.bnr2Btn1;
        if(this.bnr2Inp1.value.length > 5 && this.bnr2Inp1.value.indexOf('@') > -1){
            var xmlhttp = new XMLHttpRequest();
                xmlhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        var res = JSON.parse(this.responseText);
                        if(res.error){
                            alert(res.error);
                        } else if(res.success){
                            alert(res.success);
                        }
                        banner2.removeChild(input1);
                        banner2.removeChild(button1);
                    }                  
                };
                xmlhttp.open("POST", "/newRegister");
                xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                var data = [this.bnr2Inp1.value];
                xmlhttp.send(JSON.stringify(data));
        } else {
            alert('Please ensure your email address is correct.')
        }
    }
}