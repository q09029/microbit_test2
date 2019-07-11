// Add your code here
class LedBlinker {
    delay: number;

    constructor(delay: number) {
        this.delay = delay;
    }
    blink() {
        while (true) {
            basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
            basic.pause(this.delay)
            basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
            basic.pause(this.delay)
        }
    }

}
