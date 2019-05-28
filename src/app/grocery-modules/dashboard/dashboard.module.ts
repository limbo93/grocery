import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    imports: [
        RouterModule.forChild(
            [
                { path: '', component: DashboardComponent }
            ]
        ),
        MatCardModule
    ],
    declarations: [
        DashboardComponent
    ],
    exports: []
})
export class DashboardModule { }