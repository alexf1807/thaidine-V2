import { $$, $$$ } from './lib.js';
import { Card } from './assets/Recipes/Card.js';
import { PageLoading } from './assets/Loading/PageLoading.js';
import { PageHome } from './assets/Home/PageHome.js';
import { NavLeft } from './assets/NavLeft/NavLeft.js';
import { PageRecipes } from './assets/Recipes/PageRecipes.js';
import { PageRecipe } from './assets/Recipes/PageRecipe.js';
import { PageAbout } from './assets/About/PageAbout.js';
import { NavRight } from './assets/NavRight/NavRight.js';
import { PageCakeShop } from './assets/CakeShop/PageCakeShop.js';
import { PageCooking } from './assets/Cooking/PageCooking.js';
import { PageTheChef } from './assets/TheChef/PageTheChef.js';
import { MenuButton } from './assets/MenuButton/MenuButton.js';
import { LogoMain } from './assets/LogoMain/LogoMain.js';
import { PageShare } from './assets/Share/PageShare.js';
import { MainState } from './State.js';


export const state = new MainState();

state.loadStateObj.URLpathname = window.location.pathname
state.loadStateObj.URLrecipeQry = getQueryVariable('recipe');
state.loadStateObj.URLcategoryQry = getQueryVariable('category');
state.loadStateObj.URLsearchQry = getQueryVariable('search');


const head = document.head;
const body = document.body;

const title = $$('title');
      title.innerHTML = "Thai Dine - Thai Recipes";

const fav = $$('link');
      fav.rel = "shortcut icon";
      fav.href = "/images/favicon.ico";        

      var lk = $$('link');
      lk.crossorigin = "anonymous";
      lk.rel = "stylesheet";
      lk.href = "https://use.fontawesome.com/releases/v5.2.0/css/all.css";

$$$(head, [lk, title, fav]);

export const pageLoading = new PageLoading(body);
export const logoMain = new LogoMain(body);
export const menuButton = new MenuButton(body);
export const navLeft = new NavLeft(body);
export const pageHome = new PageHome(body);
export const pageRecipes = new PageRecipes(body);
export const pageRecipe = new PageRecipe(body);
export const pageCooking = new PageCooking(body);
export const pageTheChef = new PageTheChef(body);
export const pageAbout = new PageAbout(body);
export const pageCakeShop = new PageCakeShop(body);
export const navRight = new NavRight(body);
export const pageShare = new PageShare(body);

getRecipes();




function getQueryVariable(variable){
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] == variable){
            return pair[1];
        }
    }
    return(null);
}



function getRecipes(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            state.recipes = JSON.parse(this.responseText);
            setRecipes();
        }
        if(this.status == 500){
            alert(this.responseText)
        }                  
    };
    xmlhttp.open("GET", "/getRecipes");
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send();
}



function getRandomInt(min, max) {
    return (Math.random() * max).toFixed();
}



function setRecipes(){
    state.recipes.forEach(function(recipe){
        new Card(recipe, pageRecipes.cardGrid);
    });
    pageRecipes.setRecipeQuantity(state.recipes.length);
    pageHome.topPickCard.set(state.recipes[getRandomInt(0, state.recipes.length-1)])
    updateStates()
}



export function updateStates(){

    if(state.loadStateObj.URLpathname == '/'){
        navLeft.clickHome();

    } else if(state.loadStateObj.URLpathname == '/recipes'){

        navLeft.clickRecipes();
        if(state.loadStateObj.URLcategoryQry && !state.loadStateObj.URLrecipeQry && !state.loadStateObj.URLsearchQry){

            switch (state.loadStateObj.URLcategoryQry){
                case 'all':
                    pageRecipes.radioCatAll.click();
                break;
                
                case 'curries':
                    pageRecipes.radioCatCurries.click();
                break;
                
                case 'soups':
                    pageRecipes.radioCatSoups.click();
                break;
                
                case 'fried-rice':
                    pageRecipes.radioCatFriedRice.click();
                break;
                
                case 'salads':
                    pageRecipes.radioCatSalads.click();
                break;
                
                case 'noodles':
                    pageRecipes.radioCatNoodles.click();
                break;
                
                case 'stir-fried':
                    pageRecipes.radioCatStirFried.click();
                break;
                
                case 'grilled':
                    pageRecipes.radioCatGrilled.click();
                break;
                
                case 'sauces':
                    pageRecipes.radioCatSauces.click();
                break;
                
                case 'pastes':
                    pageRecipes.radioCatPastes.click();
                break;
                
                case 'desserts':
                    pageRecipes.radioCatDesserts.click();
                break;
    
                default:
                    pageRecipes.radioCatAll.click();
            }

        } else if(!state.loadStateObj.URLcategoryQry && state.loadStateObj.URLrecipeQry && !state.loadStateObj.URLsearchQry){
            for(var v = 0 ; v < state.cards.length ; v++){
                if(state.cards[v].getURL() == state.loadStateObj.URLrecipeQry){
                    state.cards[v].click();
                    break;
                }
            }

        } else if(!state.loadStateObj.URLcategoryQry && !state.loadStateObj.URLrecipeQry && state.loadStateObj.URLsearchQry){
            pageRecipes.filterInput.value = state.loadStateObj.URLsearchQry;
            pageRecipes.filterInputButton.click();

        }
        
    } else if(state.loadStateObj.URLpathname == '/cooking'){
        state.isBackClick2 = true;
        navLeft.clickCooking();
        
    } else if(state.loadStateObj.URLpathname == '/the-chef'){
        state.isBackClick2 = true;
        navLeft.clickTheChef();
        
    } else if(state.loadStateObj.URLpathname == '/about'){
        state.isBackClick2 = true;
        navLeft.clickAbout();

    } else if(state.loadStateObj.URLpathname == '/cake-shop'){
        state.isBackClick2 = true;
        navLeft.clickCakeShop();

    } else {
        navLeft.clickHome();
    }
}



window.onpopstate = function(event){

    state.runStateObj.URLpathname = location.pathname;
    state.runStateObj.URLrecipeQry = getQueryVariable('recipe');
    state.runStateObj.URLcategoryQry = getQueryVariable('category');
    state.runStateObj.URLhistoryPage = event.state.page;
    state.runStateObj.URLsearchQry = getQueryVariable('search');

    if(state.runStateObj.URLpathname == '/'){
        state.isBackClick = true;
        navLeft.clickHome();

    } else if(state.runStateObj.URLpathname == '/recipes'){
        state.isBackClick = true;
        navLeft.clickRecipes();
        if(state.runStateObj.URLcategoryQry && !state.runStateObj.URLrecipeQry && !state.runStateObj.URLsearchQry){

            state.isBackClick2 = true;
            switch (state.runStateObj.URLcategoryQry){
                case 'all':
                    pageRecipes.radioCatAll.click();
                break;
                
                case 'curries':
                    pageRecipes.radioCatCurries.click();
                break;
                
                case 'soups':
                    pageRecipes.radioCatSoups.click();
                break;
                
                case 'fried-rice':
                    pageRecipes.radioCatFriedRice.click();
                break;
                
                case 'salads':
                    pageRecipes.radioCatSalads.click();
                break;
                
                case 'noodles':
                    pageRecipes.radioCatNoodles.click();
                break;
                
                case 'stir-fried':
                    pageRecipes.radioCatStirFried.click();
                break;
                
                case 'grilled':
                    pageRecipes.radioCatGrilled.click();
                break;
                
                case 'sauces':
                    pageRecipes.radioCatSauces.click();
                break;
                
                case 'pastes':
                    pageRecipes.radioCatPastes.click();
                break;
                
                case 'desserts':
                    pageRecipes.radioCatDesserts.click();
                break;
    
                default:
                    pageRecipes.radioCatAll.click();
            }

        } else if(!state.runStateObj.URLcategoryQry && state.runStateObj.URLrecipeQry && !state.runStateObj.URLsearchQry){
            for(var v = 0 ; v < state.cards.length ; v++){
                if(state.cards[v].getURL() == state.runStateObj.URLrecipeQry){
                    state.isBackClick2 = true;
                    state.cards[v].click();
                    break;
                }
            }

        } else if(!state.runStateObj.URLcategoryQry && !state.runStateObj.URLrecipeQry && state.runStateObj.URLsearchQry){
            state.isBackClick2 = true;
            pageRecipes.filterInput.value = state.runStateObj.URLsearchQry;
            pageRecipes.filterInputButton.click();


        } else {
            state.isBackClick2 = true;
            pageRecipes.radioCatAll.click();
        }
        
    } else if(state.runStateObj.URLpathname == '/cake-shop'){
        state.isBackClick = true;
        navLeft.clickCakeShop();
        
    } else if(state.runStateObj.URLpathname == '/cooking'){
        state.isBackClick = true;
        navLeft.clickCooking();
        
    } else if(state.runStateObj.URLpathname == '/the-chef'){
        state.isBackClick = true;
        navLeft.clickTheChef();
        
    } else if(state.runStateObj.URLpathname == '/about'){
        state.isBackClick = true;
        navLeft.clickAbout();

    } else {
        state.isBackClick = true;
        navLeft.clickHome();
    }
}