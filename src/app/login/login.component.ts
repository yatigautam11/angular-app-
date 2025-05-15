import { Component, ContentChild, ContentChildren, ElementRef, EventEmitter, Output, QueryList, Renderer2, ViewChild, } from '@angular/core';
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
  @Output() loginSuccess = new EventEmitter<void>(); // Event to notify parent component
  userName: string = '';
  password: string = '';
   name: string = '';     // <-- Add this line
  email: string = ''; 
  // @ViewChild('emailInput') emailInputElement!: ElementRef<any>
  // @ViewChild('emailInput') emailInputElement!: ElementRef<any>
  @ViewChild('focus') emailInputElement!: ElementRef<any>


  constructor(private renderer: Renderer2){}

  isHighlighted: boolean = true;
  features: string[] = ['Two-way data binding', 'Directives', 'Components'];

  onSubmit(form: NgForm) {
    if (form.valid) {
      alert('Form submitted successfully!');
      this.loginSuccess.emit(); 
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
    // console.log('Email input focused',this.emailInputElement);// emailInput);
    // console.log('Email input value',this.emailInput); //emailInput.value);
    emailInput.focus();
    if (this.emailInputElement) {
      console.log('Email input element:', this.emailInputElement.nativeElement);
      this.renderer.setStyle(this.emailInputElement.nativeElement, 'backgroundColor', 'yellow');
    }
  }
  emailInput(arg0: string, emailInput: any) {
    throw new Error('Method not implemented.');
  }
  @ContentChild('headerRef') headerElement!: ElementRef<any>;
@ContentChildren('projectedP') paragraphs!: QueryList<ElementRef>;

  ngAfterContentInit() {
    if (this.headerElement) {
      this.renderer.setStyle(this.headerElement.nativeElement, 'backgroundColor', 'lightblue');
    }
    this.paragraphs.forEach((p,idx) => {
      this.renderer.setStyle(p.nativeElement, 'color', 'green');
      console.log(`Projected paragraph ${idx + 1}:`, p.nativeElement.innerText);
    });
      console.log('Header content:', this.headerElement.nativeElement.innerText);
      this.renderer.setStyle(this.headerElement.nativeElement, 'backgroundColor', 'lightblue');
    }
  }
