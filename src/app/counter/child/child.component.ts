import { Component, OnInit } from '@angular/core';
import { AppState } from '../../app.reducers';
import { Store } from '@ngrx/store';
import * as actions from '../counter.actions';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  childCounter: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('counter')
      .subscribe(counter => this.childCounter = counter);
  }

  multiply() {
    this.store.dispatch(actions.multiplyAction({number: 2}));
  }

  divide() {
    this.store.dispatch(actions.divideAction({number: 2}));
  }
}
