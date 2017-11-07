// This page is shown as the "home" page to the user.

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import firebase from 'firebase';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage({name: 'homePage'})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class homePage {

  email: string;
  name: string;

  constructor(public app: App, public navCtrl: NavController, public navParams: NavParams, private fire: AngularFireAuth, public firebaseProvider: FirebaseProvider) {
   this.email = fire.auth.currentUser.email;
   if (firebaseProvider.currentUser == " "){
    document.location.href = 'index.html'; 
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad homePage');
  }

  public logout() { // called from HTML element.
    firebase.auth().signOut().then(() => {
      console.log("Logged out!")
      this.firebaseProvider.currentUser = " "; // sets the currentUser to nobody.
      document.location.href = 'index.html'; // reloads the app to force the user out of the member area.
    }, function(error) {
      console.log("Error!")
    });
  }


}

// This file is part of the TabletopHelper application developed by Sampsa Kares, Saku Junni, Asko Mikkola, Joel Koskelainen.
