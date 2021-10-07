import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
//import * as myGlobals from '../../globals';
import {Individu} from '../../class/individu';
import {Router} from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  checkoutForm = this.formBuilder.group({
    identifiant: '',
    motDePasse: ''
  });

  constructor(
    private formBuilder : FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  
  onSubmit(): void {
    console.warn('Your order has been submitted', this.checkoutForm.value);
    let ind = new Individu();
    ind.id = this.checkoutForm.value.identifiant;
    ind.id_formation = 7;
    ind.nom ="martin";
    ind.prenom ="charley";
    //localStorage.getValue(keyname, value)    
    this.checkoutForm.reset();
    this.router.navigate(['/main']);
  }
}
