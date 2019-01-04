import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Produtos } from "../../model/produtos";
import { ITENS } from "../../conf/api.config";
import { ProdutoDetalhePage } from '../../pages/produto-detalhe/produto-detalhe';
import { CarrinhoPage } from '../carrinho/carrinho';
import { AngularFireAuth } from 'angularfire2/auth';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  produtos: Produtos[] = ITENS;
  barraPesq : false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private autentic: AngularFireAuth, private toast: ToastController) {
  }

  prodpage(produtos : Produtos){
    this.navCtrl.push(ProdutoDetalhePage, {produtos : produtos});
  }
  carrinho(){
    this.navCtrl.push(CarrinhoPage);
  }
  ionViewDidLoad() {
    this.autentic.authState.subscribe(data => {
      this.toast.create({
        message: 'Bem Vindo, ${data.username}',
        duration: 3000
      });
    });
  }

}
