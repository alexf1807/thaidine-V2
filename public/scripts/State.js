export class MainState {
    constructor() {
        this.isBackClick = false;
        this.isBackClick2 = false;
        this.recipes = [];
        this.cards = [];
        this.recipeSelected = {};
        this.loadStateObj = {    URLpathname: null,
                                URLrecipeQry: null,
                                URLcategoryQry:null,
                                URLsearchQry:null };
        this.runStateObj = {     URLpathname: null,
                                URLrecipeQry: null,
                                URLcategoryQry:null,
                                URLsearchQry:null };
    }
}