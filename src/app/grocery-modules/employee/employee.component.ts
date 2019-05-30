import { Component, OnInit } from '@angular/core';
import { Employee } from '../../services/employee/domain/employee.domain';
import { BaseComponent } from '../../shared/components/base.component';
import { EmployeeService } from '../../services/employee/employee.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeFormDialogComponent } from './form-dialog/employee.form.dialog';
import { NotificationService } from '../../core/notification/notification.service';
import { ConfirmationDialogComponent } from '../../shared/components/confirmation-dialog/confirmation.dialog.component';

@Component({
  selector: 'employee',
  templateUrl: './employee.component.html'
})
export class EmployeeComponent extends BaseComponent implements OnInit {

  employees: MatTableDataSource<{}>;
  displayedColumns: string[] = ['name', 'email', 'phoneNumber', 'gender', 'edit', 'delete'];


  constructor(private employeeService: EmployeeService,
    private notificationService: NotificationService,
    public dialog: MatDialog) {
    super();
  }

  ngOnInit(): void {
    this.fetchEmployees();
  }

  fetchEmployees() {
    this.employeeService.fetchEmployees().valueChanges().subscribe(response => {
      this.employees = new MatTableDataSource(response);
    });
  }

  applyFilter(filterValue: string) {
    this.employees.filter = filterValue.trim().toLowerCase();
  }

  editEmployee(employee: Employee) {
    this.dialog.open(EmployeeFormDialogComponent, { width: '600px', data: employee });
  }

  openDialog() {
    this.dialog.open(EmployeeFormDialogComponent, { width: '600px', data: new Employee() });
  }

  openConfirmationDialog(employee: Employee) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: "Are you sure that you want to delete this data?"
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteEmployee(employee);
      }
    });
  }

  deleteEmployee(employee: Employee) {
    this.employeeService.deleteEmployee({ employeeId: employee.id })
      .then(data => {
        this.notificationService.sendSuccessMsg('Employee delete');
      });
  }
}