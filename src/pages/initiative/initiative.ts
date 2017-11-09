import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { FirebaseListObservable } from 'angularfire2/database';
import firebase from 'firebase';
import { NativeAudio } from '@ionic-native/native-audio';

@IonicPage({name: 'initiativePage'})
@Component({
  selector: 'page-initiative',
  templateUrl: 'initiative.html',
})
export class initiativePage {
  players: FirebaseListObservable<any[]>;
  playerArray = [];
  newItem = '';
  //@ViewChild("playerAmount") playerAmount;

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseProvider: FirebaseProvider, public nativeAudio: NativeAudio, public toast: ToastController) {
    if (firebaseProvider.currentUser == " "){ // if the currentUser is not defined for some reason, restart the app.
      document.location.href = 'index.html';
    } else {
      this.players = this.firebaseProvider.getPlayers(this.firebaseProvider.currentUser); // sends the currentUser to the 'getPlayers' function.
      console.log(this.firebaseProvider.currentUser);
    }
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

  public addItem() { // Items aka player names.
    if (this.firebaseProvider.currentUser == " "){
      this.navCtrl.setRoot('LoginPage');
      } else {
        this.firebaseProvider.addItem(this.newItem, this.firebaseProvider.currentUser); // sends the new item name and the currentUser to the 'addItem' function.
        this.toast.create({ // gives feedback to the user for their action.
          message: 'Item added!',
          duration: 2000
          }).present();
      }
  }
 
  public removeItem(id) {
    if (this.firebaseProvider.currentUser == " "){
      this.navCtrl.setRoot('LoginPage');
      } else {
        this.firebaseProvider.removeItem(id, this.firebaseProvider.currentUser); // sends the selected item name and the currentUser to the 'removeItem' function.
      }
  }

  public selectRandom(){ // Using DOM instead of ionic/firebase tools, could see change.
    console.log("selecting random!");
    this.playerArray = []; // reset the array
    for (let i = 0; i < parseInt(document.getElementById('playerAmount').innerHTML); i++) { // Uses the element in template to find out the amount of players.
      // then push each player to the array.
        var playerId = document.getElementById(""+i+"").innerHTML;
        this.playerArray.push(playerId);
    }
    console.log(this.playerArray);
    if (this.playerArray.length > 0){
      for (let i = 0; i < this.playerArray.length; i++){
        document.getElementById(""+i+"").style.color = "black"; // Resets all player names to black.
      }
      document.getElementById(""+Math.floor(Math.random() * this.playerArray.length)+"").style.color = "blue"; // Recolors one random player name to blue.
    }
  }

}

// This file is part of the TabletopHelper application developed by Sampsa Kares, Saku Junni, Asko Mikkola, Joel Koskelainen.