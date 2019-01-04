import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { User } from '../../model/user';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
  user = {} as User;
  constructor(public navCtrl: NavController, public navParams: NavParams, private autentic: AngularFireAuth, private alertCtrl: AlertController) {
  }
  async cadastroFunction(user: User){
    try{
      const result = await this.autentic.auth.createUserWithEmailAndPassword(user.email, user.senha);
      console.log(result);
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
