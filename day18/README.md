#Day Eighteen of JS30
##Adding up times with REDUCE
====

STRATEGY:

1. Select all li elements -> grab dataset.time from each, put into array.
2. Reduce array on mm:ss by splitting on ":" and accumulating `(mm)*60+ss` for each element, returning a value in seconds.
3. Take value in seconds and print in HH:MM:SS with function.

I wrote a nice function to pretty-print the time from the time I grabbed in seconds that works for time intervals up to 365.25 days (.25 for leap years) in the future (then it starts adding to days > 365.25). This could of course be adapted for decades/centuries/millenia, but the absence of computers in many of these time periods of the past leads me to doubt the existence of use cases for such an implementation, at least in my limited scope.

```javascript
function timePrettyPrint(seconds, short=true) { //DDD:HH:MM:SS
  const days=String(seconds/(60*60*24)).split('.')[0];
  const hours=String((seconds%(60*60*24))/(60*60)).split('.')[0];
  const minutes=String(seconds%(60*60)/60).split('.')[0]; //remainder in seconds / 60 -> minutes
  const secs=String(seconds%60); //remainder when we divide by 60
  return (short) ? days+":"+hours+":"+minutes+":"+secs : days+" days, "+hours+" hours, "+minutes+" minutes, and "+secs+" seconds";
}
```

###Gotchas:
Make sure to cast to a Number before adding up in reduce, unless you want to get a string like this:

```javascript
030043120331804504730021360561804630025180141803130059180076602948057300493005230050540136605142058240402404536046420244201230023180344802230017180102404311404304704718014180591204324017360561800512006605960491803642010180441804424036180166010360101201418044300053600372039605624004`````

* THINGS

* AND OTHER THINGS.
