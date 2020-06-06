import { Injectable } from '@angular/core';
import { Entity, InputDto, OutputDto } from './models';
import { RestDataSource } from './rest.datasource';
import { StaticDataSource } from './static.datasource';

@Injectable()
export class DataRepository {
  private data: Entity[] = [];

  constructor(private dataSource: StaticDataSource) {
  }

  calculate(input: InputDto) {
    this.data = [];

    this.dataSource.calculate(input)
      .subscribe(
        data => {
          const out: OutputDto = Object.assign({}, data);
          out.entitys.forEach(val => this.data.push(Object.assign({}, val)));
        }
      );
  }
}
