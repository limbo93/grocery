import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { mainRoutes } from './main.routes';
import { MainComponent } from './main.component';
import { NavbarComponent } from '../navbar/navbar.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';



@NgModule({
    imports: [
        RouterModule.forChild(mainRoutes),
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatCardModule,
        MatMenuModule
    ],
    declarations: [
        MainComponent,
        NavbarComponent
    ],
    providers: []
})
export class MainModule { }