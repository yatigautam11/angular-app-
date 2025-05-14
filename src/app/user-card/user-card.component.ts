import { Component, Input } from '@angular/core';

@Component({
  selector: 'user-card',
  standalone: true,
  template: `
    <div class="user-card">
      <img [src]="picture" [alt]="name" class="user-picture" />
      <div class="user-details">
        <h4>{{ name }}</h4>
        <p>ID: {{ id }}</p>
        <p>Town: {{ town }}</p>
      </div>
    </div>
  `,
    styleUrls: ['./user-card.component.scss'] 
  
})
export class UserCardComponent {
  @Input() name!: string;
  @Input() id!: number;
  @Input() town!: string;
  @Input() picture!: string;
}