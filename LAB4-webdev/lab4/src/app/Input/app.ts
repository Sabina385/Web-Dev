import {Component} from '@angular/core';
import {User} from './user';

@Component({
  selector: 'app-root',
  template: ` <app-user occupation="Simran"></app-user> `,
  imports: [User],
})
export class App {}