import { Formation } from "./formation";

export class Individu {
    "id": number;
    "nom": string;
    "prenom": string;
    // normalement vide sauf lors de l'envoie de l'objet
    "mdp":string;
    "admin":boolean;
    "id_formation":number;
    "formation":Formation;
}