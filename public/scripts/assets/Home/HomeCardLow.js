import { $$, $$$ } from '../../lib.js';
import { state, navLeft } from '../../app.js';



export class HomeCardLow {
    constructor(location){
        this.el = $$('div');
        this.el.classList = 'home-card-low';

            var d1 = $$('div');
                var h2 = $$('h2');
                h2.textContent = "ESSENTIAL THAI PASTES";
                
                var h4 = $$('h4');
                h4.textContent = `Get the true taste of Thailand with these cooking pastes`
                
                var p1 = $$('p');
                p1.textContent = `Pastes form the primary ingredient in a wide variety of Thai dished - infusing the unique flavours into the food.
                                  You can make many dishes with each...`;

                var g1 = $$('div');
                g1.classList = 'triple-grid';

                    var g2 = $$('div');
                    var g3 = $$('div');
                    var g4 = $$('div');

                    $$$(g1, [g2, g3, g4])

                var g5 = $$('div');
                g5.classList = 'triple-grid-text';

                    var gt1 = $$('div');
                        gt1.textContent = 'Green Curry Paste'
                        gt1.addEventListener('click', () => { 
                            state.isBackClick = true;
                            navLeft.clickRecipes();
                            for(var v = 0 ; v < state.cards.length ; v++){
                                if(state.cards[v].getURL() == 'massaman-curry-paste'){
                                    state.cards[v].click();
                                    break;
                                }
                            }
                        })

                    var gt2 = $$('div');
                        gt2.textContent = 'Red Spicy Curry Paste'
                        gt2.addEventListener('click', () => { 
                            state.isBackClick = true;
                            navLeft.clickRecipes();
                            for(var v = 0 ; v < state.cards.length ; v++){
                                if(state.cards[v].getURL() == 'red-spicy-curry-paste'){
                                    state.cards[v].click();
                                    break;
                                }
                            }
                        })

                    var gt3 = $$('div');
                        gt3.textContent = 'Massaman Curry Paste'
                        gt3.addEventListener('click', () => { 
                            state.isBackClick = true;
                            navLeft.clickRecipes();
                            for(var v = 0 ; v < state.cards.length ; v++){
                                if(state.cards[v].getURL() == 'massaman-curry-paste'){
                                    state.cards[v].click();
                                    break;
                                }
                            }
                        })

                    $$$(g5, [gt2, gt1, gt3])

                $$$(d1, [h2, h4, p1, g1]);
            $$$(this.el, [d1, g5]);
        $$$(location, [this.el]);
    }    
}