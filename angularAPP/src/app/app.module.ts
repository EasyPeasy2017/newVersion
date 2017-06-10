import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing,
/*appRoutingProviders*/ } from './app.routes';
import { AppComponent } from './app.component';
import { MediumEditorComponent } from './medium-editor/medium-editor.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewWorkComponent } from './dashboard/new-work/new-work.component';
import { EditorComponent } from './editor/editor.component';

@NgModule({
  declarations: [
    AppComponent,
    MediumEditorComponent,
    TextAreaComponent,
    LoginComponent,
    DashboardComponent,
    NewWorkComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
