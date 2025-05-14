import { Component } from '@angular/core';

@Component({
  selector: 'app-badge',
  standalone: true,
  template: `
    <div class="badge">
      <ng-content></ng-content> <!-- Projects content from the parent -->
    </div>
  `,
  styles: [`
    .badge {
      display: inline-block;
      padding: 8px 12px;
      font-size: 12px;
      font-weight: bold;
      color: white;
      background-color: #007bff;
      border-radius: 12px;
      text-align: center;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
  `]
})
export class BadgeComponent {}