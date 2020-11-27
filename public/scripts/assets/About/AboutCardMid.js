import { $$, $$$ } from '../../lib.js';




export class AboutCardMid {
    constructor(location){
        this.el = $$('div');
        this.el.classList = 'about-card-mid';

            var h3 = $$('h3');
            h3.textContent = "FOOD, CULTURE, LIFESTYLE ";

            var h1 = $$('h1');
            h1.textContent = `"Thailand has the best food in the World" - attracting millions of tourists every year...`;

            var p1 = $$('p');
            p1.textContent = `If you have never been to Thailand, you may be wondering what the hype is when it comes to Thai food. Thai food is well known around the World,
                              but the true taste of authentic Thai food is often not reflected in the Western interpretations. For this reason, Thai-Dine has been created
                              to offer you real Thai recipes, so you can experience and enjoy Authentic Thai Food first hand!`;

            var p2 = $$('p');
            p2.textContent = `When you arrive in Thailand, one of the first things you notice is the abundance of unusual and tantalizing aromas in the air, 
                              coming from the abundance of street food. For millions of Thai people, food provides a source of daily income and livelihood. 
                              Thai people have a cultural connection to their food, and food is incorporated into many aspects of Thai life.`;

            var i1 = $$('img');
            i1.src = "/images/street-food-1.jpg"

            var p5 = $$('p');
            p5.textContent = `Thai people regularly prepare food as an offering to the Buddhas and Spirits, and place the food at temples of all sizes in order
                              to please their deities`;

            var p3 = $$('p');
            p3.textContent = `Street food sellers can be found everywhere in Thailand, from almost every street corner in Bangkok, to the far reaches of Esan. `


                              
            var i2 = $$('img');
            i2.src = "/images/street-food-5.jpg"

            var p6 = $$('p');
            p6.textContent = `This includes sellers of every type, from the tin shack style bbq restaurant, to the open front timber noodle shops,
                              to the one man wheel cart seller - who persist daily to wheel out their small food cart in the early hours of the morning, sometimes 
                              selling food late into the night.`;
                              
            var i3 = $$('img');
            i3.src = "/images/street-food-3.jpg"

            var p4 = $$('p');
            p4.textContent = `To some, this kind of lifestyle may seem one of stress and hard work. This however is mostly not the case. Thai people have a strong 
                              sense of community between the people, and this is amplified by the incredible numbers of street sellers, who love this close community lifestyle. 
                              Sellers and street food are an important part of Thai society, bringing together commuities and amplifying the community spirit therein!`;

            $$$(this.el, [h3, h1, p1, p2, i1, p5, p3, i2, p6, i3, p4]);
        $$$(location, [this.el]);
    }   
}