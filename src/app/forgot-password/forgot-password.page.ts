import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  constructor(public alertController: AlertController) { }


   async presentAlert(){
     const alert= await this.alertController.create({
      header: 'Gönderildi!',
      subHeader: '(Yeni şifre isteği)',
      message: 'Lütfen girmiş olduğunuz adrese gelen <strong>linke</strong> tıklayınız.<br><br> Giriş sayfasına yönlendiriliyorsunuz.',
      buttons: ['Tamam']
     });

       await alert.present();
       let result = await alert.onDidDismiss();
       console.log(result);


   }






  ngOnInit() {
  }

}
