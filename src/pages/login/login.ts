import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { User } from '../../model/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = {} as User;
  constructor(public navCtrl: NavController, public navParams: NavParams, private autentic: AngularFireAuth, private alertCtrl: AlertController) {
  }

  async loginFunction(user: User){
    try{
      const result = this.autentic.auth.signInWithEmailAndPassword(user.email, user.senha);
      console.log(result);
      if(result){
        this.navCtrl.setRoot(HomePage);
      }
    }
    catch(e){
      let alert = this.alertCtrl.create({
        title: 'ERRO DE CONEXÃO',
        subTitle: 'Por favor, cheque sua internet e tente novamente',
        buttons: ['OK']
      });
      alert.present();
    }
  }

}
