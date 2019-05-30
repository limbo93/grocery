import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employee } from '../../../services/employee/domain/employee.domain';
import { EmployeeService } from '../../../services/employee/employee.service';
import { NotificationService } from '../../../core/notification/notification.service';

@Component({
    selector: 'employee-form-dialog',
    templateUrl: './employee.form.dialog.html',
    styleUrls: ['./employee.form.dialog.html']
})
export class EmployeeFormDialogComponent {

    title: string = '';

    constructor(
        public dialogRef: MatDialogRef<EmployeeFormDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Employee,
        private employeeService: EmployeeService,
        private notificationService: NotificationService) {
        this.title = this.data.id ? 'Update' : 'Create';
    }

    save() {
        this.dialogRef.close();
        this.data.id ? this.updateEmployee() : this.createEmployee();
    }

    close(): void {
        this.dialogRef.close();
    }

    createEmployee() {
        this.dialogRef.close();
        this.employeeService.createEmployee(this.data)
            .then(data => {
                this.notificationService.sendSuccessMsg('Employee create');
            });
    }

    updateEmployee() {
        this.employeeService.updateEmployee(this.data, { employeeId: this.data.id })
            .then(data => {
                this.notificationService.sendSuccessMsg('Employee update');
            });
    }

}