export class Camera {
    pixelsVertical: number;
    pixelsHorizontal: number;
    pixelDepth: number;
    megabytes: number;

    constructor(pixelsVertical: number, pixelsHorizontal: number, pixelDepth: number, megabytes?: number) {
        this.pixelsVertical = pixelsVertical;
        this.pixelsHorizontal = pixelsHorizontal;
        this.pixelDepth = pixelDepth;
        if(megabytes) this.megabytes = megabytes;
        else this.calculateSizeInMB();
    
    }

    calculateSizeInMB() {
        // # Of Pixels * Bit Depth ÷ 8 ÷ 1024 ÷ 1024 = File Size in Megabytes (MB)Related articles
        this.megabytes = (this.pixelsVertical * this.pixelsHorizontal) * this.pixelDepth / 8 / 1024 / 1024;
    }
}