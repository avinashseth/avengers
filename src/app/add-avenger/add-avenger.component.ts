import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { Avenger } from '../avenger';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-avenger',
  templateUrl: './add-avenger.component.html',
  styleUrls: ['./add-avenger.component.css']
})
export class AddAvengerComponent implements OnInit {

  avenger: Avenger = new Avenger();
  submitted = false;
  constructor(private apiService: ApiService) { }
  ngOnInit() {
  
  }
  newAvenger(): void {
    this.submitted = false;
    this.avenger = new Avenger();
  }
  save() {
    this.apiService.createAvenger(this.avenger);
    this.avenger = new Avenger();
  } 
  onSubmit() { 
    this.submitted = true; 
    this.save(); 
  }

}
