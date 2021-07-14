import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Bridge } from '../modal/bridge';
import { BridgeServiceService } from '../services/bridge-service.service';
import { MapService } from '../services/map.service';

@Component({
  selector: 'app-bridge-info',
  templateUrl: './bridge-info.component.html',
  styleUrls: ['./bridge-info.component.css']
})
export class BridgeInfoComponent implements OnInit {

  getBridge: any;

  constructor(private bridges: BridgeServiceService, private mapService:MapService) {
  }
  ngOnInit(): void {
    this.bridges._getInfoBridge.subscribe(bridge=>{
      if(!bridge){
        this.getBridge="";
      }
      else{
        this.getBridge=bridge;
      }
    })
  }

  goToMap(goToBridge:Bridge){
    this.mapService.setCoordinate(goToBridge.lat,goToBridge.lng);
    
  }

}





