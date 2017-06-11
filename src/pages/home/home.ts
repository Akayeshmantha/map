import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import {MapDirective} from '../../components/map/map';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  entryComponents: [MapDirective],

})
export class HomePage {

  public isPickRequested: boolean;
  public pickUpSubscription: any;
  public timeTillArrival:number;
  public isRiderPickedUp: boolean;
  public destination: string;
  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {
  
    
  }

 
 

 

 
 
}
