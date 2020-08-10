import { Component } from '@angular/core';
import websdk from '@sumsub/websdk';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    
    const build = websdk.Build();

    console.log(`websdk`, websdk, build);
  }
}
