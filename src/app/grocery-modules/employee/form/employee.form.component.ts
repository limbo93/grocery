import { Component } from '@angular/core';
import { BaseComponent } from '../../../shared/components/base.component';
import { Employee } from '../../../services/employee/domain/employee.domain';
import { EmployeeService } from '../../../services/employee/employee.service';
import { NotificationService } from '../../../core/notification/notification.service';

@Component({
  selector: 'employee-form',
  templateUrl: './employee.form.component.html',
  styleUrls: ['./employee.form.component.scss']
})
export class EmployeeFormComponent extends BaseComponent {

  employee: Employee = new Employee();
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService,
    private notificationService: NotificationService) {
    super();
  }

  createEmployee() {
    this.employeeService.createEmployee(this.employee)
      .then(data => {
        this.notificationService.sendSuccessMsg('Employee create');
      });
  }

}