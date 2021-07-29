import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { StockService } from 'src/app/services/stock/stock.service';

@Component({
  selector: 'app-stock-supply-start',
  templateUrl: './stock-supply-start.component.html',
  styleUrls: ['./stock-supply-start.component.css']
})
export class StockSupplyStartComponent implements OnInit {
  
  depos_Firebase_Data!: AngularFireList<any>;
  depos_Angular!: Observable<any[]>;
  stocks_Firebase_Data!: AngularFireList<any>;
  stocks_Angular!: Observable<any[]>;

  constructor(private stockService: StockService, private db:AngularFireDatabase) { }


  submitted:boolean=false;

  save(stockAmount:any){   
    console.log(stockAmount);
    let stockModel:any;
    stockModel.prop(stockAmount.stockAdi);

    this.stockService.create(stockAmount);
    this.submitted =  true;
    setTimeout(()=>{  this.submitted = false; }, 3000);
  }


  ngOnInit(): void {
    this.depos_Firebase_Data = this.db.list('/depos');
    this.depos_Angular=this.depos_Firebase_Data.valueChanges();    

    this.stocks_Firebase_Data = this.db.list('/stock');
    this.stocks_Angular=this.stocks_Firebase_Data.valueChanges();
  }
}

