import { Component } from '@angular/core';
import { InfoBoxComponent } from './info-box/info-box.component';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  imports: [InfoBoxComponent, LoginComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sharedData: string = 'Shared data from AppComponent';

  updateSharedData(data: string) {
    console.log('Data received in app component', data);
  this.sharedData = data;
  }
}
