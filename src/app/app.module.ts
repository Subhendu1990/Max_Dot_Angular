import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DotsComponent } from './dots/dots.component';
import { DotContainerComponent } from './dot-container/dot-container.component';

@NgModule({
  declarations: [
    AppComponent,
    DotsComponent,
    DotContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
