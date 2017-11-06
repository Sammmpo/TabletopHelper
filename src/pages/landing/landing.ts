// This is the landing page for the application.

import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular'; 
import { IonicPage } from 'ionic-angular';

@IonicPage({name: 'landingPage'})
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html'
})
export class landingPage {

	@ViewChild('username') uname;
	@ViewChild('password') password;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
  }

  signIn() { // Function for the signin button.
  	this.navCtrl.push('LoginPage');
  }

  register() { // Function for the register button.
  	this.navCtrl.push('RegisterPage');
  }

}

// This file is part of the TabletopHelper application developed by Sampsa Kares, Saku Junni, Asko Mikkola, Joel Koskelainen.