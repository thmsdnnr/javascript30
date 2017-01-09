Day THIRTY of JS30
##~Whack-A-Mole~ Pet A Cat
====

##TIL: If you don't throttle your requestAnimationFrame calls, four cats randomly appearing and disappering at you from the ether at 60fps is a truly horrifying sight.

### Can add rotating hearts or rotating cat faces or other "REWARDS" for playing the game longer. Heh.

STRATEGY:

->Cats pop up randomly and stay on the screen for a short amount of time, say 100ms.
->If you click on a cat before it disappears, the cat purrs (add a one-time event listener) and your score increases by one haert.
->If you miss a cat, that's okay. Your score doesn't decrease.

-> Use requestAnimationFrame to make it smooth.
-> Maybe use HTML5 canvas. Who KNOWS!

-> You win when you leave the page.

* Pet the cats as they pop up to maximize your score

* There are no losers only winners!

##Features/add-ons

* Add some levels
* Add some border Detection
* Add a high score
* Some modals or something.

* Can add the option to save and delete common timers and store them in local storage as a JSON stringified data element.
* Can improve the styling!
* Can add a scoreboard and store the data somewhere, like a top-whatever list if you put it on heroku hahahaha
* Or maybe there's some client-side dB free storage like mongo
* Level-up -> increase speed, numbers of cats, awards/prizes, etc. etc., sound effects.


 <//spread value could be a multiplier such that the value is still acceptable, so e.g.,>
 <//spread from window.innerWidth-SPREAD and window.innerHeight-SPREAD spreading from>
