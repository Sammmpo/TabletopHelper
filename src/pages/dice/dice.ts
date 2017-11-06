import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
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
  shoppingItems: FirebaseListObservable<any[]>;
  newItem = ''; // This is only used to generate test data for each user, not actually utilized within the app.
  username = '';
  email = '';

  @ViewChild('username') user;
  @ViewChild('password') password;

  constructor(private auth: AuthService, public navParams: NavParams, public firebaseProvider: FirebaseProvider) {
    let info = this.auth.getUserInfo();
    console.log(info);
    console.log(this.firebaseProvider.currentUser);
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

  @ViewChild("amount") amount;
  @ViewChild("sides") sides;
  diceList = [];

  public rollDice(){
    console.log("rolling the dice!");
    this.diceList = [];
    for (let i = 0; i < this.amount.value; i++){
      this.randomNumber = Math.floor(Math.random() * this.sides.value + 1);
      console.log(this.randomNumber);
      this.diceList.push(this.randomNumber);
    }
    this.ngAfterViewInit();
  }

  randomNumber;

  ngAfterViewInit() {
    // document.getElementById("rollResult").innerHTML = String(this.randomNumber);
    document.getElementById("rollResult").innerHTML = "Results: ";
    for (let i = 0; i < this.diceList.length; i++){
      document.getElementById("rollResult").innerHTML += this.diceList[i]+" ";
    }
  }

}

// This file is part of the TabletopHelper application developed by Sampsa Kares, Saku Junni, Asko Mikkola, Joel Koskelainen.
