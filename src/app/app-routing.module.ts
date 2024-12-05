import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ResidenceComponent } from './Residences/residence/residence.component';
import { ResidenceDetailsComponent } from './Residences/residence-details/residence-details.component';
import { AddResidenceComponent } from './Residences/add-residence/add-residence.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'residence', component: ResidenceComponent },
  { path: 'residences/:id', component: ResidenceDetailsComponent },
  { path: 'add-residence', component: AddResidenceComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirection corrigée
  { path: '**', component: NotFoundComponent }, // Gestion des routes inexistantes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
