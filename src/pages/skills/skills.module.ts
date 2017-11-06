import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SkillsPage } from './skills';

@NgModule({
  declarations: [
    SkillsPage,
  ],
  imports: [
    IonicPageModule.forChild(SkillsPage),
  ],
  exports: [
    SkillsPage
  ]
})
export class SkillsPageModule {}

// This file is part of the TabletopHelper application developed by Sampsa Kares, Saku Junni, Asko Mikkola, Joel Koskelainen.
