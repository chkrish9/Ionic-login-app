import { Component } from '@angular/core';
import { NavController,ActionSheetController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title:string="Home";
  work: string = "mywork";
  constructor(public navCtrl: NavController,public actionSheetCtrl: ActionSheetController) {

  }
  
}
