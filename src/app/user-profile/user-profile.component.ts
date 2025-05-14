import { Component } from '@angular/core';
import { CommonCardComponent } from '../common-card/common-card.component';

@Component({
  selector: 'user-profile',
  standalone: true,
  imports: [CommonCardComponent], // Import the CommonCardComponent
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {}