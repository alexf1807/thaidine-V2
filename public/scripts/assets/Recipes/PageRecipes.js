import { $$, $$$ } from '../../lib.js';
import { state, pageShare } from '../../app.js';
import { Footer } from '../Footer/Footer.js';



export class PageRecipes {
    constructor(location){
        this.categorySelectOpen = false;
        this.recipeFilterOpen = false;

        this.categorySelected = 'all';

        this.el = $$('div');
        this.el.classList = "main d-none";
        this.el.id = "recipes";
        
        this.h1 = $$('h1');
        this.h1.classList = 'h1-main';
        this.h1.textContent = 'RECIPES';

        this.recipeFilterGrid = $$('div');
        this.recipeFilterGrid.classList = 'recipe-filter-grid';
            this.categorySelectBtn = $$('div');
            this.categorySelectBtn.classList = 'category-select-btn';
            this.categorySelectBtn.textContent = 'Choose a category';
            this.categorySelectBtn.addEventListener('click', () => {
                if(this.categorySelectOpen){
                    this.closeCategorySelect();
                    this.categorySelectOpen = false;
                    this.categorySelectBtn.classList.remove('selected');
                } else {
                    this.openCategorySelect();
                    this.categorySelectOpen = true;
                    this.categorySelectBtn.classList.add('selected');
                    this.closeRecipeFilter();
                    this.recipeFilterOpen = false;
                    this.recipeFilterBtn.classList.remove('selected');
                }
            });
            this.recipeFilterBtn = $$('div');
            this.recipeFilterBtn.classList = 'recipe-filter-btn';
            this.recipeFilterBtn.textContent = 'Filter recipes';
            this.recipeFilterBtn.addEventListener('click', () => {
                if(this.recipeFilterOpen){
                    this.closeRecipeFilter();
                    this.recipeFilterOpen = false;
                    this.recipeFilterBtn.classList.remove('selected');
                } else {
                    this.openRecipeFilter();
                    this.recipeFilterOpen = true;
                    this.recipeFilterBtn.classList.add('selected');
                    this.closeCategorySelect();
                    this.categorySelectOpen = false;
                    this.categorySelectBtn.classList.remove('selected');
                }
            });
        $$$(this.recipeFilterGrid, [this.categorySelectBtn, this.recipeFilterBtn]);

            this.catgorySelectBox = $$('div');
            this.catgorySelectBox.classList = 'category-select-box';
                var d1 = $$('div');
                    this.radioCatAll = $$('input');
                    this.radioCatAll.type = 'radio';
                    this.radioCatAll.name = 'category';
                    this.radioCatAll.id = 'radioCatAll';
                    this.radioCatAll.value = 'all';
                    this.radioCatAll.checked = true;
                    this.radioCatAll.addEventListener('click', () => {
                        this.categorySelected = 'all';
                        this.categoryChanged();
                    })
                    this.radioCatAllLabel = $$('label');
                    this.radioCatAllLabel.for = 'radioCatAll';
                    this.radioCatAllLabel.textContent = 'All';
                $$$(d1, [this.radioCatAll, this.radioCatAllLabel])
                
                var d2 = $$('div');
                    this.radioCatCurries = $$('input');
                    this.radioCatCurries.type = 'radio';
                    this.radioCatCurries.name = 'category';
                    this.radioCatCurries.id = 'radioCatCurries';
                    this.radioCatCurries.value = 'curries';
                    this.radioCatCurries.addEventListener('click', () => {
                        this.categorySelected = 'curries'
                        this.categoryChanged();
                    })
                    this.radioCatCurriesLabel = $$('label');
                    this.radioCatCurriesLabel.for = 'radioCatCurries';
                    this.radioCatCurriesLabel.textContent = 'Curries';
                $$$(d2, [this.radioCatCurries, this.radioCatCurriesLabel])
                
                var d3 = $$('div');
                    this.radioCatSoups = $$('input');
                    this.radioCatSoups.type = 'radio';
                    this.radioCatSoups.name = 'category';
                    this.radioCatSoups.id = 'radioCatSoups';
                    this.radioCatSoups.value = 'soups';
                    this.radioCatSoups.addEventListener('click', () => {
                        this.categorySelected = 'soups'
                        this.categoryChanged();
                    })
                    this.radioCatSoupsLabel = $$('label');
                    this.radioCatSoupsLabel.for = 'radioCatSoups';
                    this.radioCatSoupsLabel.textContent = 'Soups';
                $$$(d3, [this.radioCatSoups, this.radioCatSoupsLabel])
                
                var d4 = $$('div');
                    this.radioCatFriedRice = $$('input');
                    this.radioCatFriedRice.type = 'radio';
                    this.radioCatFriedRice.name = 'category';
                    this.radioCatFriedRice.id = 'radioCatFriedRice';
                    this.radioCatFriedRice.value = 'friedRice';
                    this.radioCatFriedRice.addEventListener('click', () => {
                        this.categorySelected = 'friedRice'
                        this.categoryChanged();
                    })
                    this.radioCatFriedRiceLabel = $$('label');
                    this.radioCatFriedRiceLabel.for = 'radioCatFriedRice';
                    this.radioCatFriedRiceLabel.textContent = 'Fried Rice';
                $$$(d4, [this.radioCatFriedRice, this.radioCatFriedRiceLabel])
                
                var d5 = $$('div');
                    this.radioCatSalads = $$('input');
                    this.radioCatSalads.type = 'radio';
                    this.radioCatSalads.name = 'category';
                    this.radioCatSalads.id = 'radioCatSalads';
                    this.radioCatSalads.value = 'salads';
                    this.radioCatSalads.addEventListener('click', () => {
                        this.categorySelected = 'salads'
                        this.categoryChanged();
                    })
                    this.radioCatSaladsLabel = $$('label');
                    this.radioCatSaladsLabel.for = 'radioCatSalads';
                    this.radioCatSaladsLabel.textContent = 'Salads';
                $$$(d5, [this.radioCatSalads, this.radioCatSaladsLabel])
                
                var d6 = $$('div');
                    this.radioCatNoodles = $$('input');
                    this.radioCatNoodles.type = 'radio';
                    this.radioCatNoodles.name = 'category';
                    this.radioCatNoodles.id = 'radioCatNoodles';
                    this.radioCatNoodles.value = 'noodles';
                    this.radioCatNoodles.addEventListener('click', () => {
                        this.categorySelected = 'noodles'
                        this.categoryChanged();
                    })
                    this.radioCatNoodlesLabel = $$('label');
                    this.radioCatNoodlesLabel.for = 'radioCatNoodles';
                    this.radioCatNoodlesLabel.textContent = 'Noodles';
                $$$(d6, [this.radioCatNoodles, this.radioCatNoodlesLabel])
                
                var d7 = $$('div');
                    this.radioCatStirFried = $$('input');
                    this.radioCatStirFried.type = 'radio';
                    this.radioCatStirFried.name = 'category';
                    this.radioCatStirFried.id = 'radioCatStirFried';
                    this.radioCatStirFried.value = 'stirFried';
                    this.radioCatStirFried.addEventListener('click', () => {
                        this.categorySelected = 'stirFried'
                        this.categoryChanged();
                    })
                    this.radioCatStirFriedLabel = $$('label');
                    this.radioCatStirFriedLabel.for = 'radioCatStirFried';
                    this.radioCatStirFriedLabel.textContent = 'Stir Fried';
                $$$(d7, [this.radioCatStirFried, this.radioCatStirFriedLabel])
                
                var d8 = $$('div');
                    this.radioCatGrilled = $$('input');
                    this.radioCatGrilled.type = 'radio';
                    this.radioCatGrilled.name = 'category';
                    this.radioCatGrilled.id = 'radioCatGrilled';
                    this.radioCatGrilled.value = 'grilled';
                    this.radioCatGrilled.addEventListener('click', () => {
                        this.categorySelected = 'grilled'
                        this.categoryChanged();
                    })
                    this.radioCatGrilledLabel = $$('label');
                    this.radioCatGrilledLabel.for = 'radioCatGrilled';
                    this.radioCatGrilledLabel.textContent = 'Grilled';
                $$$(d8, [this.radioCatGrilled, this.radioCatGrilledLabel])
                
                var d9 = $$('div');
                    this.radioCatSauces = $$('input');
                    this.radioCatSauces.type = 'radio';
                    this.radioCatSauces.name = 'category';
                    this.radioCatSauces.id = 'radioCatSauces';
                    this.radioCatSauces.value = 'sauces';
                    this.radioCatSauces.addEventListener('click', () => {
                        this.categorySelected = 'sauces'
                        this.categoryChanged();
                    })
                    this.radioCatSaucesLabel = $$('label');
                    this.radioCatSaucesLabel.for = 'radioCatSauces';
                    this.radioCatSaucesLabel.textContent = 'Sauces';
                $$$(d9, [this.radioCatSauces, this.radioCatSaucesLabel])
                
                var d10 = $$('div');
                    this.radioCatPastes = $$('input');
                    this.radioCatPastes.type = 'radio';
                    this.radioCatPastes.name = 'category';
                    this.radioCatPastes.id = 'radioCatPastes';
                    this.radioCatPastes.value = 'pastes';
                    this.radioCatPastes.addEventListener('click', () => {
                        this.categorySelected = 'pastes'
                        this.categoryChanged();
                    })
                    this.radioCatPastesLabel = $$('label');
                    this.radioCatPastesLabel.for = 'radioCatPastes';
                    this.radioCatPastesLabel.textContent = 'Pastes';
                $$$(d10, [this.radioCatPastes, this.radioCatPastesLabel])
                
                var d11 = $$('div');
                    this.radioCatDesserts = $$('input');
                    this.radioCatDesserts.type = 'radio';
                    this.radioCatDesserts.name = 'category';
                    this.radioCatDesserts.id = 'radioCatDesserts';
                    this.radioCatDesserts.value = 'desserts';
                    this.radioCatDesserts.addEventListener('click', () => {
                        this.categorySelected = 'desserts'
                        this.categoryChanged();
                    })
                    this.radioCatDessertsLabel = $$('label');
                    this.radioCatDessertsLabel.for = 'radioCatDesserts';
                    this.radioCatDessertsLabel.textContent = 'Desserts';
                $$$(d11, [this.radioCatDesserts, this.radioCatDessertsLabel])

            $$$(this.catgorySelectBox, [d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11])

            this.recipeFilterBox = $$('div');
            this.recipeFilterBox.classList = 'recipe-filter-box';
                this.filterInput = $$('input');
                this.filterInput.type = "text";
                this.filterInputButton = $$('a');
                this.filterInputButton.textContent = 'Go';

                this.filterInput.addEventListener('keyup', (event) => {
                    if (event.keyCode === 13) {
                        this.filterInputButton.click();
                    }
                })

                this.filterInputButton.addEventListener('click', () => {
                    this.filterRecipes();
                })

            $$$(this.recipeFilterBox, [this.filterInput, this.filterInputButton])

        this.recipeInfoBar = $$('div');
        this.recipeInfoBar.classList = 'recipe-info-bar';
            this.recipeQuantity = $$('div');
            this.recipeQuantity.textContent = "..."
            this.shareRecipesBtn = $$('div');
            this.shareRecipesBtn.textContent = "⊷"
            this.shareRecipesBtn.addEventListener('click', () => {
                pageShare.setFacebookHref(window.location);
                pageShare.show();
            })
            this.recipeInfoBarD3 = $$('div');
            this.recipeInfoBarD3.textContent = "Thai-Dine"
        $$$(this.recipeInfoBar, [this.recipeQuantity, this.shareRecipesBtn, this.recipeInfoBarD3])

        this.cardGrid = $$('div');
        this.cardGrid.classList = "recipe-card-grid";
        
        $$$(this.el, [this.h1, this.recipeFilterGrid, this.catgorySelectBox, this.recipeFilterBox, this.recipeInfoBar, this.cardGrid]);

        
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
        return this.cardGrid
    }

    setRecipeQuantity(t){
        this.recipeQuantity.textContent = t;
    }

    openCategorySelect(){
        this.catgorySelectBox.classList.add('open');
    }

    closeCategorySelect(){
        this.catgorySelectBox.classList.remove('open');
    }

    openRecipeFilter(){
        this.recipeFilterBox.classList.add('open');
    }

    closeRecipeFilter(){
        this.recipeFilterBox.classList.remove('open');
    }

    categoryChanged(){
        switch (this.categorySelected){

            case 'all':
                if(!state.isBackClick2){
                    history.pushState({page: 'All', category: 'all'}, 'All', '/recipes?category=all');
                } else {
                    state.isBackClick2 = false;
                }
                for( var k = 0 ; k < state.cards.length ; k++ ){
                    state.cards[k].show();
                }
                this.setRecipeQuantity(state.cards.length);
            break;

            case 'curries':
                if(!state.isBackClick2){
                    history.pushState({page: 'Curries', category: 'curries'}, 'Curries', '/recipes?category=curries');
                } else {
                    state.isBackClick2 = false;
                }
                var c = 0;
                for( var k = 0 ; k < state.cards.length ; k++ ){
                    if(state.cards[k].category != 'curry'){
                        state.cards[k].hide();
                    } else {
                        state.cards[k].show();
                        c++;
                    }
                }
                this.setRecipeQuantity(c);
            break;
            
            case 'soups':
                if(!state.isBackClick2){
                    history.pushState({page: 'Soups', category: 'soups'}, 'Soups', '/recipes?category=soups');
                } else {
                    state.isBackClick2 = false;
                }
                var c = 0;
                for( var k = 0 ; k < state.cards.length ; k++ ){
                    if(state.cards[k].category != 'soup'){
                        state.cards[k].hide();
                    } else {
                        state.cards[k].show();
                        c++;
                    }
                }
                this.setRecipeQuantity(c);
            break;
            
            case 'friedRice':
                if(!state.isBackClick2){
                    history.pushState({page: 'FriedRice', category: 'friedRice'}, 'FriedRice', '/recipes?category=fried-rice');
                } else {
                    state.isBackClick2 = false;
                }
                var c = 0;
                for( var k = 0 ; k < state.cards.length ; k++ ){
                    if(state.cards[k].category != 'friedrice'){
                        state.cards[k].hide();
                    } else {
                        state.cards[k].show();
                        c++;
                    }
                }
                this.setRecipeQuantity(c);
            break;
            
            case 'salads':
                if(!state.isBackClick2){
                    history.pushState({page: 'Salads', category: 'salads'}, 'Salads', '/recipes?category=salads');
                } else {
                    state.isBackClick2 = false;
                }
                var c = 0;
                for( var k = 0 ; k < state.cards.length ; k++ ){
                    if(state.cards[k].category != 'salad'){
                        state.cards[k].hide();
                    } else {
                        state.cards[k].show();
                        c++;
                    }
                }
                this.setRecipeQuantity(c);
            break;
            
            case 'noodles':
                if(!state.isBackClick2){
                    history.pushState({page: 'Noodles', category: 'noodles'}, 'Noodles', '/recipes?category=noodles');
                } else {
                    state.isBackClick2 = false;
                }
                var c = 0;
                for( var k = 0 ; k < state.cards.length ; k++ ){
                    if(state.cards[k].category != 'noodle'){
                        state.cards[k].hide();
                    } else {
                        state.cards[k].show();
                        c++;
                    }
                }
                this.setRecipeQuantity(c);
            break;
            
            case 'stirFried':
                if(!state.isBackClick2){
                    history.pushState({page: 'StirFried', category: 'stirFried'}, 'StirFried', '/recipes?category=stir-fried');
                } else {
                    state.isBackClick2 = false;
                }
                var c = 0;
                for( var k = 0 ; k < state.cards.length ; k++ ){
                    if(state.cards[k].category != 'stirfried'){
                        state.cards[k].hide();
                    } else {
                        state.cards[k].show();
                        c++;
                    }
                }
                this.setRecipeQuantity(c);
            break;
            
            case 'grilled':
                if(!state.isBackClick2){
                    history.pushState({page: 'Grilled', category: 'grilled'}, 'Grilled', '/recipes?category=grilled');
                } else {
                    state.isBackClick2 = false;
                }
                var c = 0;
                for( var k = 0 ; k < state.cards.length ; k++ ){
                    if(state.cards[k].category != 'grilled'){
                        state.cards[k].hide();
                    } else {
                        state.cards[k].show();
                        c++;
                    }
                }
                this.setRecipeQuantity(c);
            break;
            
            case 'sauces':
                if(!state.isBackClick2){
                    history.pushState({page: 'Sauces', category: 'sauces'}, 'Sauces', '/recipes?category=sauces');
                } else {
                    state.isBackClick2 = false;
                }
                var c = 0;
                for( var k = 0 ; k < state.cards.length ; k++ ){
                    if(state.cards[k].category != 'sauce'){
                        state.cards[k].hide();
                    } else {
                        state.cards[k].show();
                        c++;
                    }
                }
                this.setRecipeQuantity(c);
            break;
            
            case 'pastes':
                if(!state.isBackClick2){
                    history.pushState({page: 'Pastes', category: 'pastes'}, 'Pastes', '/recipes?category=pastes');
                } else {
                    state.isBackClick2 = false;
                }
                var c = 0;
                for( var k = 0 ; k < state.cards.length ; k++ ){
                    if(state.cards[k].category != 'paste'){
                        state.cards[k].hide();
                    } else {
                        state.cards[k].show();
                        c++;
                    }
                }
                this.setRecipeQuantity(c);
            break;
            
            case 'desserts':
                if(!state.isBackClick2){
                    history.pushState({page: 'Desserts', category: 'desserts'}, 'Desserts', '/recipes?category=desserts');
                } else {
                    state.isBackClick2 = false;
                }
                var c = 0;
                for( var k = 0 ; k < state.cards.length ; k++ ){
                    if(state.cards[k].category != 'dessert'){
                        state.cards[k].hide();
                    } else {
                        state.cards[k].show();
                        c++;
                    }
                }
                this.setRecipeQuantity(c);
            break;
        }
    }

    filterRecipes(){
        var v = this.filterInput.value.toUpperCase();
        var c = 0;

        this.radioCatAll.checked = true;
        if(v.length > 0){
            this.radioCatAll.checked = false;
        }

        if(!state.isBackClick2){
            var adr = '/recipes?search=' + this.filterInput.value
            history.pushState({page: 'Search', category: 'search'}, 'Search', adr);
        } else {
            state.isBackClick2 = false;
        }
        for( var k = 0 ; k < state.cards.length ; k++ ){
            if(state.cards[k].recipe.name.toUpperCase().indexOf(v) > -1){
                state.cards[k].show();
                c++;
            } else {
                state.cards[k].hide();
            }
        }
        this.setRecipeQuantity(c);
    }
}