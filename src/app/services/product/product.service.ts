import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Product } from './domain/product.domain';
import { BaseService, PathParameters } from '../base.service';

const FETCH_PRODUCTS = '/products';
const FETCH_PRODUCT = '/products/{productId}';
const CREATE_PRODUCT = '/products';
const UPDATE_PRODUCT = '/products/{productId}';
const DELETE_PRODUCT = '/products/{productId}';


@Injectable()
export class ProductService extends BaseService {

    constructor(private db: AngularFireDatabase) {
        super();
    }

    public fetchProducts() {
        return this.db.list(FETCH_PRODUCTS);
    }

    public fetchProduct(pathParams: PathParameters) {
        const url = this.create(FETCH_PRODUCT, pathParams);
        return this.db.list(url);
    }

    public createProduct(employee: Product) {
        const timestamp = this.timestamp;
        employee.id = timestamp;
        return this.db.object(CREATE_PRODUCT + '/' + timestamp).set(employee);
    }

    public updateProduct(employee: Product, pathParams: PathParameters) {
        employee.updatedAt = this.time;
        const url = this.create(UPDATE_PRODUCT, pathParams);
        return this.db.object(url).update(employee);
    }

    public deleteProduct(pathParams: PathParameters) {
        const url = this.create(DELETE_PRODUCT, pathParams);
        return this.db.object(url).remove();
    }
}