export class BaseDomain {
    createdAt: string;
    updatedAt: string;

    constructor() {
        this.createdAt = new Date().toDateString();
    }
}