import { DepoService } from './../../services/depo/depo.service';
import { Component, OnInit } from '@angular/core';
import ilData from "../../services/il.json";

interface il{
  id:string;
  name:string;
}
interface ilce{
  ilce_sehirkey:string;
  ilce_id:string;
  ilce_title:string;
}

@Component({
  selector: 'app-new-store',
  templateUrl: './new-store.component.html',
  styleUrls: ['./new-store.component.css']
})
export class NewStoreComponent   {
  constructor(private depoService: DepoService) { 
  }

  iller:il[]=ilData.cityDetail;
  ilceler:ilce[]=ilData.districtDetail;

  onSelect(secilen:any){    
    this.ilceler = ilData.districtDetail;
    this.ilceler = this.ilceler.filter(e => e.ilce_sehirkey == secilen.target.value );
  }

  save(depo:any){
    let deponow = depo;
    let ilName = this.iller.filter(e => e.id == depo.il);    
    let ilceName = this.ilceler.filter(e => e.ilce_sehirkey == depo.il );          
    ilceName = this.ilceler.filter(e => e.ilce_id == depo.ilce );    
    deponow['il'] = ilName[0]['name'];    
    deponow['ilce'] = ilceName[0]['ilce_title'];    
    this.depoService.create(deponow);
  }

}
