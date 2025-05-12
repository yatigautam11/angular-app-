import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InfoBoxComponent } from '../info-box/info-box.component';

@Component({
  selector: 'login-form',
  standalone: true,
  imports: [CommonModule, FormsModule, InfoBoxComponent],  // Only FormsModule needed for ngModel
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  userName: string = '';
  name: string = '';
  email: string = '';
  password: string = '';

isHighlighted: boolean =true;

  features:string[]=['Two-way data binding', 'Property binding', 'Event binding', 'ngModel', 'ngIf', 'ngFor'];
  
  @Input() transformedData: string='';
  @Input() requiredData!: string;
  @Input() aliasName!: string;
  @Input() sharedData: string = 'Shared data from AppComponent';
  onSubmit() {
    if (this.name && this.email && this.password) {
      alert('Form submitted successfully!');
      console.log({
        name: this.name,
        email: this.email,
        password: this.password
      });
    } else {
      alert('Please fill out the form correctly.');
    }
  }
}
