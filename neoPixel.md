## Example 1
This code ...2

```blocks
let strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
let range = strip.range(0, 10)
range.showColor(neopixel.colors(NeoPixelColors.Red))
for (let index = 0; index <= 15; index++) {
    strip.shift(1)
    strip.show()
    range = strip.range(0, index)
    range.showColor(neopixel.colors(NeoPixelColors.Blue))
    basic.pause(500)
}
```
```blocks
## Example 2
input.onButtonPressed(Button.A, function () {
    strip.shift(1)
    strip.show()
})

input.onButtonPressed(Button.B, function () {
    strip.rotate(1)
    strip.show()
})

let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 10, NeoPixelMode.RGB)
strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Orange))
strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Yellow))
strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Blue))
strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Indigo))
strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Violet))
strip.setPixelColor(7, neopixel.colors(NeoPixelColors.Purple))
strip.show()

```

```blocks
## Example 2
input.onButtonPressed(Button.A, function () {
    strip.shift(1)
    strip.show()
})

input.onButtonPressed(Button.B, function () {
    strip.rotate(1)
    strip.show()
})
```

## Example 1


## Example 1

```package
neopixel=github:microsoft/pxt-neopixel
```


<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
