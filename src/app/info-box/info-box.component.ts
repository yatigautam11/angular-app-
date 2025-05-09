import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
// Removed circular import of InfoBoxComponent

@Component({
  selector: 'app-info-box',
  standalone: true,
  imports:  [FormsModule],
  templateUrl: './info-box.component.html',
  styleUrl: './info-box.component.scss'
})
export class InfoBoxComponent {
@Input() title: string = 'trying the property binding concept in angluar';
@Output() dataChange: EventEmitter<string> =new EventEmitter<string>();

userInput: string = '';
onSendData(){
  this.dataChange.emit(this.userInput);
}
}


