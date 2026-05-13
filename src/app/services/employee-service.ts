import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeModel } from '../models/employee-model';


@Injectable({
  providedIn: 'root',
})
export class EmployeeService {

   private jsonUrl = 'data/employees.json';

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<EmployeeModel[]> {
    return this.http.get<EmployeeModel[]>(this.jsonUrl);
  }
}
