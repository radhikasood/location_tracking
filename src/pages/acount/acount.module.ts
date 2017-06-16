import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AcountPage } from './acount';

@NgModule({
  declarations: [
    AcountPage,
  ],
  imports: [
    IonicPageModule.forChild(AcountPage),
  ],
  exports: [
    AcountPage
  ]
})
export class AcountPageModule {}
