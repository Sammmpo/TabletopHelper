import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { initiativePage } from './initiative';

@NgModule({
  declarations: [
    initiativePage,
  ],
  imports: [
    IonicPageModule.forChild(initiativePage),
  ],
  exports: [
    initiativePage
  ]
})
export class initiativePageModule {}

// This file is part of the TabletopHelper application developed by Sampsa Kares, Saku Junni, Asko Mikkola, Joel Koskelainen.
