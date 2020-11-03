import { dataStore } from './../models/Product.js';
export class Product {
    constructor() {
        this.data = dataStore;
    }
    getProducts() {
        return this.data;
    }
}
