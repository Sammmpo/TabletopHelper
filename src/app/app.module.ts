import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FirebaseProvider } from '../providers/firebase/firebase';
import { AuthService } from '../providers/auth-service/auth-service';
import { AngularFireDatabase } from 'angularfire2/database';

const firebaseAuth = { // Database information that was copied from the Firebase project on browser.
    apiKey: "AIzaSyCzWvUqrOfS1596AvrcOVB2P8gNqlDAydk",
    authDomain: "tabletophelper.firebaseapp.com",
    databaseURL: "https://tabletophelper.firebaseio.com",
    projectId: "tabletophelper",
    storageBucket: "tabletophelper.firebaseapp.com",
    messagingSenderId: "995300845179"
  };

@NgModule({
  declarations: [
    MyApp,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider,
    AngularFireDatabase,
    AuthService
  ]
})
export class AppModule {}

// This file is part of the TabletopHelper application developed by Sampsa Kares, Saku Junni, Asko Mikkola, Joel Koskelainen.
