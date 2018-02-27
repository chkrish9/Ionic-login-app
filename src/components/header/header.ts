import { Component, Input } from '@angular/core';
import { NavController, NavParams,ActionSheetController } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
/**
 * Generated class for the HeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'header',
  templateUrl: 'header.html'
})
export class HeaderComponent {

  @Input() title: string="";

  constructor(public navCtrl: NavController, public navParams: NavParams,public actionSheetCtrl:ActionSheetController) {
    console.log('Hello HeaderComponent Component');
    console.log(this.title);
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
