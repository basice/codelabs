import { Component, OnInit } from '@angular/core';
import { data } from '../data/testdata';

@Component({
  selector: 'run',
  templateUrl: './run.component.html',
  styles: []
})
export class RunComponent implements OnInit {
  dataObj;

  constructor() {
    this.dataObj = data;
  }

  ngOnInit(): void {
  }

}
