import { Component, OnInit,AfterViewInit, DoCheck, OnChanges, SimpleChanges } from '@angular/core';

import * as L from 'leaflet';
import { MapService } from '../services/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit{

 
  private coordinates:any;
  
  constructor(private mapService:MapService) { }

  ngAfterViewInit(): void {

    this.mapService.initMap();
}
  addbridge(){
    


   

   

   
  }


}
