#Day 6 of JS30
##AJAX Type-Ahead for Input Field
===

Added highlighting function which I'm proud of that I realized afterwards I could have just used str.replace() for with my RegExp. Oh well, it's an exercise, right? I guess I wrote a string.replace() function, ish.

```function sliceHighlight(string,highlight,className="red") {
    let beginning = "";
    let middle = "";
    let end = "";

    const regex = new RegExp(highlight, 'i');
    var strIndex = string.search(regex);
    if (strIndex===-1) { return string; } // no match!

    //if the match was not at the beginning, recover those characters
    (strIndex!==0) ? beginning = string.slice(0,strIndex) : 0
    //slice to highlight
    middle = '<em class="'+className+'">'+string.slice(strIndex,strIndex+highlight.length)+'</em>';
    //if the match was not at the end, recover those characters
    ((strIndex+highlight.length)<string.length) ? end = string.slice(strIndex+highlight.length) : 0
    return beginning+middle+end;
  }```

In other words, the above sliceHighlight() function result could be obtained by simply saying:

```const regex = new RegExp(highlight, 'i');
string.replace(regex,'<em class="classname">'+this.value+'</em>');
```

* Way to scroll down through the lis to auto-select
* Way to display more "relevant" matches (more characters matched) or limit the number of matches displayed to a subset of matches that meet a certain threshold of helpfulness
* Could modularize match code by passing in flags to the match function to e.g., ignore or respect case, only display matches of X # of characters, only display Y# of matches total, etc.
