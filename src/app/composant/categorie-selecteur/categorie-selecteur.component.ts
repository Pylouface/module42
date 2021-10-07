import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Theme } from 'src/app/class/theme';

@Component({
  selector: 'app-categorie-selecteur',
  templateUrl: './categorie-selecteur.component.html',
  styleUrls: ['./categorie-selecteur.component.css']
})
export class CategorieSelecteurComponent implements OnInit {
  // Input permet de reçevoir des données en entrée
  @Input() listeTheme: Array<Theme> = [];
  // On garde le numéro de l'index du parent
  @Input() indexFromParent:number=0;

  //Ouput de delete
  @Output() deleteOutputEmitter = new EventEmitter<number>();  
  
  // On récupère l'index du tableau des thèmes
  public selectedIndex = 0;
  public uniqueID ="customUniqueID";
  public uniqueIDWithTag ="#customUniqueID";

  // On envoie au parent l'index de son tableau pour suppression
  deleteMe(){
    this.deleteOutputEmitter.emit(this.indexFromParent);
  }

  // quand la liste déroulante change, on va changer la valeur du thème séléctionné
  listeDeroulanteOnChange(){
    // on invalide la selection de tte les autre theme
    this.listeTheme.forEach((value, index) => {
      if(index != this.selectedIndex){
        this.listeTheme[index].selected = false;
      }

    });
    // on valide la séléction de ce theme
    this.listeTheme[this.selectedIndex].selected = true;
  }

  constructor() {
   }

  ngOnInit(): void {
    this.uniqueID += this.indexFromParent;
    this.uniqueIDWithTag += this.indexFromParent;
  }
}