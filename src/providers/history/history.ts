import { Injectable, EventEmitter } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the HistoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HistoryProvider {

    private qrcodes: Array<{ text:string, createdAt: Date }> = [];
    public change: EventEmitter<any[]> = new EventEmitter();
    static HISTORY_STORAGE_KEY: string = 'coucou';
    constructor(private storage: Storage) {
        console.log('Hello HistoryProvider Provider');
        this.init()
    }

    addQRCode(text: string) {
        this.qrcodes.push({
            text,
            createdAt: new Date()
        });
        this.save();
        this.change.emit(this.qrcodes);
        /*this.qrcodes.set(new Date().toISOString(), qrcode);
        this.storage.set('user_qrcodes', this.qrcodes);
        this.change.emit(Array.from(this.qrcodes.values()));
        console.log(this.storage.get('user_qrcodes'));*/
    }
    save() {
        return this.storage.set(HistoryProvider.HISTORY_STORAGE_KEY, this.qrcodes);
    }

    private async init() {
        try {
            this.qrcodes = await this.storage.get(HistoryProvider.HISTORY_STORAGE_KEY) || [];
            this.change.emit(this.qrcodes);
        } catch (err) {
            console.log(err)
        }
    }

    public load() {
        this.change.emit(this.qrcodes);
    }
}
