## Step 1
This code ...1

```blocks
basic.forever(function () {
   CurrentLightLevel = input.lightLevel()
   Difference = LastLightLevel - CurrentLightLevel
   if (Difference >= 0) {
       Direction = Direction * -1
   }
   Heading += Direction * 10
    pins.servoWritePin(AnalogPin.P1, Direction * 10)
    LastLightLevel = CurrentLightLevel
    basic.pause(500)
})
```

<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
