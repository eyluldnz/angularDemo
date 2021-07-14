
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import {Bridges} from "src/app/data/bridges";

import{PoiComponent} from './poi.component'
@Injectable({
  providedIn: 'root'
})
export class PoiService {
  coordinates: any;
  constructor(
    public _dialog: MatDialog) { }


  openConfirmDialog() {
    return this._dialog.open(PoiComponent, {
      panelClass: "addingTransportationDriver-dialog-container",
      disableClose: true,
      data: {
      
      },
      position: {
        top: "25px"
      }
    });
  }

  addPoi(_currentPoi:any){

Bridges.push(_currentPoi);
  }
 

}


