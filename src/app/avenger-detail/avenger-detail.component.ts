import { Component, OnInit, Input } from '@angular/core';

import { Avenger } from '../avenger';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-avenger-detail',
  templateUrl: './avenger-detail.component.html',
  styleUrls: ['./avenger-detail.component.css']
})
export class AvengerDetailComponent implements OnInit {

  @Input() avenger: Avenger;
  constructor(private apiService: ApiService) { }
  ngOnInit() { }
  updateActive(isActive: boolean) {
    this.apiService.updateAvenger(this.avenger.key, {
      active:
        isActive
    });
  }

  deleteRecord() {
    this.apiService.deleteAvenger(this.avenger.key);
  }


}
