import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AvengerComponent } from './avenger/avenger.component';
import { AvengerDetailComponent } from './avenger-detail/avenger-detail.component';
import { AvengersListComponent } from './avengers-list/avengers-list.component';
import { AddAvengerComponent } from './add-avenger/add-avenger.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AvengerComponent,
    AvengerDetailComponent,
    AvengersListComponent,
    AddAvengerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
