import { Exercice } from "./exercice";
import { Individu } from "./individu";

export class Suivi {
    "id": number;
    "reussi": boolean;
    "id_individu":number;
    "id_exercice":number;
    "temps":number;
    "nombre_essai":number;
    // Pour potentiellement le remplir
    "individu":Individu;
    "exercice":Exercice;
}