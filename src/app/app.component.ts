import { Component } from '@angular/core';
import { UserCardComponent } from './user-card/user-card.component';
import { InfoBoxComponent } from './info-box/info-box.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,UserCardComponent,FormsModule, InfoBoxComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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

  updateSharedData(event: any) {
    console.log('Data received from InfoBox:', event);
  }
}