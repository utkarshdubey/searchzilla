interface SearchOptions{
    params: {
        data: any,
        exclude ? : any
    }
}

export class Search implements SearchOptions{
    constructor(params: any){
        this.params = params;
        this.keys = [];
        this.filteredData = [];
        this.initialized = false;
        this.stopwords;
    }
    data: any;
    keys: Array<string>;
    filteredData: Array<object>;
    initialized: boolean;
    params: any;
    stopwords: any;
    

    init(...params){
        // Conditions for empty/null input
        if(!this.params.data) throw "Undefined or null data provided.";
        if(!Object.keys(this.params.data).length) throw "Can't search inside an empty variable";

        // Set initialized variable to be true
        this.initialized = true;

        // Setting stopwords
        if(this.params.exclude){
            this.stopwords = new Set(this.params.exclude);
        }
        // console.log(this.stopwords);

        // **DEBUG**
        // console.log(searchData);
    }

    add(...addKey: any){
        // Conditions for empty/null input
        if(!addKey) throw "Key not provided";

        // Condition for uninitialized
        if(!this.initialized) throw "Class not initialized."

        // Adding keys
        addKey.forEach(key => {
            this.keys.push(key);
        })
       
    }

    search(searchKey: string){
        // Conditions for empty/null
        if(!searchKey) throw "Key not provided";

        // Condition for uninitialized
        if(!this.initialized) throw "Class not initialized."
        // console.log(this.data, this.keys);

        // Stopwords filtering function
        const filterStopwords = (word: string) => {
            if(this.stopwords.has(word)){
                return true;
            }
            return false;
        }

        // Actual Search logic
        this.params.data.filter(item => {
            this.keys.forEach(key => {
                const filteredItem = item[key].toLowerCase();
                const filteredSearchKey = searchKey.toLowerCase();
                // Stopwords filtering

                if(filteredItem.includes(filteredSearchKey)){
                    if(!this.stopwords){
                        this.filteredData.push(item);
                    }
                    if(this.stopwords && !filterStopwords(filteredItem)){
                        this.filteredData.push(item);
                    }
                }
            })
        })
        
        return this.filteredData;

    }
}