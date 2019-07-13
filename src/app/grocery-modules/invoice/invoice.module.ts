import { NgModule } from '@angular/core';
import { InvoiceComponent } from './invoice.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AmountInWordsService } from '../../services/amount-in-words/amount-in-words.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { ProductService } from '../../services/product/product.service';

@NgModule({
    imports: [
        RouterModule.forChild(
            [
                { path: '', component: InvoiceComponent }
            ]
        ),
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        CommonModule,
        FormsModule,
    ],
    declarations: [
        InvoiceComponent
    ],
    providers: [
        AmountInWordsService,
        ProductService
    ]
})
export class InvoiceModule { }