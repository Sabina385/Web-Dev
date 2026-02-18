import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['prop.css'],
  template: ` <div [contentEditable]="isEditable"></div> `,
})
export class App {
   isEditable = true;
}