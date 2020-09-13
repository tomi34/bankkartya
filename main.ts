input.onPinPressed(TouchPin.P2, function () {
    while (!(input.pinIsPressed(TouchPin.P0))) {
        if (input.buttonIsPressed(Button.A)) {
            basic.pause(100)
            if (input.buttonIsPressed(Button.A)) {
                O2 += 10
            } else {
                O2 += 1
            }
            basic.showNumber(O2)
        }
        if (input.buttonIsPressed(Button.B)) {
            basic.pause(100)
            if (input.buttonIsPressed(Button.B)) {
                O2 += -10
            } else {
                O2 += -1
            }
            basic.showNumber(O2)
        }
    }
    O3 += O2
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(O3)
    basic.pause(100)
    basic.clearScreen()
})
function O () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # #
        . . . . #
        . . . . .
        `)
    basic.showLeds(`
        . . . . #
        . . . # #
        . . # # #
        . . . # #
        . . . . #
        `)
    basic.showLeds(`
        . . . # .
        . . # # #
        . # # # #
        . . # # #
        . . . # .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . # . . .
        # # # . .
        # # # # .
        # # # . .
        . # . . .
        `)
    basic.showLeds(`
        # . . . .
        # # . . .
        # # # . .
        # # . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        # . . . .
        # # . . .
        # . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showString("A")
    basic.pause(500)
    basic.clearScreen()
}
let O3 = 0
let O2 = 0
let led2 = true
while (!(input.buttonIsPressed(Button.A))) {
    basic.showNumber(52)
    O()
}
basic.forever(function () {
    if (input.buttonIsPressed(Button.B) && !(input.buttonIsPressed(Button.A))) {
        basic.pause(5000)
        if (input.buttonIsPressed(Button.B) && !(input.buttonIsPressed(Button.A))) {
            led.enable(true)
            basic.showLeds(`
                . . . . .
                . . . . .
                # # . . .
                . . . . .
                . . . . .
                `)
            basic.pause(100)
            if (input.buttonIsPressed(Button.B)) {
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    # # # . .
                    . . . . .
                    . . . . .
                    `)
            }
            basic.pause(100)
            if (input.buttonIsPressed(Button.B)) {
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    # # # # #
                    . . . . .
                    . . . . .
                    `)
            }
            basic.pause(100)
            if (input.buttonIsPressed(Button.B)) {
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    # # # # #
                    . . . . .
                    . . . . .
                    `)
            }
            basic.pause(100)
            if (input.buttonIsPressed(Button.B)) {
                basic.showLeds(`
                    . . # # .
                    . # . . .
                    . # . . .
                    . # . . .
                    . . # # .
                    `)
                basic.pause(100)
                led2 = !(led2)
                led.enable(led2)
                basic.showLeds(`
                    # . # . #
                    . # # # .
                    # # . # #
                    . # # # .
                    # . # . #
                    `)
            }
        }
        basic.pause(100)
        basic.clearScreen()
        basic.pause(100)
    }
})
