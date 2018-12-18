import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Produtos } from "../../model/produtos";
import { ITENS } from "../../conf/api.config";
import { ProdutoDetalhePage } from '../../pages/produto-detalhe/produto-detalhe';
import { CarrinhoPage } from '../carrinho/carrinho';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  produtos: Produtos[] = ITENS;
  barraPesq : false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  prodpage(produtos : Produtos){
    this.navCtrl.push(ProdutoDetalhePage, {produtos : produtos});
  }
  carrinho(){
    this.navCtrl.push(CarrinhoPage);
  }
}
