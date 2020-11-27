import { $$, $$$ } from '../../lib.js';
import { pageShare } from '../../app.js';
import { Footer } from '../Footer/Footer.js';



export class PageRecipe {
    constructor(location){
        this.el = $$('div');
        this.el.classList = "main d-none";
        this.el.id = "recipes";
        
        this.title = $$('h2');
        this.title.classList = 'recipe-title';
        this.title.textContent = ' | ';
        
        this.thaiName = $$('h5');
        this.thaiName.classList = 'recipe-thainame';
        this.thaiName.textContent = ' | ';
        
        this.subtitle = $$('h5');
        this.subtitle.classList = 'recipe-subtitle';
        this.subtitle.textContent = ' | ';
                    
        this.imgGrid = $$('div');
        this.imgGrid.classList = 'recipe-img-grid';
            this.img = $$('img');
            this.img.src = '';

            this.divR = $$('div');

                this.time = $$('div');
                this.time.classList = 'recipe-time';
                this.time.textContent = " | "

                this.portions = $$('div');
                this.portions.classList = 'recipe-portions';
                this.portions.textContent = " | "

                this.description = $$('p');
                this.description.classList = 'recipe-description d-none';
                this.description.textContent = " | "
        
            $$$(this.divR, [this.time, this.portions, this.description]);

        $$$(this.imgGrid, [this.img, this.divR]);
        
        this.optionGrid = $$('div');
        this.optionGrid.classList = 'recipe-options-grid';
            this.btnInfo = $$('button');
            this.btnInfo.classList = "btn-info";
            this.btnInfo.textContent = "i";
            this.btnInfo.addEventListener('click',  () => {
                this.toggleDescription(); 
            })
            
            this.btnPrint = $$('button');
            this.btnPrint.classList = "btn-print";
            this.btnPrint.textContent = "⎙";
            this.btnPrint.addEventListener('click', () => {
                var divContents = this.el.innerHTML; 
                var a = window.open(); 
                a.document.write('<html>'); 
                a.document.write('<head>'); 
                    a.document.write('<link type="text/css" rel="stylesheet" href="/styles/assets/Recipes/PageRecipe.css">'); 
                    a.document.write('<link type="text/css" rel="stylesheet" href="/styles/assets/Recipes/RecipeInfoGrid.css">'); 
                    a.document.write('<link type="text/css" rel="stylesheet" href="/styles/assets/Recipes/RecipeTipsGrid.css"></head>'); 
                a.document.write('<body align="center"><h1>www.Thai-Dine.com</h1>'); 
                a.document.write(divContents); 
                a.document.write('</body></html>'); 
                a.document.close(); 
                a.print(); 
            })
            
            this.btnShare = $$('button');
            this.btnShare.classList = "btn-share";
            this.btnShare.textContent = "⊷";
            this.btnShare.addEventListener('click', () => {
                pageShare.setFacebookHref(window.location);
                pageShare.show();
            })
            
        $$$(this.optionGrid, [this.btnInfo, this.btnPrint, this.btnShare]);

        this.infoGrid = $$('div');
        this.infoGrid.classList = 'recipe-info-grid';

            this.ingredients = $$('div');
            this.ingredients.classList = 'recipe-method';
                this.ingUl = $$('ul');

            $$$(this.ingredients, [this.ingUl]);

            this.instructions = $$('div');
            this.instructions.classList = 'recipe-instructions';
                this.insUl = $$('ol');

            $$$(this.instructions, [this.insUl]);

        $$$(this.infoGrid, [this.ingredients, this.instructions]);

        this.tipsGrid = $$('div');
        this.tipsGrid.classList = 'recipe-tips-grid';
                this.tipOl = $$('ol');

            $$$(this.tipsGrid, [this.tipOl]);
        
        $$$(this.el, [this.title, this.thaiName, this.subtitle, this.imgGrid, this.optionGrid, this.infoGrid, this.tipsGrid]);

        this.footer = new Footer(this.el);

        $$$(location, [this.el]);

    }

    show(){
        this.el.classList.remove('d-none');
    }

    hide(){
        this.el.classList.add('d-none');
    }

    getCardGrid(){
        return this.cardGrid;
    }

    setTitle(t){
        this.title.textContent = t;
    }

    setThaiName(t){
        this.thaiName.textContent = t;
    }

    setSubtitle(t){
        this.subtitle.textContent = t;
    }

    setImgSrc(t){
        this.img.src = t;
    }

    setTime(t){
        this.time.textContent = t;
    }

    setPortions(t){
        this.portions.textContent = t;
    }

    setDescription(t){
        this.description.textContent = t;
    }
    
    setIngredients(t){
        this.ingUl.innerHTML = '';
        for(var i = 0 ; i < t.length ; i++){
            var li = $$('li');
                var str = $$('strong');
                    str.textContent = t[i].qty + ' ' + t[i].qtyunit;
                var spa = $$('span');
                    spa.textContent = ' ' + t[i].item;
                $$$(li, [str, spa]);
            $$$(this.ingUl, [li]);
        }
    }

    setInstructions(t){
        this.insUl.innerHTML = '';
        for(var i = 0 ; i < t.length ; i++){
            var li = $$('li');
                li.innerHTML = t[i].instr;
            $$$(this.insUl, [li]);
        }
    }

    setTips(t){
        this.tipOl.innerHTML = '';
        for(var i = 0 ; i < t.length ; i++){
            var li = $$('li');
                li.textContent = t[i].tip;
            $$$(this.tipOl, [li]);
        }
    }

    toggleDescription(){
        this.time.classList.toggle('d-none');
        this.portions.classList.toggle('d-none');
        this.description.classList.toggle('d-none');
    }

    scrollToTop(){
        this.el.scrollTo(0,0)
        window.innerWidth < 700 ? window.scrollTo({top: 0, behavior: 'smooth'}) : null ;
    }

}