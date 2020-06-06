import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RunComponent } from './run/run.component';
import { FormsDynamicModule } from '../forms-dynamic/forms-dynamic.module';

@NgModule({
  declarations: [RunComponent],
  imports: [
    CommonModule,
    FormsDynamicModule
  ],
  exports: [RunComponent]
})
export class TestklientModule {
}
