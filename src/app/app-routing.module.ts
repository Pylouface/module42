import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './composant/connexion/connexion.component';
import { MainComponent } from './composant/main/main.component';
import { CreateExerciceComponent } from './composant/create-exercice/create-exercice.component';
import { AdminDroitComponent } from './composant/admin-droit/admin-droit.component';

const routes: Routes = [
  { path: 'connexion', component: ConnexionComponent },
  { path: 'main', component: MainComponent },
  { path: 'createExercice', component: CreateExerciceComponent },
  { path: 'adminDroit', component: AdminDroitComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
