import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isImageLoaded = false;

  showDot(){
    this.isImageLoaded = true;
  }
}
