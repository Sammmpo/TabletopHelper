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
  newItem = ''; 
  username = '';
  email = '';
  results = "";
  total = 0;
  diceList = [];
  randomNumber;
  @ViewChild('username') user;
  @ViewChild('password') password;
  @ViewChild("amount") amount;
  @ViewChild("sides") sides;

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

  ngAfterViewInit() {
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
