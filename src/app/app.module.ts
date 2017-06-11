import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';
import {Loader} from '../components/loader/loader';
import {InitialPage} from '../pages/initial-page/initial'
import {LoginPage} from '../pages/login/login';
import {RegisterPage} from '../pages/Register/register';
import {ForgotPage} from '../pages/forgotpassword/forgot';
import { HomePage } from '../pages/home/home';
import {MapDirective} from '../components/map/map';
import {AngularFireModule} from 'angularfire2';
import {PickupComponent} from '../components/pickup/pickup';
import {ItemDetailsPage} from '../pages/item-details/item-details';

const firebaseConfig = {
  apiKey: 'AIzaSyDA-ls4lOKcdks1v1wMSZABzEDsTx5AZkQ',
  authDomain: 'authentication-4b637.firebaseapp.com',
  databaseURL: 'https://authentication-4b637.firebaseio.com',
  storageBucket: 'authentication-4b637.appspot.com',
  messagingSenderId: '112566065962'
};
@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ListPage,
    Loader,
    InitialPage,
    LoginPage,
    RegisterPage,
    ForgotPage,
    HomePage,
    MapDirective,
    PickupComponent,
    ItemDetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ListPage,
    Loader,
    InitialPage,
    ItemDetailsPage,
    LoginPage,
    RegisterPage,
    ForgotPage,
    HomePage,
    MapDirective,
    PickupComponent
   
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
