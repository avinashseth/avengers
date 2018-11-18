import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Avenger } from './avenger';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private dbPath = '/avengers';
  avengerRef: AngularFireList<Avenger> = null;
  constructor(private db: AngularFireDatabase) {
    this.avengerRef = db.list(this.dbPath);
  }

  createAvenger(avenger: Avenger): void {
    this.avengerRef.push(avenger);
  }

  updateAvenger(key: string, value: any): void {
    this.avengerRef.update(key, value).catch(error => this.handleError(error));
  }
  deleteAvenger(key: string): void {
    this.avengerRef.remove(key).catch(error => this.handleError(error));
  }

  deleteAll(): void {
    this.avengerRef.remove().catch(error =>
      this.handleError(error));
  }
  private handleError(error) {
    console.log(error);
  }

  getAvengersList(): AngularFireList<Avenger> {
    return this.avengerRef;
  }

}
