import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './shared/services/employee.service';
import { Employee } from './shared/models/Employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Web-Atrio demo app';

  employees: Employee[] = [];

  showEmployeeCreationInterface: boolean = false;

  constructor(private employeeService: EmployeeService) {}

  public ngOnInit(): void {
    
    this.employeeService.readAll().subscribe(response => {
      console.log(response)
      this.employees = response;
    })
  }

  public toggleEmployeeCreationInterface() {
    this.showEmployeeCreationInterface = !this.showEmployeeCreationInterface;
  }
}
