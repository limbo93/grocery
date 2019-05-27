import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { mainRoutes } from './main.routes';
import { MainComponent } from './main.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';


@NgModule({
    imports: [
        RouterModule.forChild(mainRoutes),
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatCardModule,
    ],
    declarations: [
        MainComponent
    ],
    providers: []
})
export class MainModule { }