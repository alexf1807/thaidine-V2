import { $$, $$$ } from '../../lib.js';
import { state, pageLoading, pageHome, pageRecipes, pageRecipe, pageCooking, pageTheChef, pageAbout, pageCakeShop, menuButton } from '../../app.js';



export class NavLeft {
    constructor(location){
        this.el = $$('div');
        this.el.classList = 'nav-left';

            this.img1 = $$('img');
            this.img1.classList = 'nav-left-chilli';
            this.img1.src = 'images/td_chilli.png';

            this.img2 = $$('img');
            this.img2.classList = 'nav-left-logo';
            this.img2.src = 'images/td_logo.png';

            this.btn1 = $$('div');
            this.btn1.classList = 'nav-left-button';
            this.btn1.textContent = 'Home';
            this.btn1.addEventListener('click', () => {
                this.btn1.classList.add('selected');
                this.btn2.classList.remove('selected');
                this.btn3.classList.remove('selected');
                this.btn4.classList.remove('selected');
                this.btn5.classList.remove('selected');
                this.btn6.classList.remove('selected');
                pageLoading.show();
                pageHome.hide();
                pageRecipes.hide();
                pageRecipe.hide();
                pageCooking.hide();
                pageTheChef.hide();
                pageAbout.hide();
                pageCakeShop.hide();
                if(!state.isBackClick){
                    history.pushState({page: 'home'}, 'home', '/home');
                } else {
                    state.isBackClick = false;
                };
                pageLoading.hide();
                pageHome.show();
                menuButton.hideMenu();
                window.innerWidth < 700 ? window.scrollTo({top: 0, behavior: 'smooth'}) : null ;
            })

            this.btn2 = $$('div');
            this.btn2.classList = 'nav-left-button';
            this.btn2.textContent = 'Recipes';
            this.btn2.addEventListener('click', () => {
                this.btn1.classList.remove('selected');
                this.btn2.classList.add('selected');
                this.btn3.classList.remove('selected');
                this.btn4.classList.remove('selected');
                this.btn5.classList.remove('selected');
                this.btn6.classList.remove('selected');
                pageLoading.show();
                pageHome.hide();
                pageRecipes.hide();
                pageRecipe.hide();
                pageCooking.hide();
                pageTheChef.hide();
                pageAbout.hide();
                pageCakeShop.hide();
                if(!state.isBackClick){
                    history.pushState({page: 'recipes'}, 'recipes', '/recipes');
                } else {
                    state.isBackClick = false;
                };
                
                if(!pageRecipes.radioCatAll.selected){
                    state.isBackClick2 = true;
                    pageRecipes.radioCatAll.click();
                }
                pageLoading.hide();
                pageRecipes.show();
                menuButton.hideMenu();
                window.innerWidth < 700 ? window.scrollTo({top: 0, behavior: 'smooth'}) : null ;
            })

            this.btn4 = $$('div');
            this.btn4.classList = 'nav-left-button';
            this.btn4.textContent = 'Cooking';
            this.btn4.addEventListener('click', () => {
                this.btn1.classList.remove('selected');
                this.btn2.classList.remove('selected');
                this.btn3.classList.remove('selected');
                this.btn4.classList.add('selected');
                this.btn5.classList.remove('selected');
                this.btn6.classList.remove('selected');
                pageLoading.show();
                pageHome.hide();
                pageRecipes.hide();
                pageRecipe.hide();
                pageCooking.hide();
                pageTheChef.hide();
                pageAbout.hide();
                pageCakeShop.hide();
                if(!state.isBackClick){
                    history.pushState({page: 'Cooking'}, 'Cooking', '/cooking');
                } else {
                    state.isBackClick = false;
                };
                pageLoading.hide();
                pageCooking.show();
                menuButton.hideMenu();
                window.innerWidth < 700 ? window.scrollTo({top: 0, behavior: 'smooth'}) : null ;
            })

            this.btn5 = $$('div');
            this.btn5.classList = 'nav-left-button';
            this.btn5.textContent = 'The Chef';
            this.btn5.addEventListener('click', () => {
                this.btn1.classList.remove('selected');
                this.btn2.classList.remove('selected');
                this.btn3.classList.remove('selected');
                this.btn4.classList.remove('selected');
                this.btn5.classList.add('selected');
                this.btn6.classList.remove('selected');
                pageLoading.show();
                pageHome.hide();
                pageRecipes.hide();
                pageRecipe.hide();
                pageCooking.hide();
                pageTheChef.hide();
                pageAbout.hide();
                pageCakeShop.hide();
                if(!state.isBackClick){
                    history.pushState({page: 'TheChef'}, 'TheChef', '/the-chef');
                } else {
                    state.isBackClick = false;
                };
                pageLoading.hide();
                pageTheChef.show();
                menuButton.hideMenu();
                window.innerWidth < 700 ? window.scrollTo({top: 0, behavior: 'smooth'}) : null ;
            })

            this.btn6 = $$('div');
            this.btn6.classList = 'nav-left-button';
            this.btn6.textContent = 'About';
            this.btn6.addEventListener('click', () => {
                this.btn1.classList.remove('selected');
                this.btn2.classList.remove('selected');
                this.btn3.classList.remove('selected');
                this.btn4.classList.remove('selected');
                this.btn5.classList.remove('selected');
                this.btn6.classList.add('selected');
                pageLoading.show();
                pageHome.hide();
                pageRecipes.hide();
                pageRecipe.hide();
                pageCooking.hide();
                pageTheChef.hide();
                pageAbout.hide();
                pageCakeShop.hide();
                if(!state.isBackClick){
                    history.pushState({page: 'About'}, 'About', '/about');
                } else {
                    state.isBackClick = false;
                };
                pageLoading.hide();
                pageAbout.show();
                menuButton.hideMenu();
                window.innerWidth < 700 ? window.scrollTo({top: 0, behavior: 'smooth'}) : null ;
            })

            this.btn3 = $$('div');
            this.btn3.classList = 'nav-left-button';
            this.btn3.textContent = 'Cake Shop';
            this.btn3.addEventListener('click', () => {
                this.btn1.classList.remove('selected');
                this.btn2.classList.remove('selected');
                this.btn3.classList.add('selected');
                this.btn4.classList.remove('selected');
                this.btn5.classList.remove('selected');
                this.btn6.classList.remove('selected');
                pageLoading.show();
                pageHome.hide();
                pageRecipes.hide();
                pageRecipe.hide();
                pageCooking.hide();
                pageTheChef.hide();
                pageAbout.hide();
                pageCakeShop.hide();
                if(!state.isBackClick){
                    history.pushState({page: 'CakeShop'}, 'CakeShop', '/cake-shop');
                } else {
                    state.isBackClick = false;
                };
                pageLoading.hide();
                pageCakeShop.show();
                menuButton.hideMenu();
                window.innerWidth < 700 ? window.scrollTo({top: 0, behavior: 'smooth'}) : null ;
            })

            this.gridBottom = $$('div');
            this.gridBottom.classList = 'nav-left-grid';

                var d1 = $$('div');
                    var a1 = $$('a');
                        var i1 = $$('i');
                            i1.classList = "fab fa-line fa-1x";
                        a1.href="http://line.me/ti/p/~gift301987";
                        a1.target="_blank";
                            $$$(a1, [i1]);
                        $$$(d1, [a1]);

                var d2 = $$('div');;
                    var a2 = $$('a');
                        var i2 = $$('i');
                        i2.classList = "fab fa-facebook";
                    a2.href="www.facebook.com";
                    a2.target="_blank";
                    $$$(a2, [i2]);
                $$$(d2, [a2]);

                var d3 = $$('div');
                    var a3 = $$('a');
                        var i3 = $$('i');
                        i3.classList = "fab fa-whatsapp";

                    $$$(a3, [i3]);
                $$$(d3, [a3]);
            $$$(this.gridBottom, [d1, d2, d3,]);
            $$$(this.el, [this.img1, this.img2, this.btn1, this.btn2, this.btn4, this.btn5, this.btn6, this.btn3, this.gridBottom]);
        $$$(location, [this.el]);
    }

    clickHome(){
        this.btn1.click();
    }

    clickRecipes(){
        this.btn2.click();
    }

    clickCooking(){
        this.btn4.click();
    }

    clickTheChef(){
        this.btn5.click();
    }

    clickAbout(){
        this.btn6.click();
    }

    clickCakeShop(){
        this.btn3.click();
    }
}