import { Component } from '@angular/core';

@Component({
  selector: 'app-image',
  imports: [],
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent {
images = [
    { src: '/dog.jpg', alt: 'Angular Logo', title: 'Angular' },
    { src: 'assets/images/typescript-logo.png', alt: 'TypeScript Logo', title: 'TypeScript' },
    { src: 'assets/images/javascript-logo.png', alt: 'JavaScript Logo', title: 'JavaScript' }
]
}
