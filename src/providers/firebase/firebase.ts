// The main provider file.

import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()

export class FirebaseProvider {

  constructor(public afd: AngularFireDatabase) {
    console.log('Hello FirebaseProvider Provider');
  }

  currentUser = " "; // tells the app the username of the account that is currently using the application.

  getUsers() { // returns all registered users.
    return this.afd.list('/users/');
  }

  addUser(name) { // creates the database folder and test data for a newly registered user.
    this.afd.list('/users/'+name+'/').push("data");
  }


}

// This file is part of the TabletopHelper application developed by Sampsa Kares, Saku Junni, Asko Mikkola, Joel Koskelainen.
