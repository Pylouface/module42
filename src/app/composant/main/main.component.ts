import { trimTrailingNulls } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Exercice } from 'src/app/class/exercice';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  // on déclare l'exercie en cours
  public exoEnCours = new Exercice();
  // on rend la réponse de l'utilisateur pulique afin de pouvoir la voir dans la vue
  public userReponse = "test";
  
  // pas oublier d'importer le router dans le constructeur pour pouvoir gerer les route.
  constructor(private router: Router) {
  }


  // ici récupérer un exo via une api xmlhtpprequest
  ngOnInit(): void {
    this.exoEnCours.correction = "A la première ligne on déclare la varriable x, puis on l'incrémente elle même de 1, à la ligne 3 x est donc égal à 4";
    this.exoEnCours.reponseAttendu = "4";
    this.exoEnCours.exercice = "var x = 3; <br> x = x+1; <br> console.log(x);";
    this.exoEnCours.consigne = "Prédire la sortie du code suivant";
  }

  // Lorsque que l'on tente de valider la réponse
  public valideReponse(){
    // On remplace tout les espaces par rien, uniquement les virgules comptent --> A voir
    this.userReponse = this.userReponse.replace(/ /g,'');
    // on compare la réponse avec la réponse attendu de l'objet 
    console.log(this.userReponse);
  }
}
