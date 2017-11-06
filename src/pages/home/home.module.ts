import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { homePage } from './home';

@NgModule({
  declarations: [
    homePage,
  ],
  imports: [
    IonicPageModule.forChild(homePage),
  ],
  exports: [
    homePage
  ]
})
export class homePageModule {}

// This file is part of the TabletopHelper application developed by Sampsa Kares, Saku Junni, Asko Mikkola, Joel Koskelainen.