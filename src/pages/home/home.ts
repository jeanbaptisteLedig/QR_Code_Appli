import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { QrCodeProvider } from '../../providers/qr-code/qr-code';
import { HistoryProvider } from '../../providers/history/history';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
      public navCtrl: NavController,
      public qrcode: QrCodeProvider,
      public history: HistoryProvider,
      public socialSharing: SocialSharing) {

  }

    textInput: string;
    generated: '';

    displayQrCode() {
        return this.generated !== '';
    }

    process(text) {
        this.textInput = text;
        this.generated = this.qrcode.generate(text);
        this.history.addQRCode(text);
    }

    share(image) {
        this.socialSharing.share('This is my QR Code', 'Share my QR Code', image);
    }
}
