import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'dynamic-form',
  templateUrl: './form.component.html',
  styles: []
})
export class FormComponent implements OnInit {

  @Input() dataObject;

  form: FormGroup;

  /*
   [
     {
        key: "name",
        label: "Name",
        value: "Juri"
        type: "text",
        options: []
        validation: {required: true},
      },
    ...
    ]
*/
  objectProps;

  constructor() {
  }

  ngOnInit(): void {
    // Remap the API to be suitable for iterating over it
    this.objectProps = Object.keys(this.dataObject)
      .map(prop => {
        return Object.assign({}, {key: prop}, this.dataObject[prop]);
      });

    // Set up form
    const formGroup = {};
    for (const prop of Object.keys(this.dataObject)) {
      formGroup[prop] = new FormControl(this.dataObject[prop].value || '',
        this.mapValidators(this.dataObject[prop].validation));
    }

    this.form = new FormGroup(formGroup);
  }

  onSubmit(value: any) {
    console.log(this.form.value);
  }

  private mapValidators(validators) {
    const formValidators = [];
    if (validators) {
      for (const validation of Object.keys(validators)) {
        if (validation === 'required') {
          formValidators.push(Validators.required);
        }
      }
    }
    return formValidators;
  }
}
