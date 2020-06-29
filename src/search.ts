interface SearchOptions {
    params: {
        data: any,
        exclude ? : any
    }
}

export class Search implements SearchOptions {
    constructor(params: any) {
        this.params = params;
        this.keys = [];
        this.filteredData = [];
        this.stopwords;

        // Set the dictionary
        if (this.params.exclude) {
            this.stopwords = new Set(this.params.exclude);
        }
    }
    data: any;
    keys: Array<string> ;
    filteredData: Array<object> ;
    params: any;
    stopwords: any;

    add(...addKey: any) {
        // Conditions for empty/null input
        if (!addKey) throw "Key not provided";

        // Adding keys
        addKey.forEach(key => {
            this.keys.push(key);
        })

    }

    search(searchKey: string) {
        // Conditions for empty/null
        if (!searchKey) throw "Key not provided";

        // console.log(this.data, this.keys);

        // Stopwords filtering function
        const filterStopwords = (word: string) => {
            if (this.stopwords.has(word)) {
                return true;
            }
            return false;
        }

          // Actual Search logic
          this.params.data.filter(item => {
            this.keys.some(key => {
                const filteredItem = item[key].toLowerCase();
                const filteredSearchKey = searchKey.toLowerCase();
                // Stopwords filtering

                if(filteredItem.includes(filteredSearchKey)){
                    if(!this.stopwords || filterStopwords(filteredSearchKey)){
                        this.filteredData.push(item);
                        return true;
                    }                    
                }
            })
        })

        return this.filteredData;

    }
}