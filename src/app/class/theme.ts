import { Categorie } from "./categorie";

export class Theme {
    "id": number;
    "description": string;
    "selected":boolean;
    "categorie_liste":Array<Categorie>;

    constructor(){
        // on initialise une liste de categorie
        this.categorie_liste = new Array<Categorie>();
    }
}
