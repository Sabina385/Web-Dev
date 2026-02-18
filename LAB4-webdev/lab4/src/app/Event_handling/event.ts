import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <section (mouseover)="showSecretMessage()"> hello
      
    </section>
  {{ message }}
  `,
})
export class App {
  message = '';

  showSecretMessage() {
      this.message = 'Way to go 🚀';
  }
}