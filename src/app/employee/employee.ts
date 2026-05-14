import { Component, OnInit, signal } from '@angular/core';
import { EmployeeService } from '../services/employee-service';
import { CommonModule } from '@angular/common';
import { EmployeeModel } from '../models/employee-model';

@Component({
  selector: 'app-employee',
  imports: [CommonModule],
  templateUrl: './employee.html',
  styleUrl: './employee.css',
})
export class EmployeeComponent implements OnInit {

  employees = signal<EmployeeModel[]>([]);

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe({
      next: (data) => {
        this.employees.set(data);
      },
      error: (err) => {
        console.error('ERROR', err);
      }
    });
  }
}