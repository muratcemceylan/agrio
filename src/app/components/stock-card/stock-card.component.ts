import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { StockService } from 'src/app/services/stock/stock.service';

@Component({
  selector: 'app-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.css']
})
export class StockCardComponent  implements OnInit {
  depos_Firebase_Data!: AngularFireList<any>;
  depos_Angular!: Observable<any[]>;

  constructor( private stockService: StockService, private db:AngularFireDatabase ) { }

  submitted:boolean=false;

  save(stock:any){   
    this.stockService.create(stock);
    this.submitted =  true;
    setTimeout(()=>{  this.submitted = false; }, 3000);
  }
  ngOnInit(): void {
    this.depos_Firebase_Data = this.db.list('/depos');
    this.depos_Angular=this.depos_Firebase_Data.valueChanges();
  }

}
