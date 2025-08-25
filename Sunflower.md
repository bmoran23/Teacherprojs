## Step 1 - Create and Initilize Variables
Create all the needed variables:

CurrentLightLevel -- The light level current detected by the microbit
LastLightLevel -- The previous light level. 
difference -- LastLightLevel - CurrentLightLevel
Direction -- which direction to move, right or left
Heading -- the settign for the servo motor direction


```blocks
let Direction = 1
let LastLightLevel = 0
let Heading = 90
```

<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
