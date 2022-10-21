function forward_1 () {
    pins.servoSetPulse(AnalogPin.P8, 1300)
    control.waitMicros(20000)
}
function back () {
    pins.servoSetPulse(AnalogPin.P8, 1700)
    pins.servoSetPulse(AnalogPin.P13, 1300)
    control.waitMicros(20000)
}
function stop () {
    pins.servoSetPulse(AnalogPin.P8, 0)
    pins.servoSetPulse(AnalogPin.P13, 0)
    control.waitMicros(20000)
    forward_1()
    back_2()
    basic.pause(4000)
    forward()
    count = 0
    basic.pause(100)
}
function full_stop () {
    pins.servoSetPulse(AnalogPin.P8, 0)
    pins.servoSetPulse(AnalogPin.P13, 0)
}
input.onButtonPressed(Button.A, function () {
    forward()
})
function forward_2 () {
    pins.servoSetPulse(AnalogPin.P13, 1700)
    control.waitMicros(20000)
}
function back_2 () {
    pins.servoSetPulse(AnalogPin.P13, 1300)
    control.waitMicros(20000)
}
input.onButtonPressed(Button.AB, function () {
    forward_1()
    back_2()
})
input.onButtonPressed(Button.B, function () {
    back()
})
function back_1 () {
    pins.servoSetPulse(AnalogPin.P8, 1700)
    control.waitMicros(20000)
}
function forward () {
    pins.servoSetPulse(AnalogPin.P8, 1300)
    pins.servoSetPulse(AnalogPin.P13, 1700)
    control.waitMicros(20000)
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    forward_2()
    back_1()
})
function sensor () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    control.waitMicros(1)
    pins.digitalWritePin(DigitalPin.P1, 1)
    control.waitMicros(1)
    pins.digitalWritePin(DigitalPin.P1, 0)
    distance = pins.pulseIn(DigitalPin.P2, PulseValue.High) + 58
}
let distance = 0
let count = 0
radio.setGroup(189)
count = 0
basic.showLeds(`
    # . # . .
    # # # # #
    . . # . #
    . . # . .
    . # . # .
    `)
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        sensor()
        if (distance < 10) {
            distance = 0
            count = 1
        }
    }
    if (count == 4) {
        stop()
    }
})
