interface SearchOptions {
    params: {
        data: any;
        exclude?: any;
    };
}
export declare class Search implements SearchOptions {
    constructor(params: any);
    data: any;
    keys: Array<string>;
    filteredData: Array<object>;
    params: any;
    stopwords: any;
    add(...addKey: any): void;
    search(searchKey: string): object[];
}
export {};
