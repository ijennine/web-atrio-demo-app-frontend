import { Component, Input } from '@angular/core';
import { EmployeeService } from '../shared/services/employee.service';
import { Employee } from '../shared/models/Employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent {
  @Input() employee: Employee = {
    id: 0,
    firstName: '',
    lastName: '',
    birthDate: new Date(),
  };
  @Input() employeeCreation: boolean = false;
  
  employeeModification: boolean = false;

  constructor(private employeeService: EmployeeService) {}

  addEmployee() {
    this.employeeService.create(this.employee).subscribe();
  }

  toggleEmployeeModification() {
    this.employeeModification = !this.employeeModification;
  }

  modifyEmployee() {
    this.employeeService.update(this.employee.id, this.employee).subscribe();
  }

  deleteEmployee() {
    this.employeeService.delete(this.employee.id).subscribe();
  }

  cancelEdit() {
    this.employeeModification = false;
  }
}
