!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).searchzilla={})}(this,function(e){e.Search=function(){function e(e){this.params=e,this.keys=[],this.filteredData=[],this.params.exclude&&(this.stopwords=new Set(this.params.exclude))}var t=e.prototype;return t.add=function(){var e=this,t=[].slice.call(arguments);if(!t)throw"Key not provided";t.forEach(function(t){e.keys.push(t)})},t.search=function(e){var t=this;if(!e)throw"Key not provided";var o=function(e){return!!t.stopwords.has(e)};return this.params.data.forEach(function(r){t.keys.some(function(s){Object.entries(r).forEach(function(e){return console.log(typeof e)}),Object.entries(r).forEach(function(i){if("object"==typeof i)i.forEach(function(n){if(n==s){var a=i[s].toLowerCase(),f=e.toLowerCase();if(a.includes(f)&&(!t.stopwords||o(a)))return t.filteredData.push(r),!0}});else{var n=r[s].toLowerCase(),a=e.toLowerCase();if(n.includes(a)&&(!t.stopwords||o(n)))return t.filteredData.push(r),!0}})})}),this.filteredData},e}()});
//# sourceMappingURL=searchzilla.umd.js.map
