let hands: Image[] = []
let dir = 0
let idir = 0
function showCompass () {
    hands = [
    images.createImage(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . . . .
        `),
    images.createImage(`
        . # . . .
        . # . . .
        . . # . .
        . . . . .
        . . . . .
        `),
    images.createImage(`
        . . . . .
        # # . . .
        . . # . .
        . . . . .
        . . . . .
        `),
    images.createImage(`
        . . . . .
        . . . . .
        # # # . .
        . . . . .
        . . . . .
        `),
    images.createImage(`
        . . . . .
        . . . . .
        . . # . .
        # # . . .
        . . . . .
        `),
    images.createImage(`
        . . . . .
        . . . . .
        . . # . .
        . # . . .
        . # . . .
        `),
    images.createImage(`
        . . . . .
        . . . . .
        . . # . .
        . . # . .
        . . # . .
        `),
    images.createImage(`
        . . . . .
        . . . . .
        . . # . .
        . . . # .
        . . . # .
        `),
    images.createImage(`
        . . . . .
        . . . . .
        . . # . .
        . . . # #
        . . . . .
        `),
    images.createImage(`
        . . . . .
        . . . . .
        . . # # #
        . . . . .
        . . . . .
        `),
    images.createImage(`
        . . . . .
        . . . # #
        . . # . .
        . . . . .
        . . . . .
        `),
    images.createImage(`
        . . . # .
        . . . # .
        . . # . .
        . . . . .
        . . . . .
        `)
    ]
    while (true) {
        dir = input.compassHeading() / 30
        idir = Math.floor(dir)
        hands[idir].showImage(0)
        if (input.buttonIsPressed(Button.B)) {
            break;
        }
    }
    basic.showNumber(input.compassHeading())
}
