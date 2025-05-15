import { Component, ViewChild } from '@angular/core';
import { UserCardComponent } from './user-card/user-card.component';
import { InfoBoxComponent } from './info-box/info-box.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent,CommonModule,UserCardComponent,FormsModule, InfoBoxComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  @ViewChild('loginForm') loginFormComponent!: LoginComponent; 
  isLoggedIn = false;
   username = '';
    password = '';
  users = [
    { name: 'Yati', id: 1, town: 'agra', picture: 'assets/images/cat.webp' },
    { name: 'sarthak', id: 2, town: 'pratapgarh', picture: 'assets/images/dog.jpg' },
    { name: 'santoshi', id: 3, town: 'delhi', picture: 'assets/images/panda.jpg' }
  ];

  
  onLogin() {
    if (this.username && this.password) {
      this.isLoggedIn = true; // Set to true to show the user list
    } else {
      alert('Please enter valid credentials');
    }
  }

  onLoginSuccess() {
  this.isLoggedIn = true;
  this.username = this.loginFormComponent.userName; // Access the username from LoginComponent
  console.log('Login successful! Username:', this.username);
}

  updateSharedData(event: any) {
    console.log('Data received from InfoBox:', event);
  }

  focusOnEmail() {
    const emailInputValue = this.loginFormComponent.emailInputElement.nativeElement;
    console.log('Email input value:', emailInputValue);
    this.loginFormComponent.focusEmail(this.loginFormComponent.emailInputElement.nativeElement);
  }
}