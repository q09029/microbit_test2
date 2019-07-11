//% weight=70 icon="\uf075" color=#555555 block="コメント"
namespace comment {
    //% blockId=show_strings block="コメント %v"
    export function noaction(text: string): void {
    }
}

//% weight=70 icon="\uf075" color=#555555 block="LED点滅"
namespace led_blinker {
    //% blockId=ledblinker block="LED点滅 %v"
    export function ledblinker(delay: number): void {
        let ledblinker = new LedBlinker(delay);
        ledblinker.blink();
    }
}