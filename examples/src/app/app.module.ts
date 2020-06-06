import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
// import { MessagingModule as RunModule } from './messaging/messaging.module';
// import { TodoModule as RunModule } from './todo/todo.module';
// import { FormsDynamicModule as RunModule } from './forms-dynamic/forms-dynamic.module';
// import { TestklientModule as RunModule } from './testklient/testklient.module';
import { FormlyStartModule as RunModule } from './formly/formly-start.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RunModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
