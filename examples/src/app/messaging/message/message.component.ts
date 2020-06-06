import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'message',
  template: `
      <div>
          <span>ID: {{ data.id }} - {{ data.content | lowercase }}</span>
          <button (click)="remove()">Remove</button>
      </div>
  `,
  styles: []
})
export class MessageComponent implements OnInit {
  @Input() data;
  @Output() onRemove = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  remove() {
    this.onRemove.emit();
  }
}
