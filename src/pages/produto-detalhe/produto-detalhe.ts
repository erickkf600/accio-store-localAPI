import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Produtos } from '../../model/produtos';
@Component({
  selector: 'page-produto-detalhe',
  templateUrl: 'produto-detalhe.html',
})
export class ProdutoDetalhePage {
  produtos: Produtos;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.produtos = this.navParams.get('produtos');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdutoDetalhePage');
  }

}
