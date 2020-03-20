import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from './counter/counter.actions';
import { AppState } from './app.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  counter: number;

  constructor(private store: Store<AppState>) {
    this.store.select('counter').subscribe(counter => this.counter = counter)
  }

  increase() {
    this.store.dispatch(actions.increaseAction());
  }

  decrease() {
    this.store.dispatch(actions.decreaseAction());
  }

}
