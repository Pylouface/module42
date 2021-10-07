import { Theme } from "./theme";

export class CustomEmitter {
    "id": number;
    "listeTheme":Array<Theme>;


    constructor(id:number, listeTheme:Array<Theme>){
        this.id = id;
        this.listeTheme=listeTheme;
    }
}