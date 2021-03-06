import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { faHandPointer } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent implements OnInit, OnDestroy {

  @Input() count: number = 0;

  pointerIcon = faHandPointer;

  @Output() buttonCLicked = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
    //alert('In ngOnInit');
  }

  ngOnDestroy(): void {
    alert('In ngOnDestroy');
  }

  onClick(): void{
    this.buttonCLicked.emit();
  }

 

}
