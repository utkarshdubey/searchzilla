export declare class Search {
    constructor(data: any);
    data: any;
    keys: Array<string>;
    filteredData: Array<object>;
    init(): void;
    add(...addKey: any): void;
    search(searchKey: string): object[];
}
