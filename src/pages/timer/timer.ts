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
  audio = new Audio('http://soundbible.com/mp3/cartoon-telephone_daniel_simion.mp3'); // Audio that can be played when the time is out.

  public time = 60;
  timeInterval;

  public timerRunning = false;
  public player1turn = false;
  public time1 = 60;
  public time2 = 60;
  timeInterval1;
  timeInterval2;

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

    clearInterval(this.timeInterval);

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

  public resetTime() { // resets everything and applies the user input of time limit.
    clearInterval(this.timeInterval);
    clearInterval(this.timeInterval1);
    clearInterval(this.timeInterval2);
    this.timerRunning = false;
    this.player1turn = false;
    if (this.timelimit.value > 3600) { this.timelimit.value = 3600; }
    this.time = parseInt(this.timelimit.value);
    this.time1 = parseInt(this.timelimit.value);
    this.time2 = parseInt(this.timelimit.value);
    console.log("reset time");
  }

  public finishTurn() {

    clearInterval(this.timeInterval1);
    clearInterval(this.timeInterval2);

    if (this.timerRunning == false){ // if runs for the first time
      if (this.timelimit.value > 3600) { this.timelimit.value = 3600; } // If user gives a value longer than 1 hour, change it to 1 hour because we don't want that.
      this.timerRunning = true;
      this.time1 = parseInt(this.timelimit.value);
      this.time2 = parseInt(this.timelimit.value);
      console.log("timer started!");
    }

      this.player1turn = !this.player1turn; // toggle, first time turns this variable into 'true'.

      if (this.player1turn == true) {
      this.timeInterval1 = window.setInterval(() => {
        if (this.time1 > 0) { this.time1 -= 1; } // reduce player1 time by 1
        else {
          clearInterval(this.timeInterval1);
          this.timerRunning = false;
          this.audio.play(); // play audio
        }
      }, 1000) // each second
    } else {
      this.timeInterval2 = window.setInterval(() => {
        if (this.time2 > 0) { this.time2 -= 1; } // reduce player2 time by 1
        else {
          clearInterval(this.timeInterval2);
          this.timerRunning = false;
          this.audio.play(); // play audio
        }
      }, 1000) // each second
    }
  

  }

}
// This file is part of the TabletopHelper application developed by Sampsa Kares, Saku Junni, Asko Mikkola, Joel Koskelainen.