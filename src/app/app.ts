import { Component, signal } from '@angular/core';
import { EmployeeComponent } from './employee/employee';
import { ReactiveForm } from './reactive-form/reactive-form';


@Component({
  selector: 'app-root',
  imports: [ReactiveForm, EmployeeComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('DemoApp');
}
