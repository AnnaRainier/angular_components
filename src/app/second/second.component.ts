import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  @Input() src1
  @Output() onElemClick = new EventEmitter<string>()

  onThisClick(elem) {
    //console.log(elem.src);
    this.onElemClick.emit(elem.src);
    console.log(typeof(elem.src))
  }

}
