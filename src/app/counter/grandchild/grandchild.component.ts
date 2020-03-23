import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { resetAction } from '../counter.actions';

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styleUrls: ['./grandchild.component.css']
})
export class GrandchildComponent implements OnInit {

  grandChildCounter: number;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.select('counter')
      .subscribe(counter => this.grandChildCounter = counter);
  }

  reset() {
    this.store.dispatch(resetAction());
  }
}
