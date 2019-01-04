import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CarrinhoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-carrinho',
  templateUrl: 'carrinho.html',
})
export class CarrinhoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarrinhoPage');
  }

  remove(item) {
    var tmp = document.getElementById(item.id).getAttribute("value");
    var num = parseInt(tmp);
    console.log(num);
    if (num > 0) {
      document.getElementById(item.id).setAttribute("value", (num - 1) + "");
    }

  }

  add(item) {
    let tmp = document.getElementById(item.id).getAttribute("value");
    let num = parseInt(tmp);
    console.log(num);
    if (num >= 0) {
      document.getElementById(item.id).setAttribute("value", (num + 1) + "");
    }
  }

}
