import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { DepoService } from 'src/app/services/depo/depo.service';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css']
})
export class StoreListComponent implements OnInit {  
  depos_Firebase_Data!: AngularFireList<any>;
  depos_Angular!: Observable<any[]>;

  constructor(private depoService:DepoService, private db:AngularFireDatabase) {         
  }

  ngOnInit(): void {
    this.depos_Firebase_Data = this.db.list('/depos');
    this.depos_Angular=this.depos_Firebase_Data.valueChanges();
  }

}
