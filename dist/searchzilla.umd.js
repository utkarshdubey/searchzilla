!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).searchzilla={})}(this,function(e){e.Search=function(){function e(e){this.params=e,this.keys=[],this.filteredData=[],this.params.exclude&&(this.stopwords=new Set(this.params.exclude))}var t=e.prototype;return t.add=function(){var e=this,t=[].slice.call(arguments);if(!t)throw"Key not provided";t.forEach(function(t){e.keys.push(t)})},t.search=function(e){var t=this;if(!e)throw"Key not provided";return this.params.data.filter(function(o){t.keys.some(function(s){var i=o[s].toLowerCase(),r=e.toLowerCase();if(i.includes(r)&&(!t.stopwords||t.stopwords.has(r)))return t.filteredData.push(o),!0})}),this.filteredData},e}()});
//# sourceMappingURL=searchzilla.umd.js.map
