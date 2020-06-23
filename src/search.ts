export class Search{
    constructor(data: any){
        this.data = data;
        this.keys = [];
        this.filteredData = [];
    }
    data: any;
    keys: Array<string>;
    filteredData: Array<object>;

    

    init(){
        // Conditions for empty/null input
        if(!this.data) throw "Undefined or null data provided.";
        if(!Object.keys(this.data).length) throw "Can't search inside an empty variable";

      
        // **DEBUG**
        // console.log(searchData);
    }

    add(...addKey: any){
        // Conditions for empty/null input
        if(!addKey) throw "Key not provided";
        if(!addKey.length) throw "Can't add an empty key";

        // Adding keys
        addKey.forEach(key => {
            this.keys.push(key);
        })
       
    }

    search(searchKey: string){
        console.log(this.data, this.keys);

        // Actual Search logic
        this.data.filter(item => {
            this.keys.forEach(key => {
                const filteredItem = item[key].toLowerCase();
                const filteredSearchKey = searchKey.toLowerCase();
                if(filteredItem.includes(filteredSearchKey)){
                    this.filteredData.push({filteredItem});
                }
            })
        })
        
        return this.filteredData;

    }
}