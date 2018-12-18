import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Categorias } from '../../model/categorias';
import { CATEG } from '../../conf/api.config';
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  homePage: typeof HomePage;
  categorias: Categorias[] = CATEG;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.homePage = HomePage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }
  navProdutos(id_categoria : number){
    this.navCtrl.setRoot('ProdutosPage',{id : id_categoria});
  }

  loginbtn(){
    this.navCtrl.setRoot('LoginPage');
  }
}
