// TODO: Make this an service or helper
export class CapacityEstimation {
    // converts a bitrate(Bit/s) to Terabyte
    public bitrateToTerabyte(bitrate: number, hours: number): number {
        // bit/s to bytes/s
        let bytesPerSecond = bitrate / 8;
        // byte/s to bytes/h
        let bytesPerHour = bytesPerSecond * (60 * 60);
        // byte/h to bytes
        let capacityBytes = bytesPerHour * hours;
        // bytes to terrabytes
        let capacityTB = capacityBytes / (10 ** 12);
        // return capacity in TB (this comment is unnecessary)
        return capacityTB;
    }

}