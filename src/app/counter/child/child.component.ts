import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() childCounter: number;
  @Output() counterChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  multiply() {
    this.childCounter *= 2;
    this.counterChange.emit(this.childCounter);
  }

  divide() {
    this.childCounter /= 2;
    this.counterChange.emit(this.childCounter);
  }

  resetGrandChild(newCounter: number) {
    this.childCounter = newCounter;
    this.counterChange.emit(this.childCounter);
  }
}
