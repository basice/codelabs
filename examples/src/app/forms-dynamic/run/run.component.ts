import { Component, OnInit } from '@angular/core';
import { data } from '../model/data';

@Component({
  selector: 'run',
  template: `
      <div class="row m-2">
          <div class="col-6">
              <dynamic-form [dataObject]="data"></dynamic-form>
          </div>
      </div>
  `,
  styles: []
})
export class RunComponent implements OnInit {
  data;

  constructor() {
    this.data = data;
  }

  ngOnInit(): void {
  }

}
