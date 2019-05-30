import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from '../../../services/product/domain/product.domain';
import { ProductService } from '../../../services/product/product.service';
import { NotificationService } from '../../../core/notification/notification.service';

@Component({
    selector: 'product-form-dialog',
    templateUrl: './product.form.dialog.html',
    styleUrls: ['./product.form.dialog.scss']
})
export class ProductFormDialogComponent {

    title: string = '';

    constructor(
        public dialogRef: MatDialogRef<ProductFormDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Product,
        private productService: ProductService,
        private notificationService: NotificationService) {
        this.title = this.data.id ? 'Update' : 'Create';
    }

    save() {
        this.dialogRef.close();
        this.data.id ? this.updateProduct() : this.createProduct();
    }

    close(): void {
        this.dialogRef.close();
    }

    createProduct() {
        this.dialogRef.close();
        this.productService.createProduct(this.data)
            .then(data => {
                this.notificationService.sendSuccessMsg('Product create');
            });
    }

    updateProduct() {
        this.productService.updateProduct(this.data, { productId: this.data.id })
            .then(data => {
                this.notificationService.sendSuccessMsg('Product update');
            });
    }

}