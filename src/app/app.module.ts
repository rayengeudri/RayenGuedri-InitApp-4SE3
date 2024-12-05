import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importez FormsModule

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ResidenceComponent } from './Residences/residence/residence.component';
import { ResidenceDetailsComponent } from './Residences/residence-details/residence-details.component';
import { AddResidenceComponent } from './Residences/add-residence/add-residence.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ResidencesComponent } from './Residences/residences/residences.component'; // Chemin vers HeaderComponent


@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    
    NotFoundComponent,
    HomeComponent,
    ResidenceComponent,
    ResidenceDetailsComponent,
    AddResidenceComponent,
    NavBarComponent,
    FooterComponent,
    ResidencesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
