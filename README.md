# 🔍 searchzilla

[![Netlify Status](https://api.netlify.com/api/v1/badges/9242979a-2756-4244-b7f3-97848697f5b7/deploy-status)](https://app.netlify.com/sites/searchzilla/deploys)
![Awesomeness Level](https://img.shields.io/badge/awesomeness-extreme-blue.svg)

<p align="center">
  <img src="./assets/banner.png" alt="AlertsJS Logo">
</p>

Searchzilla is a **simple, easy** way of implementing search on the client-side. You don't really have to read the description either, just start using it.

## 🍭 Usage
Simply download the files from the ``dist`` folder or install the npm version by doing ``npm install searchzilla`` or ``yarn add searchzilla``.

### Setting up
It's just a few lines of code and you can get your search up and running straightforward.

- To initialize the search instance:
 ```js
// Initialize the class

// You can pass your own data from fetch() requests as well.
const mySearch = new Search({data: [{id: 1, name: "Chuck norris", "description": "nobody knows me"}, {id: 2, name: "Billy Murphy", description: "people know me"}, {id: 3, name: "Audey Coda", description: "i dont wanna be known you stranger"}]);

// Call the init() method to initialize search
mySearch.init();
```
You can similarly add fields to look up through the ``.add()`` method.

```js
// Looks up for only the specified fields.
mySearch.add('name', 'description');
```

Now simply search using the ``search()`` method like this.
```js
// returns [{id: 3, name: "Audey Coda", description: "i dont wanna be known you stranger"}]
mySearch.search('Audey');
```
## Blacklisting
You can black list search results using ``exclude: ['some', 'words']`` in your search object like this:
```js
new Search({data: someData, exclude: ['more', 'words']})
```

This will exclude all those results containing specific *keywords* that are mentioned in the ``exclude`` array.
A better use-case would be to filter stopwords or profane words.

## Todo
- [ ] Add key filtering for objects and lists.
- [ ] Optimizations in the current loop, hashtables?
