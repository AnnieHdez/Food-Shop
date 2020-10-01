import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  @Output() togg = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit(): void {
  }

  toggle(state){
    this.togg.emit(state);
  }

}
