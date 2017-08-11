import { Component } from '@angular/core';
import { routerTransition } from '../router.animation';

@Component({
  selector: 'notfound',
  template: '<h1>404</h1>',
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class NotFoundComponent { }
