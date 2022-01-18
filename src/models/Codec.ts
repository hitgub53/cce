export class Codec {
    codecName: string;
    compressionFactor: number;

    constructor(codecName: string, compressionFactor: number) {
        this.codecName = codecName,
        this.compressionFactor = compressionFactor; 
    }
}