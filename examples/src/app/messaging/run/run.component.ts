import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageType } from '../message';
import { MessageService } from '../message.service';

@Component({
  selector: 'run',
  template: `
      <header>
          <h1>Messaging Service</h1>
          <input
                  type="text"
                  placeholder="Message to send..."

                  #messageInput
                  (keyup.enter)="send(messageInput.value, messageTypeSelect.value)"
          >
          <select #messageTypeSelect>
              <option *ngFor="let messageType of messageService.messageTypes">
                  {{ messageType }}
              </option>
          </select>
          <button (click)="send(messageInput.value, messageTypeSelect.value)">Send Message</button>
      </header>

      <main *ngIf="messages && messages.length > 0">
          <h2>Message History</h2>
          <message
                  *ngFor="let message of messages"
                  [data]="message"
                  (onRemove)="remove(message.id)"
          >
          </message>
      </main>
  `,
  styles: []
})
export class RunComponent implements OnInit {
  messages;
  subscription: Subscription;

  constructor(public messageService: MessageService) {
  }

  ngOnInit(): void {
    this.subscription = this.messageService.getMessages(MessageType.Normal)
      .subscribe(messages => {
        this.messages = messages;
      });
  }

  send(message, messageType) {
    this.messageService.send(message, messageType);
  }

  remove(messageId) {
    this.messageService.remove(messageId);
  }
}
