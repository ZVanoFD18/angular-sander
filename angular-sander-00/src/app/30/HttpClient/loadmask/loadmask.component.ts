import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-loadmask',
  templateUrl: './loadmask.component.html',
  styleUrls: ['./loadmask.component.css']
})
export class LoadmaskComponent implements OnInit {
  @Input() isVisible = false;
  constructor() { }

  ngOnInit() {
  }

}
