import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WarningComponent } from './warning/warning.component';
import { ServerComponent } from './server/server.component';

@NgModule({
  declarations: [
    AppComponent, WarningComponent, ServerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
