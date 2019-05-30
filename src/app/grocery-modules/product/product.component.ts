import { Component, OnInit } from '@angular/core';
import { Product } from '../../services/product/domain/product.domain';
import { BaseComponent } from '../../shared/components/base.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { NotificationService } from '../../core/notification/notification.service';
import { ConfirmationDialogComponent } from '../../shared/components/confirmation-dialog/confirmation.dialog.component';
import { ProductFormDialogComponent } from './form-dialog/product.form.dialog';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'product',
  templateUrl: './product.component.html'
})
export class ProductComponent extends BaseComponent implements OnInit {

  products: MatTableDataSource<{}>;
  displayedColumns: string[] = ['name', 'buyingPrice', 'sellingPrice', 'quantity', 'edit', 'delete'];


  constructor(private productService: ProductService,
    private notificationService: NotificationService,
    public dialog: MatDialog) {
    super();
  }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.subscribers.fetchProductsSub = this.productService.fetchProducts().valueChanges().subscribe(response => {
      this.products = new MatTableDataSource(response);
    });
  }

  applyFilter(filterValue: string) {
    this.products.filter = filterValue.trim().toLowerCase();
  }

  editProduct(product: Product) {
    this.dialog.open(ProductFormDialogComponent, { width: '500px', data: product });
  }

  openDialog() {
    this.dialog.open(ProductFormDialogComponent, { width: '500px', data: new Product() });
  }

  openConfirmationDialog(product: Product) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: "Are you sure that you want to delete this data?"
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteProduct(product);
      }
    });
  }

  deleteProduct(product: Product) {
    this.productService.deleteProduct({ productId: product.id })
      .then(data => {
        this.notificationService.sendSuccessMsg('Product delete');
      });
  }
}