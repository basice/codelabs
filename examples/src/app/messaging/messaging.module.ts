import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RunComponent } from './run/run.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [RunComponent, MessageComponent],
  imports: [
    CommonModule
  ],
  exports: [
    RunComponent
  ],
})
export class MessagingModule {
}
