import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';



export const firebaseConfig = {
   apiKey: "AIzaSyDfgeC49CSHYnuboU2LTCGbPTFKp05oPjk",
   authDomain: "angular4chat.firebaseapp.com",
   databaseURL: "https://angular4chat.firebaseio.com",
   projectId: "angular4chat",
   storageBucket: "",
   messagingSenderId: "47689642945"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
