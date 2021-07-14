import { Injectable } from '@angular/core';;
import { Observable, Subject } from 'rxjs';
import { Bridges } from '../data/bridges';
import { Bridge } from '../modal/bridge';

@Injectable({
  providedIn: 'root'
})
export class BridgeServiceService {

  private infoBridges=new Subject<Bridge>() ;
  _getInfoBridge=this.infoBridges.asObservable();

  constructor() { 
   
  }

  getAllBridge(): Array<Bridge>{
    return Bridges;
  }
  getInfoBridge(_bridgeId:Bridge){
    
    Bridges.forEach(element => {
      if(element==_bridgeId){
       this.infoBridges.next(element);
      }
    
    });
    
  }
}
