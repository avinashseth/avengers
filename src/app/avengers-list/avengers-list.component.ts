import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs/operators';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-avengers-list',
  templateUrl: './avengers-list.component.html',
  styleUrls: ['./avengers-list.component.css']
})
export class AvengersListComponent implements OnInit {

  avengers: any;
  constructor(private apiService: ApiService) { }
  ngOnInit() {
    this.getAvengersList();
  }

  getAvengersList() {
    // Use snapshotChanges().map() to store the key
    this.apiService.getAvengersList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      )
    ).subscribe(avengers => {
      this.avengers = avengers;
    });
  }

  removeAll() {
    this.apiService.deleteAll();
  }

}
