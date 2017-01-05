#Day Seventeen of JS30
##Sort Without Articles
====

STRATEGY:

Create a function that accepts an array and articles to excluse `function sortWithoutArticles(arr, articles)`. The function returns a nexted array. Example element: `["Motley Crew","The Motley Crew"]`. We can then perform an array.sort() on the first element of the array to sort each nested element. This will sort the band names while ignoring the articles list we passed in. Then, to display the original band names with articles, simply iterate through the sorted array and display the element at index zero.

* Sort the list of bands alphabetically ignoring "A", "An", and "The", because those are ARTICLES.

* Display the list of bands on the page.

* Minimalist style
