import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private db: AngularFireDatabase) { }
    create(stock:any){
      return this.db.list('/stock').push(stock);
    }
  }
