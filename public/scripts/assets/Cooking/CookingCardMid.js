import { $$, $$$ } from '../../lib.js';




export class CookingCardMid {
    constructor(location){
        this.el = $$('div');
        this.el.classList = 'cooking-card-mid';

            var h3 = $$('h3');
            h3.textContent = `THAI FOOD IS PREPARED WITH...`;

            var h1 = $$('h1');
            h1.textContent = `... Great Attention To The Appearance, Aromatic Qualities & Delicious Taste!`;

            var p1 = $$('p');
            p1.textContent = `Thai food isn't about simplicity... It's about the juggling of ingredients to create a harmonious finish. Often lightly prepared and lightly cooked,
                              it exhibits many medicinal benefits - being used in traditional medicine to treat a large number of ailments.`;

            var p3 = $$('p');
            p3.textContent = `Thai food makes the most of the abundance of natural ingredients and inventory to be found all over Thailand. 
                              For instance it is common to use the banana leaf in the preparation and presentation of certain dishes and desserts. 
                              Although it cannot be eaten, it is used for wrapping foods before cooking, and as a plate for some dishes. `;

            var i1 = $$('img');
            i1.src = "/images/td_cooking2.jpg"    

            var p4 = $$('p');
            p4.textContent = `Similarly, the bamboo tree provides for a great cooking pot for many dishes and desserts...`;

            var h4 = $$('h1');
            h4.textContent = "Unusual Dishes...";

            var p2 = $$('p');
            p2.textContent = `Across Thailand, one can find a wide variety of dished. But from time to time, you may come across something somewhat different. 
                              One such dish found in the North of Thailand is the pork brain, wrapped in banana leaves, and slow grilled over an open flame.`
        
            var p5 = $$('p');
            p5.textContent = `If you visit the North East of Thailand, you may find live shrimp on the menu, known as krills. Served with seasoning and often eaten with pickled fish, 
                              this dish is dancing!`
        

            var p7 = $$('p');
            p7.textContent = `Popular throughout the country is chicken feet. Normally served in a variety of noodle soups, this every-day food is boiled until the skin is soft and falls off the toe bones.`
        

            var p8 = $$('p');
            p8.textContent = `One of the more common additions to a Thai dish is chicken or pork blood, boiled until it forms a solid jelly-like texture, and enjoyed with rice or noodles.`
        
            var h5 = $$('h1');
            h5.textContent = "Fruits, Herbs & Spics";

            var p6 = $$('p');
            p6.textContent = `Thai cooking makes use of hundreds of unusual Asian fruits, herbs and spices - which are responsible for the unique tastes and aromas of the dish.
                              More information coming soon...`
        
            $$$(this.el, [h3, h1, p1, p3, i1, p4, h4, p2, p5, p7, p8, h5, p6]);
        $$$(location, [this.el]);
    }   
}