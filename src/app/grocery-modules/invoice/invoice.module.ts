import { NgModule } from '@angular/core';
import { InvoiceComponent } from './invoice.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AmountInWordsService } from '../../services/amount-in-words/amount-in-words.service';

@NgModule({
    imports: [
        RouterModule.forChild(
            [
                { path: '', component: InvoiceComponent }
            ]
        ),
        MatCardModule,
        MatButtonModule,
        MatIconModule
    ],
    declarations: [
        InvoiceComponent
    ],
    providers: [
        AmountInWordsService
    ]
})
export class InvoiceModule { }