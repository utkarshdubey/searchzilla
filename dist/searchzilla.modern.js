class i{constructor(i){this.params=i,this.keys=[],this.filteredData=[],this.initialized=!1}init(...i){if(!this.params.data)throw"Undefined or null data provided.";if(!Object.keys(this.params.data).length)throw"Can't search inside an empty variable";this.initialized=!0,this.params.exclude&&(this.stopwords=new Set(this.params.exclude))}add(...i){if(!i)throw"Key not provided";if(!this.initialized)throw"Class not initialized.";i.forEach(i=>{this.keys.push(i)})}search(i){if(!i)throw"Key not provided";if(!this.initialized)throw"Class not initialized.";const t=i=>!!this.stopwords.has(i);return this.params.data.filter(s=>{this.keys.some(a=>{const e=s[a].toLowerCase(),r=i.toLowerCase();if(e.includes(r)&&(!this.stopwords||t(e)))return this.filteredData.push(s),!0})}),this.filteredData}}export{i as Search};
//# sourceMappingURL=searchzilla.modern.js.map
