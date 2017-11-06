import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
@NgModule({
  declarations: [HomePage],
  imports: [IonicPageModule.forChild(HomePage)],
  exports: [HomePage]
})
export class HomePageModule { }

// This file is part of the TabletopHelper application developed by Sampsa Kares, Saku Junni, Asko Mikkola, Joel Koskelainen.