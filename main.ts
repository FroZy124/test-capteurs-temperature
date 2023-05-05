basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
// basic.show_string(convert_to_text(input.light_level()))
basic.pause(500)
basic.forever(function () {
    basic.showNumber(input.temperature())
    // basic.show_string(convert_to_text(input.light_level()))
    basic.pause(500)
})
