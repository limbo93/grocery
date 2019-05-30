import { NgModule } from '@angular/core';
import { EmployeeComponent } from './employee.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../services/employee/employee.service';
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
import { EmployeeFormDialogComponent } from './form-dialog/employee.form.dialog';


@NgModule({
    imports: [
        RouterModule.forChild(
            [
                { path: '', component: EmployeeComponent }
            ]
        ),
        FormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatRadioModule,
        MatSelectModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        MatTableModule,
        MatDialogModule
    ],
    declarations: [
        EmployeeComponent,
        EmployeeFormDialogComponent
    ],
    entryComponents: [EmployeeFormDialogComponent],
    providers: [EmployeeService]
})
export class EmployeeModule { }