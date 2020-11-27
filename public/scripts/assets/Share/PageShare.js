import { $$, $$$ } from '../../lib.js';




export class PageShare {
    constructor(location){
        this.el = $$('div');
        this.el.classList = "page-share d-none";
            
                var d1 = $$('div');
                    d1.classList = 'share-box';

                    this.close = $$('div');
                    this.close.classList = 'share-box-close';
                    this.close.textContent = '⨯';
                    this.close.addEventListener('click', () => {
                        this.hide();
                    })

                    var h1 = $$('h1');
                        h1.textContent = "Share";

                    var divM = $$('div');
                        divM.classList = 'share-grid';
                        this.aFb = $$('a');
                        this.aFb.href = "#";
                        this.aFb.target = "_blank";
                            var i1 = $$('i');
                                i1.classList = "fab fa-facebook fa-3x";
                        $$$(this.aFb, [i1])

                        this.aTw = $$('a');
                        this.aTw.href = "#";
                        this.aTw.target = "_blank";
                            var i2 = $$('i');
                                i2.classList = "fab fa-twitter fa-3x";
                        $$$(this.aTw, [i2])

                        this.aEm = $$('a');
                        this.aEm.href = "#";
                        this.aEm.target = "_blank";
                            var i3 = $$('i');
                                i3.classList = "fas fa-envelope fa-3x";
                        $$$(this.aEm, [i3])
                            
                    $$$(divM, [this.aFb, this.aTw, this.aEm]);

                    var d4 = $$('div');
                        var d4a = $$('a');
                            d4a.textContent = "Copy Link";
                            d4a.addEventListener('click', () => {
                                var tempInput = document.createElement("input");
                                    var url = window.location
                                    tempInput.value = url;
                                    document.body.appendChild(tempInput);
                                    tempInput.select();
                                    document.execCommand("copy");
                                    document.body.removeChild(tempInput);
                                    d4a.textContent = 'Copied ✓'
                            })
                        $$$(d4, [d4a]);

                $$$(d1, [this.close, h1, divM, d4]);
            $$$(this.el, [d1]);

        $$$(location, [this.el]);
    }

    show(){
        this.el.classList.remove('d-none');
    }

    hide(){
        this.el.classList.add('d-none');
    }

    setFacebookHref(l){
        this.aFb.href = 'https://www.facebook.com/sharer/sharer.php?u=' + l;
        this.aTw.href = 'https://twitter.com/share?url=' + l;
        this.aEm.href = 'mailto:' + l;
    }  
}