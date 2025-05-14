import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'login-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @ViewChild('emailInput') emailInputElement!: ElementRef
  userName: string = '';
  name: string = '';
  email: string = '';
  password: string = '';
  isHighlighted: boolean = true;
  features: string[] = ['Two-way data binding', 'Directives', 'Components'];

  onSubmit(form: NgForm) {
    if (form.valid) {
      alert('Form submitted successfully!');
      console.log({
        userName: this.userName,
        name: this.name,
        email: this.email,
        password: this.password
      });
    } else {
      alert('Please fill out the form correctly.');
    }
  }

  resetForm(form: NgForm) {
    form.reset(); // Resets the form to its initial state
    console.log('Form has been reset');
  }

  focusEmail(emailInput: HTMLInputElement) {
    this.emailInputElement.nativeElement.focus();
    console.log('Email input focused');// emailInput);
    console.log('Email input value'); //emailInput.value);
    emailInput.focus();
  }
}