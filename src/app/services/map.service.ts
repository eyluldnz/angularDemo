import { Injectable } from '@angular/core';
import { control } from 'leaflet';
import { from, Subject } from 'rxjs';
import * as L from 'leaflet';
import { MatDialog } from '@angular/material/dialog';

import { PoiService } from '../poi/poi.service';
@Injectable({
  providedIn: 'root'
})
export class MapService {

  coordinate:any;
  map:any;
  current_x:any;
  current_y:any;

  constructor(public poi:PoiService) {
   
    
   }
 initMap():void{
    this.map=L.map('map',{
      center:[39.012, 32.884 ],zoom:6.25
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      
      maxZoom: 25,
    });
    
    tiles.addTo(this.map);
  }

  addBridge(){
    var that=this;
    this.map.on('click',function(e:any){
    that.current_x=e.latlng.lat;
    that.current_y=e.latlng.lng;

    if(that.current_x){
      that.poi.openConfirmDialog();
    }
    });
    
    

    
  
   
  }


setCoordinate(lat:number,lng:number):void{
      if(lat && lng){
       
        var marker =L.marker([lat, lng],{icon:L.icon({
          iconSize: [ 25, 41 ],
          iconAnchor: [ 13, 0 ],
          // specify the path here
          iconUrl: 'marker-icon.png',
         
       })}).addTo(this.map);
        marker.bindPopup(lat +" "+ lng).openPopup();
      }
}


}