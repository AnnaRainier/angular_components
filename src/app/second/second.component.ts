import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  @Input() src
  @Output() onBtnClick = new EventEmitter<string>()

  onTitleClick(elem) {
    //console.log(elem.src);
    this.onBtnClick.emit(elem.src);
    console.log(typeof(elem.src))
  }

}
