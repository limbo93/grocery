import { BaseDomain } from '../../base.domain';

export class Employee extends BaseDomain {
    id: number;
    name: string;
    designation?: string;
    address?: string;
    phoneNumber?: string;
    email?: string;
    gender?: string;
}