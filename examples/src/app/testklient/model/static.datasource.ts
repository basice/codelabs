import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { concatMap, delay } from 'rxjs/operators';
import { Entity, inEntitys, InputDto, outEntitys, OutputDto } from './models';

@Injectable()
export class StaticDataSource {
  getInput(): Observable<InputDto> {
    return from([new InputDto(inEntitys, 2020)]);
  }

  getOutput(): Observable<OutputDto> {
    return from([new OutputDto(outEntitys)])
      .pipe(concatMap(item => of(item).pipe(delay(3000))));
  }

  calculate(input: InputDto) {
    return this.getOutput();
  }
}
