import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-info-box',
  standalone: true,
  imports:  [FormsModule],
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.scss']
})
export class InfoBoxComponent {
@Input() title: string = 'trying the property binding concept in angluar';
@Output() dataChange: EventEmitter<string> = new EventEmitter<string>();

userInput: string = '';

onInputChange(){
  console.log('Data emitted from InfoBoxComponent:', this.userInput)
this.dataChange.emit(this.userInput)
}
onSendData() {
  console.log('Data Emitted from info-box component:', this.userInput);
  this.dataChange.emit(this.userInput);
}
}


