## Step 1
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



```package
neopixel=github:microsoft/pxt-neopixel
```


<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
