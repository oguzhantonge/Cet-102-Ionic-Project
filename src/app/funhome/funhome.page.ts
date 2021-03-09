import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-funhome',
  templateUrl: './funhome.page.html',
  styleUrls: ['./funhome.page.scss'],
})
export class FunhomePage implements OnInit {

  constructor(public alertController: AlertController) { }

  async presentAlert(){
    const alert= await this.alertController.create({
     header: 'Başarılı!',
     subHeader: '(Oyun ekleme)',
     message: 'Oyun başarılı bir şekilde eklendi.',
     buttons: ['Tamam']
    });

      await alert.present();
      let result = await alert.onDidDismiss();
      console.log(result);


  }






 ngOnInit() {
 }

}
