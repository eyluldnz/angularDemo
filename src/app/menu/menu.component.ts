import { Component, OnInit } from '@angular/core';
import {Bridge} from '../modal/bridge';
import {Bridges} from '../data/bridges';
import { BridgeServiceService } from '../services/bridge-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuBridge :Array<Bridge>= [];

  constructor( private bridges:BridgeServiceService) { }

  ngOnInit(): void {
  this.menuBridge=this.bridges.getAllBridge();
  }

  selectBridge( _brigge:Bridge):void{
    this.bridges.getInfoBridge(_brigge);
  }

}
