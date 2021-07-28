import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DepoService {

  
  constructor(private db: AngularFireDatabase ) { }

  create(depo:any){
        return this.db.list('/depos').push(depo);
  }
  
}
