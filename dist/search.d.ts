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
    initialized: boolean;
    params: any;
    stopwords: any;
    init(...params: any[]): void;
    add(...addKey: any): void;
    search(searchKey: string): object[];
}
export {};
