import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { timerPage } from './timer';

@NgModule({
  declarations: [
    timerPage,
  ],
  imports: [
    IonicPageModule.forChild(timerPage),
  ],
  exports: [
    timerPage
  ]
})
export class timerPageModule {}

// This file is part of the TabletopHelper application developed by Sampsa Kares, Saku Junni, Asko Mikkola, Joel Koskelainen.
