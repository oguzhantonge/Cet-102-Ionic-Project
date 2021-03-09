import { Component, OnInit } from '@angular/core';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import{DomSanitizer,SafeResourceUrl} from '@angular/platform-browser';
const { Camera } = Plugins;


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {


photo:SafeResourceUrl;

image:SafeResourceUrl;

  constructor(private sanitizer:DomSanitizer) { }


  async takephoto() {
const {Camera} = Plugins;

const result = await Camera.getPhoto({
quality: 75,
allowEditing: true,
source: CameraSource.Camera,
resultType: CameraResultType.Base64,

});
this.image = this.sanitizer.bypassSecurityTrustUrl(result && result.base64String,
);
   }
  
  async takePicture() {
    const image = await Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source:CameraSource.Camera
    });
    this.photo=this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
    
    
  }
  

  ngOnInit() {
  }

}
