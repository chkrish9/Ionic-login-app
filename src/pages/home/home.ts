import { Component } from '@angular/core';
import { NavController,ActionSheetController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  work: string = "mywork";
  constructor(public navCtrl: NavController,public actionSheetCtrl: ActionSheetController) {

  }
  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Settings',
      buttons: [
        {
          text: 'Logout',
          role: 'Logout',
          handler: () => {
            this.navCtrl.setRoot(LoginPage);
            console.log('Destructive clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}
