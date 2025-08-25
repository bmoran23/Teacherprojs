## Step 1 - Create and Initilize Variables
### Create all the needed variables:

CurrentLightLevel -- The light level current detected by the microbit.  
LastLightLevel -- The previous light level.  
Difference -- LastLightLevel - CurrentLightLevel.  
Direction -- which direction to move, right or left.  
Heading -- the settign for the servo motor direction.     


```blocks
let Direction = 1
let LastLightLevel = 0
let Heading = 90
```


## Step 2 - Move the Sunflower all the way right and left then return to center.
These blocks are added to the on Start code.  Seeing the range of motion helps you place the sunflower in the best position.

```blocks
let Direction = 1
let LastLightLevel = 0
let Heading = 90
pins.servoWritePin(AnalogPin.P1, 0)
basic.pause(1000)
pins.servoWritePin(AnalogPin.P1, 180)
basic.pause(1000)
pins.servoWritePin(AnalogPin.P1, 180)
basic.pause(1000)
```

## Step 3 Add the code to move the sunflower
This code ...

```blocks
basic.forever(function () {
   CurrentLightLevel = input.lightLevel()
   Difference = LastLightLevel - CurrentLightLevel
   if (difference >= 0) {
       Direction = Direction * -1
   }
   Heading += Direction * 10
   pins.servoWritePin(AnalogPin.P1, Heading)
   let LastLightLevel = CurrentLightLevel
   basic.pause(500)
})
```

<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
