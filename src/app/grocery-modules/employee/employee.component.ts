import { Component, OnInit } from '@angular/core';
import { Employee } from '../../services/employee/domain/employee.domain';
import { BaseComponent } from '../../shared/components/base.component';
import { EmployeeService } from '../../services/employee/employee.service';
import { NotificationService } from '../../core/notification/notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent extends BaseComponent implements OnInit {

  employees: MatTableDataSource<{}>;
  displayedColumns: string[] = ['name', 'email', 'phoneNumber', 'gender', 'edit'];


  constructor(private employeeService: EmployeeService,
    private router: Router, private route: ActivatedRoute) {
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
    this.router.navigate(['form', employee.id], { relativeTo: this.route });
  }

}