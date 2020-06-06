import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RunComponent } from './run/run.component';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { PanelWrapperComponent } from './panel-wrapper/panel-wrapper.component';
import { FormlyFieldCustomInput } from './custom-input/custom-input.component';
import { NullTypeComponent } from './types/null.type';
import { MultiSchemaTypeComponent } from './types/multischema.type';
import { ArrayTypeComponent } from './types/array.type';
import { ObjectTypeComponent } from './types/object.type';

export function minItemsValidationMessage(err, field: FormlyFieldConfig) {
  return `should NOT have fewer than ${field.templateOptions.minItems} items`;
}

export function maxItemsValidationMessage(err, field: FormlyFieldConfig) {
  return `should NOT have more than ${field.templateOptions.maxItems} items`;
}

export function minlengthValidationMessage(err, field: FormlyFieldConfig) {
  return `should NOT be shorter than ${field.templateOptions.minLength} characters`;
}

export function maxlengthValidationMessage(err, field: FormlyFieldConfig) {
  return `should NOT be longer than ${field.templateOptions.maxLength} characters`;
}

export function minValidationMessage(err, field: FormlyFieldConfig) {
  return `should be >= ${field.templateOptions.min}`;
}

export function maxValidationMessage(err, field: FormlyFieldConfig) {
  return `should be <= ${field.templateOptions.max}`;
}

export function multipleOfValidationMessage(err, field: FormlyFieldConfig) {
  return `should be multiple of ${field.templateOptions.step}`;
}

export function exclusiveMinimumValidationMessage(err, field: FormlyFieldConfig) {
  return `should be > ${field.templateOptions.step}`;
}

export function exclusiveMaximumValidationMessage(err, field: FormlyFieldConfig) {
  return `should be < ${field.templateOptions.step}`;
}

export function constValidationMessage(err, field: FormlyFieldConfig) {
  return `should be equal to constant "${field.templateOptions.const}"`;
}


@NgModule({
  declarations: [
    RunComponent,
    PanelWrapperComponent,
    FormlyFieldCustomInput,
    ArrayTypeComponent,
    ObjectTypeComponent,
    MultiSchemaTypeComponent,
    NullTypeComponent
  ],
  imports: [
    CommonModule,
    FormlyModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot({
      validationMessages: [
        {name: 'required', message: 'This field is required'},
        {name: 'null', message: 'should be null'},
        {name: 'minlength', message: minlengthValidationMessage},
        {name: 'maxlength', message: maxlengthValidationMessage},
        {name: 'min', message: minValidationMessage},
        {name: 'max', message: maxValidationMessage},
        {name: 'multipleOf', message: multipleOfValidationMessage},
        {name: 'exclusiveMinimum', message: exclusiveMinimumValidationMessage},
        {name: 'exclusiveMaximum', message: exclusiveMaximumValidationMessage},
        {name: 'minItems', message: minItemsValidationMessage},
        {name: 'maxItems', message: maxItemsValidationMessage},
        {name: 'uniqueItems', message: 'should NOT have duplicate items'},
        {name: 'const', message: constValidationMessage},
      ],
      types: [
        {name: 'string', extends: 'input'},
        {
          name: 'number',
          extends: 'input',
          defaultOptions: {
            templateOptions: {
              type: 'number',
            },
          },
        },
        {
          name: 'integer',
          extends: 'input',
          defaultOptions: {
            templateOptions: {
              type: 'number',
            },
          },
        },
        {name: 'boolean', extends: 'checkbox'},
        {name: 'enum', extends: 'select'},
        {name: 'null', component: NullTypeComponent, wrappers: ['form-field']},
        {name: 'array', component: ArrayTypeComponent},
        {name: 'object', component: ObjectTypeComponent},
        {name: 'multischema', component: MultiSchemaTypeComponent},
      ],
    }),
  ],

  exports: [
    RunComponent,
    FormlyFieldCustomInput
  ]
})
export class FormlyStartModule {
}
