import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { FormlyJsonschema } from '@ngx-formly/core/json-schema';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'run',
  templateUrl: './run.component.html',
  styles: []
})
export class RunComponent implements OnInit {
  form: FormGroup;
  model: any;
  options: FormlyFormOptions;
  fields: FormlyFieldConfig[];

  type: string;
  examples = [
    'simple',
    'nested',
    'arrays',
    'numbers',
    'references',
    'schema_dependencies',
    'null_field',
    'nullable',
    'allOf',
    'anyOf',
    'oneOf',
    'select_alternatives',
  ];

  constructor(private formlyJsonschema: FormlyJsonschema,
              private http: HttpClient) {
    this.loadExample(this.examples[0]);
  }

  loadExample(type: string) {
    this.http.get<any>(`assets/json-schema/${type}.json`).pipe(
      tap(({schema, model}) => {
        this.type = type;
        this.form = new FormGroup({});
        this.options = {};
        this.fields = [this.formlyJsonschema.toFieldConfig(schema)];
        this.model = model;
      }),
    ).subscribe();
  }

  ngOnInit(): void {
  }

  submit(val?: any) {
    if (this.form.valid) {
      console.log(JSON.stringify(this.model));
    }
  }
}
