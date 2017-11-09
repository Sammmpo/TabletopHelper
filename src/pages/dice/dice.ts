import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavParams, NavController } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { FirebaseListObservable } from 'angularfire2/database';
import { AuthService } from '../../providers/auth-service/auth-service';
import firebase from 'firebase';

@IonicPage({name: 'dicePage'})
@Component({
  selector: 'page-dice',
  templateUrl: 'dice.html',
})

export class dicePage {
 // Setting up variables.
  newItem = ''; 
  username = '';
  email = '';
  results = "";
  total = 0;
  diceList = [];
  randomNumber;
  // Read the following #element from our template.
  @ViewChild('username') user;
  @ViewChild('password') password;
  @ViewChild("amount") amount;
  @ViewChild("sides") sides;

  constructor(private auth: AuthService, public navParams: NavParams, public firebaseProvider: FirebaseProvider, public navCtrl: NavController) {
    let info = this.auth.getUserInfo();
    console.log(info);
    console.log(this.firebaseProvider.currentUser);

    if (firebaseProvider.currentUser == " "){ // if the currentUser is not defined for some reason, restart the app.
      document.location.href = 'index.html';
      }
  }

  public logout() {
    firebase.auth().signOut().then(() => {
      console.log("Logged out!")
      this.firebaseProvider.currentUser = " "; // sets the currentUser to nobody.
      document.location.href = 'index.html'; // reloads the app to force the user out of the member area.
    }, function(error) {
      console.log("Error!")
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

  public rollDice(){
    // Changes input if the number is too large for the app.
    if (this.sides.value > 144) { this.sides.value = 144; }
    if (this.amount.value > 30) { this.amount.value = 30; }

    // If both requirements are met, reset the array and start re-filling it with dice roll results.
    if (this.sides.value < 144 || this.amount.value < 30) {
      console.log("rolling the dice!");
      this.diceList = [];
      for (let i = 0; i < this.amount.value; i++){
        this.randomNumber = Math.floor(Math.random() * this.sides.value + 1);
        console.log(this.randomNumber);
        this.diceList.push(this.randomNumber);
      }
      this.ngAfterViewInit() // Run update.
    }

  }

  ngAfterViewInit() {
    // First reset the variables, then use the recently filled array to give them new values.
    this.results = ""; 
    this.total = 0;
    for (let i = 0; i < this.diceList.length; i++){
      this.results += this.diceList[i]+" ";
    }
    for (let i = 0; i < this.diceList.length; i++){
      this.total += this.diceList[i];
    }
  }

}

// This file is part of the TabletopHelper application developed by Sampsa Kares, Saku Junni, Asko Mikkola, Joel Koskelainen.
