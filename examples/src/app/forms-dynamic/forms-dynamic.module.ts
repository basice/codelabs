import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { RunComponent } from './run/run.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [FormComponent, RunComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [RunComponent, FormComponent]
})
export class FormsDynamicModule {
}
