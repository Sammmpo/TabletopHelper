// The page used for registration.
// Authentication doesn't really make sense for an app that's main purpose is to serve as CV.
// However, sign-in and registration was created to meet the requirements of the course.

import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseProvider } from './../../providers/firebase/firebase';

@IonicPage({name: 'RegisterPage'})

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {


	@ViewChild('username') user;
  @ViewChild('password') password;


  constructor(private alertCtrl: AlertController, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams,  public firebaseProvider: FirebaseProvider) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  alert(message: string) { // Simple way to send message to the user.
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  registerUser() {
    this.fire.auth.createUserWithEmailAndPassword(this.user.value + '@domian.xta', this.password.value)
    .then(data => {
      console.log('got data ', data); // For development purposes, gives useful data.
      this.alert('Registered!');
    })
    .catch(error => {
      console.log('got an error ', error);
      this.alert(error.message);
    });
    console.log('Would register user with ', this.user.value, this.password.value);
  }

}

// This file is part of the TabletopHelper application developed by Sampsa Kares, Saku Junni, Asko Mikkola, Joel Koskelainen.