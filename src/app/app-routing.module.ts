import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvengersListComponent } from './avengers-list/avengers-list.component';
import { AddAvengerComponent } from './add-avenger/add-avenger.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'avengers', pathMatch: 'full' },
  { path: 'avengers', component: AvengersListComponent },
  { path: 'add', component: AddAvengerComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
