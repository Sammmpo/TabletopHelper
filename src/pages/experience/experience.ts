import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import firebase from 'firebase';

@IonicPage({name: 'ExperiencePage'})
@Component({
  selector: 'page-experience',
  templateUrl: 'experience.html',
})
export class ExperiencePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseProvider: FirebaseProvider) {

    if (firebaseProvider.currentUser == " "){ // if the currentUser is not defined for some reason, it takes to the login page.
      this.navCtrl.setRoot('LoginPage');
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExperiencePage');
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