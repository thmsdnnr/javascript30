#Day Twenty of JS30
##Speech Detection
====

# Pretty cool stuff you can do with speech detection!

I removed these lines

```javascript30
var grammar = '#JSGF V1.0; grammar colors; public <color> = ' + colorsWiki.join(' | ') + ' ;'
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar,1);
```

Since I'm not really using the color search functionality anymore. I had huge arrays of colors from Wikipedia though. I found surprisingly that the engine does just as well without supplying these arrays to help it out.

### Things to add:

* Image search and display in flexbox

* Better UI for re-searching, etc.

* But it looks pretty nice right now and is simple.
