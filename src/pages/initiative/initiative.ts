import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import firebase from 'firebase';
import { NativeAudio } from '@ionic-native/native-audio';

@IonicPage({name: 'initiativePage'})
@Component({
  selector: 'page-initiative',
  templateUrl: 'initiative.html',
})
export class initiativePage {
  nativeAudios;

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseProvider: FirebaseProvider, public nativeAudio: NativeAudio) {
    // if (firebaseProvider.currentUser == " "){ // if the currentUser is not defined for some reason, it takes to the login page.
    //   this.navCtrl.setRoot('LoginPage');
    //   }
      this.nativeAudio.preloadSimple('uniqueId1', './beat.wav');
      this.nativeAudio.play('uniqueId1');
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad initiativePage');
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

  public play(){
    this.nativeAudio.play('uniqueId1');
    console.log("play sound");
  }

}

// This file is part of the TabletopHelper application developed by Sampsa Kares, Saku Junni, Asko Mikkola, Joel Koskelainen.