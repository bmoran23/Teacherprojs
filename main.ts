let difference = 0
let CurrentLightLevel = 0
let Direction2 = 1
let LastLightLevel = 0
let Heading = 90
let Item = 0
pins.servoWritePin(AnalogPin.P1, 0)
basic.pause(1000)
pins.servoWritePin(AnalogPin.P1, 180)
basic.pause(1000)
pins.servoWritePin(AnalogPin.P1, 180)
basic.pause(1000)
basic.forever(function () {
    CurrentLightLevel = input.lightLevel()
    difference = LastLightLevel - CurrentLightLevel
    if (difference >= 0) {
        Direction2 = Direction2 * -1
    }
    Heading += Direction2 * 10
    pins.servoWritePin(AnalogPin.P1, Heading)
    LastLightLevel = CurrentLightLevel
    basic.pause(500)
})
