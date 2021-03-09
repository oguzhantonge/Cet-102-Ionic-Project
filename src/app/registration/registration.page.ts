import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  constructor(public alertController: AlertController) { }

  async presentAlert(){
    const alert= await this.alertController.create({
     header: 'Başarılı!',
     subHeader: '(Kayıt olma isteği)',
     message: 'Başarılı bir şekilde kayıt olundu.<br><br> Giriş sayfasına yönlendiriliyorsunuz.',
     buttons: ['Tamam']
    });

      await alert.present();
      let result = await alert.onDidDismiss();
      console.log(result);


  }






 ngOnInit() {
 }

}