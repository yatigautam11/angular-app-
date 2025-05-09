import { Component, Input } from '@angular/core';
import { FormsModule,FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InfoBoxComponent } from '../info-box/info-box.component';  
import { share } from 'rxjs';

@Component({
  selector: 'login-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InfoBoxComponent,FormsModule],  
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @Input() sharedData: string = '';
  ngOnChanges(){
    console.log('Shared data in LoginComponent:', this.sharedData);
  }
  userName:string='';
  @Input('aliasName') aliasSharedData: string = '';
  @Input() requiredData!: string;

  private _transformedData:string='';
  @Input()
  set transformedData(value:string){
    this._transformedData=value.toUpperCase();
  }
  get transformedData():string{
    return this._transformedData;
  }
  loginForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });


  onSubmit() {
    if (this.loginForm.valid) {
      alert('Form submitted successfully!');
      console.log(this.loginForm.value);
    } else {
      alert('Please fill out the form correctly.');
    }
  }
}
