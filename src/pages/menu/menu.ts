import { Component } from '@angular/core';
import {  NavController, NavParams, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Categorias } from '../../model/categorias';
import { CATEG } from '../../conf/api.config';
import { LoginPage } from '../login/login';
import { CadastroPage } from '../cadastro/cadastro';
import { AngularFireAuth } from 'angularfire2/auth';
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  homePage: typeof HomePage;
  categorias: Categorias[] = CATEG;
  constructor(public navCtrl: NavController, public navParams: NavParams, private autentic: AngularFireAuth, public toast: ToastController,) {
    this.homePage = HomePage;
  }

  login(){
    this.navCtrl.push(LoginPage);
  }
  cadastro(){
    this.navCtrl.push(CadastroPage);
  }
  navProdutos(id_categoria : number){
    this.navCtrl.setRoot('ProdutosPage',{id : id_categoria});
  }

  logout(){
    try{
      const result = this.autentic.auth.signOut()
      .then(() => {
        this.toast.create({
          message: 'Você Saiu!',
          duration: 3000
        });
      })
    }
    catch(e){
      this.toast.create(e);
    }
  }
}
