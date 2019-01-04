import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProdutoDetalhePage } from '../pages/produto-detalhe/produto-detalhe';
import { MenuPage } from '../pages/menu/menu';
import { ProdutosPage } from '../pages/produtos/produtos';
import { LoginPage } from '../pages/login/login';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { CarrinhoPage } from '../pages/carrinho/carrinho';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from '@angular/fire';
import { FirebaseConfig } from '../conf/firebase.config';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    ProdutoDetalhePage,
    LoginPage,
    ProdutosPage,
    CadastroPage,
    CarrinhoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FirebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    ProdutoDetalhePage,
    LoginPage,
    ProdutosPage,
    CadastroPage,
    CarrinhoPage 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireAuth,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
