import { Categorie } from "./categorie";
import { Theme } from "./theme";

export class Exercice {
    "id": number;
    "exercice": string;
    "correction": string;
    "consigne": string;
    "theme":Theme;
    "reponseAttendu":string;
    "listCategorie":[Categorie];
}
