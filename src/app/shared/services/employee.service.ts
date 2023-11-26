import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../models/Employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private readonly employeesApiUrl = 'http://localhost:8080/api/employees';

  private readonly httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private readonly http: HttpClient) {}

  readAll(): Observable<any> {
    const options = {
      headers: this.httpHeaders,
    };

    return this.http.get(this.employeesApiUrl, options);
  }

  create(employee: Employee): Observable<any> {
    const options = {
      headers: this.httpHeaders,
      observe: 'body' as const,
    };

    return this.http.post<Employee>(this.employeesApiUrl, employee, options);
  }

  update(id: number, employee: Employee): Observable<any> {
    let url = this.employeesApiUrl.concat(`/${id}`);

    const options = {
      headers: this.httpHeaders,
      observe: 'body' as const,
    };

    return this.http.put<Employee>(url, employee, options);
  }

  delete(id: number): Observable<any> {
    let url = this.employeesApiUrl.concat(`/${id}`);

    const options = {
      headers: this.httpHeaders,
    };

    return this.http.delete<Employee>(url, options);
  }
}
