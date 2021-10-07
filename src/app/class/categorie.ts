import { Theme } from "./theme";

export class Categorie {
    "id": number;
    "id_theme":number;
    "description":string;
    "selected":boolean;
    "theme":Theme;
    
    // on donne une valeur par défaut à theme afin de fabrique un paramètre optionnel
    constructor(id:number, id_theme:number, description:string, selected:boolean=false, theme:Theme = new Theme()){
        this.id = id;
        this.id_theme=id_theme;
        this.description = description;
        this.selected = selected;
        this.theme = theme;
    }
}
