import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoggedinPage } from './loggedin';

@NgModule({
  declarations: [
    LoggedinPage,
  ],
  imports: [
    IonicPageModule.forChild(LoggedinPage),
  ],
  exports: [
    LoggedinPage
  ]
})
export class LoggedinPageModule {}

// This file is part of the TabletopHelper application developed by Sampsa Kares, Saku Junni, Asko Mikkola, Joel Koskelainen.