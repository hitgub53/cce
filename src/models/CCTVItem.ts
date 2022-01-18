import { to_number } from 'svelte/internal';
import { v4 as uuidv4 } from 'uuid';
import { Camera } from './Camera';
import { Codec } from './../models/Codec';

export class CCTVItem {
    uuid: string;
    camrea: Camera;
    codec: Codec;
    fps: number;
    recHoursPerDay: number;
    recDays: number;
    quantity: number;
    terabytes: number;

    constructor() {
        this.uuid = uuidv4();
        this.camrea = new Camera(0, 0, 0);
        this.codec = new Codec("-", 0);
        this.fps = 24;
        this.recHoursPerDay = 24;
        this.recDays = 1;
        this.quantity = 1;
        this.terabytes = 0;
        console.info(`New CCTVItem added to the list\nUUID: ${this.uuid}`);
    }

    calculate() {
        try {
            let recordingSecs = (this.recHoursPerDay * this.recDays) * (60**2);
            let megabytes = this.camrea.megabytes * recordingSecs * this.fps * this.quantity;
            let terabytes = megabytes / (10**6);
            terabytes = terabytes * this.codec.compressionFactor;
            this.terabytes = to_number(terabytes.toFixed(3));
        } catch (error) {
            console.error(error);
        }
    }
}