import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { ProductComponent } from './product.component';
import { ProductFormDialogComponent } from './form-dialog/product.form.dialog';
import { ProductService } from '../../services/product/product.service';


@NgModule({
    imports: [
        RouterModule.forChild(
            [
                { path: '', component: ProductComponent }
            ]
        ),
        FormsModule,
        CommonModule,
        MatCardModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatRadioModule,
        MatSelectModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        MatTableModule,
        MatDialogModule,
    ],
    declarations: [
        ProductComponent,
        ProductFormDialogComponent
    ],
    entryComponents: [ProductFormDialogComponent],
    providers: [ProductService]
})
export class ProductModule { }