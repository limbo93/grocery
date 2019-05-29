import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Employee } from './domain/employee.domain';
import { BaseService, PathParameters } from '../base.service';

const FETCH_EMPLOYEES = '/employees';
const FETCH_EMPLOYEE = '/employees/{employeeId}';
const CREATE_EMPLOYEE = '/employees';
const UPDATE_EMPLOYEE = '/employees/{employeeId}';
const DELETE_EMPLOYEE = '/employees/{employeeId}';


@Injectable()
export class EmployeeService extends BaseService {

    constructor(private db: AngularFireDatabase) {
        super();
    }

    public fetchEmployees() {
        return this.db.list(FETCH_EMPLOYEES);
    }

    public fetchEmployee(pathParams: PathParameters) {
        const url = this.create(FETCH_EMPLOYEE, pathParams);
        return this.db.list(url);
    }

    public createEmployee(employee: Employee) {
        const timestamp = this.timestamp;
        employee.id = timestamp;
        return this.db.object(CREATE_EMPLOYEE + '/' + timestamp).set(employee);
    }

    public updateEmployee(employee: Employee, pathParams: PathParameters) {
        const url = this.create(UPDATE_EMPLOYEE, pathParams);
        return this.db.object(url).update(employee);
    }

    public deleteEmployee(pathParams: PathParameters) {
        const url = this.create(DELETE_EMPLOYEE, pathParams);
        return this.db.object(url).remove();
    }
}