import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExperiencePage } from './experience';

@NgModule({
  declarations: [
    ExperiencePage,
  ],
  imports: [
    IonicPageModule.forChild(ExperiencePage),
  ],
  exports: [
    ExperiencePage
  ]
})
export class ExperiencePageModule {}

// This file is part of the TabletopHelper application developed by Sampsa Kares, Saku Junni, Asko Mikkola, Joel Koskelainen.
