import { Component, OnInit } from '@angular/core';
import { DepoService } from 'src/app/services/depo/depo.service';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css']
})
export class StoreListComponent implements OnInit {  

  constructor(private depoService:DepoService) {         
  }

  ngOnInit(): void {
  }

}
