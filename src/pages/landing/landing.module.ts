import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { landingPage } from './landing';
@NgModule({
  declarations: [landingPage],
  imports: [IonicPageModule.forChild(landingPage)],
  exports: [landingPage]
})
export class landingPageModule { }

// This file is part of the TabletopHelper application developed by Sampsa Kares, Saku Junni, Asko Mikkola, Joel Koskelainen.