import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
/**
 * Creates an instance of LoginPage.
 * @param {NavController} navCtrl 
 * @param {NavParams} navParams 
 * @memberof LoginPage
 */
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
/**
 * 
 * 
 * @memberof LoginPage
 */
ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    this.navCtrl.setRoot(HomePage);
  }
}
