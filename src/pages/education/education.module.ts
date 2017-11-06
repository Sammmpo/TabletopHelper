import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EducationPage } from './education';

@NgModule({
  declarations: [
    EducationPage
  ],
  imports: [
    IonicPageModule.forChild(EducationPage),
  ],
  exports: [
    EducationPage
  ]
})
export class EducationPageModule {}

// This file is part of the TabletopHelper application developed by Sampsa Kares, Saku Junni, Asko Mikkola, Joel Koskelainen.