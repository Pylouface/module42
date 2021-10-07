import { Component, Input, OnInit } from '@angular/core';
import { Exercice } from 'src/app/class/exercice';
import { Theme } from 'src/app/class/theme';
import { Categorie } from 'src/app/class/categorie';
import { ToolbarService, LinkService, ImageService, HtmlEditorService } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
  selector: 'app-create-exercice',
  templateUrl: './create-exercice.component.html',
  styleUrls: ['./create-exercice.component.css'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class CreateExerciceComponent implements OnInit {

  constructor() { }

  public exoEnCours = new Exercice();
  public listeDeListeTheme = new Array<Array<Theme>>();
  public tools: object = {
    items: ['Bold', 'Italic', 'Underline', 'StrikeThrough', '|',
        'FontSize', 'FontColor', 'BackgroundColor'
      ]
    };
  

  // TODO : vérifier que au moins 1 thème est séléctionné avant la création en BDD
  // TODO : récupérer les couleurs dans l'affichage
  // TODO : module de connexion à la BDD

  ngOnInit(): void {
    // Par défaut on commence avec un seul theme
    this.listeDeListeTheme.push(this.generateTestTheme());
    //this.exoEnCours.exercice = "";
    //this.exoEnCours.correction = "";
  }

  public createNewTheme(){
    this.listeDeListeTheme.push(this.generateTestTheme());
    console.log(this.listeDeListeTheme);
  }

  // Permet de supprimer l'index i du tableau
  deleteTheme(index:number){
    this.listeDeListeTheme.splice(index,1);
  }

  // Fonction générant des fake themes/catégorie --> à fin de test
  generateTestTheme(){
    let listeTheme = new Array<Theme>();
    let theme = new Theme();
    theme.description = "css - niveau 1";
    theme.id = 0;
    let myCat = new Categorie(0, 0, "selection css");
    let myCat2 = new Categorie(1, 0, "changement de couleur");
    let myCat3 = new Categorie(2, 0, "positionnement");
    let myCat5 = new Categorie(2, 0, "positionnement - 2");
    let myCat6 = new Categorie(2, 0, "positionnement - 3 ");
    let myCat7 = new Categorie(2, 0, "positionnement - 4");
    let myCat8 = new Categorie(2, 0, "positionnement - 5");
    let myCat9 = new Categorie(2, 0, "positionnement - 6");

    theme.categorie_liste.push(myCat);
    theme.categorie_liste.push(myCat2);
    theme.categorie_liste.push(myCat3);
    theme.categorie_liste.push(myCat9);
    theme.categorie_liste.push(myCat5);
    theme.categorie_liste.push(myCat6);
    theme.categorie_liste.push(myCat7);
    theme.categorie_liste.push(myCat8);
    theme.categorie_liste.push(myCat8);
    theme.categorie_liste.push(myCat8);
    theme.categorie_liste.push(myCat8);
    theme.categorie_liste.push(myCat8);
    theme.categorie_liste.push(myCat8);
    listeTheme.push(theme);

    let theme2 = new Theme();
    theme2.description = "css - niveau 2";
    theme2.id = 1;
    myCat = new Categorie(3, 1, "animation css");
    myCat3 = new Categorie(5, 1, "positionnement grid");
    theme2.categorie_liste.push(myCat);
    theme2.categorie_liste.push(myCat3);
    listeTheme.push(theme2);

    let theme3 = new Theme();
    theme3.description = "js - niveau 1";
    theme3.id = 2;
    myCat = new Categorie(8, 2, "tableau facile");
    myCat3 = new Categorie(9, 2, "boucle for facile");
    theme3.categorie_liste.push(myCat);
    theme3.categorie_liste.push(myCat3);
    listeTheme.push(theme3);
    return listeTheme;
  }

}