import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { Bridge } from '../modal/bridge';


import{MapService} from '../services/map.service'
import { PoiService } from './poi.service';
@Component({
  selector: 'app-poi',
  templateUrl: './poi.component.html',
  styleUrls: ['./poi.component.css']
})
export class PoiComponent implements OnInit {

  current_x:any;
  current_y:any;

  lat:any;

  lng:any;

  poi: Bridge={
    id:" ",
    name:" ",
    lat:0,
    lng:0,
    year:" ",
    length:0,
    width:0
  }

  constructor(private dialog:PoiService,
    public mapservice:MapService) { 

    }
  ngOnInit(): void {
    this.poi.lat=this.mapservice.current_x;
    this.poi.lng=this.mapservice.current_y;
  }

  addPoi(thatt:any){

    this.dialog.addPoi(thatt);

  }

}
