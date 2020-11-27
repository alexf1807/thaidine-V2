import { $$, $$$ } from '../../lib.js';




export class TheChefCardMid {
    constructor(location){
        this.el = $$('div');
        this.el.classList = 'the-chef-card-mid';

            var h3 = $$('h3');
            h3.textContent = "Gift K, Bangkok";

            var h1 = $$('h1');
            h1.textContent = `"I Want To Share My Recipes With The World..."`;

            var p5 = $$('p');
            p5.textContent = `I'm 33 years old, from Thailand, and have always had a love for the art of cooking - it's my passion.`;

            var p1 = $$('p');
            p1.textContent = `To most visitors, Thailand is known as the "Land of Smiles". 
                              Within Thailand there are 6 regions, North, North East (Esan), West, Central, East, South. Each of which exhibits
                              a natural and simple life-style, as well as a distinct and varying range of foods.`
                              
            var i2 = $$('img');
            i2.src = "/images/field-1.jpg"
                              
            var p6 = $$('p');
            p6.textContent = `Our livelihood is rooted in agriculture, with a profound respect for nature and religion. The knowledge of which is
                              passed down from generation to generation.
                              Some of the outstanding characteristics of Thai society inlude generosity, kindness, care and interdependence. 
                              The uniqueness of Thailand is reflected in our food - who'se reputation is well known around the world.`;


            var p2 = $$('p');
            p2.textContent = `Unlike in western culture, it is often the responsibility of the children in the house to prepare and cook for the family.
                              Therefore, I have been cooking for myself and my family since an early age. Therefore, it is my pleasure to compile
                              a list of my family's favorite Thai food recipes - and give them to you for free!`;

            var p3 = $$('p');
            p3.textContent = `I hope to bring happiness and enjoyment to those who love cooking as much as I do`;

            var p4 = $$('p');
            p4.textContent = `If you like my recipes and want to stay up-to-date with the latest, be sure to sign up for my newsletter!`;

            $$$(this.el, [h3, h1, p5, p1, i2, p6, p2, p3, p4]);
        $$$(location, [this.el]);
    }   
}