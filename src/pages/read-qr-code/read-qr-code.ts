import {Component} from '@angular/core';
import {IonicPage, ToastController} from 'ionic-angular';
import {Camera} from "@ionic-native/camera";
import {BarcodeScanner} from "@ionic-native/barcode-scanner";
import {toast} from "../../utils";
import {QrCodeProvider} from "../../providers/qr-code/qr-code";

/**
 * Generated class for the ReadQrCodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-read-qr-code',
  templateUrl: 'read-qr-code.html',
})
export class ReadQrCodePage {

    text:string;

    constructor(
        private camera: Camera,
        private barcodeScanner: BarcodeScanner,
        private toastController: ToastController) { }

    async fromCamera() {
        const qrcode = await this.barcodeScanner.scan();
        this.text = qrcode.text;
    }


    async fromImage() {
        try {
            const base64 = await this.camera.getPicture({
                quality: 100,
                sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE
            });

            this.text = await QrCodeProvider.decode('data:image/jpeg;base64,' + base64);
        } catch (e) {
            this.text = null;
            toast(this.toastController, "Une erreur est survenue: " + e);
        }
    }
}
