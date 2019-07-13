import { BaseDomain } from '../../base.domain';

export class Invoice extends BaseDomain {
    id: number;
    productId: number;
    quantity: number;
    rate: number;
    per:string;
    discountRate: number;
    amount: number;
    sellerId: number;
}