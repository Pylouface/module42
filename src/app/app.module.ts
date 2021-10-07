import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './composant/connexion/connexion.component';
import { MainComponent } from './composant/main/main.component';
import { CreateExerciceComponent } from './composant/create-exercice/create-exercice.component';
import { AdminDroitComponent } from './composant/admin-droit/admin-droit.component';
import { CategorieSelecteurComponent } from './composant/categorie-selecteur/categorie-selecteur.component';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    MainComponent,
    CreateExerciceComponent,
    AdminDroitComponent,
    CategorieSelecteurComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RichTextEditorAllModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
