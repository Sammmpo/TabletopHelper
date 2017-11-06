import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { dicePage } from './dice';

@NgModule({
  declarations: [
    dicePage
  ],
  imports: [
    IonicPageModule.forChild(dicePage),
  ],
  exports: [
    dicePage
  ]
})
export class dicePageModule {}

// This file is part of the TabletopHelper application developed by Sampsa Kares, Saku Junni, Asko Mikkola, Joel Koskelainen.