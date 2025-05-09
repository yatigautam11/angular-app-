import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InfoBoxComponent } from './info-box/info-box.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, InfoBoxComponent, RouterModule, LoginComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  sharedData: string = 'Shared data from AppComponent';
  updateSharedData(data: string) {
    this.sharedData = data;
  }
  title = 'Angular-training';
  onInfoBoxClose(data: string) {
    console.log('Data received from InfoBoxComponent:', data);
    alert('User Input:${data}');
  }
}
