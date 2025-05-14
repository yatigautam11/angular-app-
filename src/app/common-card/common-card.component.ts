import { Component, Input } from '@angular/core';

@Component({
  selector: 'common-card',
  standalone: true,
  template: `
    <div class="card">
      <div class="card-content">
        <ng-content></ng-content> 
      </div>
    </div>
  `
})
export class CommonCardComponent {
  
}