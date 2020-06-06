/* tslint:disable:forin */
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Message, MessageType } from './message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  nextId = 0;
  messages = [];
  subject = new Subject<Message[]>();

  messageTypes = [];

  constructor() {
    for (const type in MessageType) {
      this.messageTypes.push(MessageType[type]);
    }
  }

  updateSubscribers() {
    this.subject.next(this.messages);
  }

  getMessages(filterBy?: MessageType): Observable<Message[]> {
    return this.subject.asObservable()
      .pipe(
        map(
          messages => filterBy ? messages.filter(message => message.type === filterBy) : messages
        )
      );
  }

  send(message: string, type: MessageType) {
    this.messages = [
      ...this.messages,
      {
        id: ++this.nextId,
        content: message,
        type
      }
    ];

    this.updateSubscribers();
  }

  remove(messageId: number) {
    this.messages = this.messages.filter(message => message.id !== messageId);

    this.updateSubscribers();
  }
}
