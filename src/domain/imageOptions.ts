export class ImageOptions {
    readonly Image: string;

    readonly Loading: boolean;

    constructor(image: string, loading: boolean) {
        this.Image = image;
        this.Loading = loading;
    }
}