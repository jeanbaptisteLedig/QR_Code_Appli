import {Injectable} from '@angular/core';
import QRCode from 'qrcode';
import jsQR from "jsqr";
import {getImageDataFromUrl} from "../../utils";

/*
  Generated class for the QrCodeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QrCodeProvider {

    generated: '';

    constructor() {
        console.log('Hello QrCodeProvider Provider');
    }

    generate(text: string) {
        const qrcode = QRCode;
        const self = this;
        qrcode.toDataURL(text, { errorCorrectionLevel: 'H' }, function (err, url) {
          self.generated = url;
        });
        return self.generated;
    }

    static async decode(url) {
        const imageData = await getImageDataFromUrl(url);
        const qrcode = jsQR(imageData.data, imageData.width, imageData.height);

        if (qrcode && qrcode.data !== undefined) {
            return qrcode.data;
        }

        throw new Error("Unable to decode the QR code");
    }
}
