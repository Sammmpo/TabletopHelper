import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import firebase from 'firebase';
import { NativeAudio } from '@ionic-native/native-audio';

@IonicPage({name: 'timerPage'})
@Component({
  selector: 'page-timer',
  templateUrl: 'timer.html',
})
export class timerPage {

  @ViewChild("timelimit") timelimit;
  public time = 60;
  timeInterval;
  audio = new Audio('http://soundbible.com/mp3/cartoon-telephone_daniel_simion.mp3'); // Audio that can be played when the time is out.

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseProvider: FirebaseProvider, public NativeAudio: NativeAudio) {
    if (firebaseProvider.currentUser == " "){ // if the currentUser is not defined for some reason, restart the app.
      document.location.href = 'index.html';
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad timerPage');
  }

  public logout() {
    firebase.auth().signOut().then(() => {
      console.log("Logged out!");
      this.firebaseProvider.currentUser = " "; // sets the currentUser to nobody.
      document.location.href = 'index.html'; // reloads the app to force the user out of the member area.
    }, function(error) {
      console.log("Error!")
    });
  }


  public timerStart() {

    if (this.timelimit.value > 3600) { this.timelimit.value = 3600; } // If user gives a value longer than 1 hour, change it to 1 hour because we don't want that.
    console.log("timer started!");

    this.time = parseInt(this.timelimit.value); // User input is string, so we turn it to integer.

    clearInterval(this.timeInterval); // Reset the timer to prevent one timer running multiple timers at the same time. It would not make any sense.
    this.timeInterval = window.setInterval(() => {
      if (this.time > 0) { this.time -= 1; } // reduce time by 1
      else {
        clearInterval(this.timeInterval);
        this.audio.play(); // play audio
      }
    }, 1000) // each second

  }
}
// This file is part of the TabletopHelper application developed by Sampsa Kares, Saku Junni, Asko Mikkola, Joel Koskelainen.