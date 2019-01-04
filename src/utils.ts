import {Toast, ToastController} from "ionic-angular";

export function toast(
    toastController: ToastController,
    message: string
): Toast {
    const toast = toastController.create({
        message: message,
        duration: 3000,
        position: 'top'
    });

    toast.present();

    return toast;
}

export function getImageDataFromUrl(url): Promise<ImageData> {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.src = url;

        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        image.onload = () => {
            try {
                canvas.width = image.width;
                canvas.height = image.height;
                context.drawImage(image, 0, 0);
            } catch (e) {
                reject(e);
            }

            const data = context.getImageData(0, 0, canvas.width, canvas.height);

            return resolve(data);
        };

        image.onerror = (error: ErrorEvent) => {
            return reject(error);
        };
    });
}