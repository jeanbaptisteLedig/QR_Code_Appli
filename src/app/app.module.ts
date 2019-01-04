import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HistoryPage } from '../pages/history/history';
import { ReadQrCodePage } from '../pages/read-qr-code/read-qr-code';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { QrCodeProvider } from '../providers/qr-code/qr-code';
import { HistoryProvider } from '../providers/history/history';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing';
import { QRScanner } from '@ionic-native/qr-scanner';
import {Camera} from '@ionic-native/camera';
import {BarcodeScanner} from "@ionic-native/barcode-scanner";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HistoryPage,
    ReadQrCodePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HistoryPage,
    ReadQrCodePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QrCodeProvider,
    SocialSharing,
    HistoryProvider,
    QRScanner,
    Camera,
    BarcodeScanner
  ]
})
export class AppModule {}
