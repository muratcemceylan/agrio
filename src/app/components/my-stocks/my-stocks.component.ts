import { StockService } from './../../services/stock/stock.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Component({
  selector: 'app-my-stocks',
  templateUrl: './my-stocks.component.html',
  styleUrls: ['./my-stocks.component.css']
})
export class MyStocksComponent implements OnInit {
  stocks_Firebase_Data!: AngularFireList<any>;
  stocks_Angular!: Observable<any[]>;

  constructor(private stockService: StockService, private db:AngularFireDatabase) {         
  }

  ngOnInit(): void {
    this.stocks_Firebase_Data = this.db.list('/stock');
    this.stocks_Angular=this.stocks_Firebase_Data.valueChanges();
  }

}
