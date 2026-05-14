import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
})
export class ReactiveForm {
  leaveForm!: FormGroup;

  leaveTypes: string[] = ['Sick Leave','Casual Leave','Earned Leave'];

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.leaveForm = this.fb.group({
      employeeName: ['', Validators.required],
      employeeId: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      leaveType: ['', Validators.required],
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
      reason: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.leaveForm.valid) {
      console.log('Form Submitted Successfully');
      console.log(this.leaveForm.value);
    } else {
      this.leaveForm.markAllAsTouched();

      console.log('Form is Invalid');
    }
  }

  get f() {
    return this.leaveForm.controls;
  }
}
