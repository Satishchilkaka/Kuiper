import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WarningComponent } from './warning/warning.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AssignmentComponent } from './assignment/assignment.component';
import { UserComponent } from './user/user.component';
import { ServertestComponent } from './servertest/servertest.component';
import { Assignment1Component } from './assignment1/assignment1.component';
import { Assignment01Component } from './assignment01/assignment01.component';

@NgModule({
  declarations: [
    AppComponent, WarningComponent, ServerComponent, ServersComponent, AssignmentComponent,
    UserComponent,
    ServertestComponent,
    Assignment1Component,
    Assignment01Component
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
