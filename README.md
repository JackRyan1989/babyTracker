Yeah, so my wife and I watched that 'Babies' documentary on Netflix, and the one episode that stood out was the one about sleep patterns.

And of course it did. I like to sleep, but circadian rhythms are super cool. 

I'm interested in using this app for several reasons:

1. So we can check whether we're doing an equal amount of work.
2. So we can plan our days around when he typically sleeps.
3. I want to see how long it takes for him to develop a regular sleep pattern.

Ultimately, when the data is collected, I want to perform some simple analyses using Python to check out when he entrained to a circadian rhythm. 

So yeah, we'll see where this goes.

Update 5/14/2020

The app is built. It's meant to be used on a mobile device, as that's probably how we'll be using it when we have Dezzy. 
The main interface is a sidebar that allows you to hide certain portions of the UI if you wanna, three buttons for recording when the babe moves, goes to sleep and wakes up. 
And then a series of graphs breaking down our shared effort, when the :baby: moves, when he goes to sleep, and a line plot of the duration of sleep. There's also a list reading out the time stamps for when he moves. This will allow us to get an idea of how much he's moving on a given day.
Oh, and there's a button for downloading the data, and for logging out.
Aaannnddd there's some styling that changes when it gets late, meaning a rudimentary 'night-mode'. 

The basic Python scripts for importing the .csv, cleaning the data and performing some very basic descriptive stats on the data. 

I still need to figure out the best way to determine when his sleep patterns become regular. Like, I need to define 'regular' and find an appropriate statistical formula to implement to determine this.

Anyway, here's some pics.

![Imgur](https://i.imgur.com/ciHPbgY.png?1)  ![Imgur](https://i.imgur.com/1n0iCSw.png?1) 
![Imgur](https://i.imgur.com/NIOMOfD.png?1)  ![Imgur](https://i.imgur.com/Z39gRhF.png)
