import { BaseDomain } from '../../base.domain';

export class Product extends BaseDomain {
    id: number;
    name: string;
    description: string;
    buyingPrice: number;
    sellingPrice: number;
    quantity: number;
}