class t{constructor(t){this.data=t,this.keys=[],this.filteredData=[]}init(){if(!this.data)throw"Undefined or null data provided.";if(!Object.keys(this.data).length)throw"Can't search inside an empty variable"}add(...t){if(!t)throw"Key not provided";if(!t.length)throw"Can't add an empty key";t.forEach(t=>{this.keys.push(t)})}search(t){return this.data.filter(e=>{this.keys.forEach(a=>{const i=e[a].toLowerCase(),s=t.toLowerCase();i.includes(s)&&this.filteredData.push({filteredItem:i})})}),this.filteredData}}export{t as Search};
//# sourceMappingURL=searchzilla.modern.js.map