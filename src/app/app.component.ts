import { Component } from '@angular/core';
import { MapService } from './services/map.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularDemo';
  constructor(private mapService:MapService){

  }
  addBridgeTo(){
    this.mapService.addBridge();
  }
}
