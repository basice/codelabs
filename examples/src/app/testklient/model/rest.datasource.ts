import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable, of } from 'rxjs';
import { concatMap, delay } from 'rxjs/operators';
import { Entity, InputDto, OutputDto } from './models';

const PROTOCOL = 'http';
const PORT = 3600;

@Injectable()
export class RestDataSource {
  baseUrl: string;
  private data: Entity[];

  constructor(private http: HttpClient) {
    // this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    this.baseUrl = 'http://localhost:7070/skatteberakning-fysisk-wrapper/';
  }

  calculate(input: InputDto): Observable<OutputDto> {
    // return this.http.post<OutputDto>(this.baseUrl + 'skatteberakning', input);
    return this.fakeResponse();
  }

  private fakeResponse() {
    const out = {
      entitys: [
        new Entity('sk_fast_tomt_sma', '10001.000000'),
        new Entity('sum_sk_skred', '10000.000000'),
        new Entity('sum_sk_skred_f', '10000.000000'),
        new Entity('sk_slut', '10000.000000'),
        new Entity('sk_fast', '10000.000000')
      ]
    };

    return from([out])
      .pipe(concatMap(item => of(item).pipe(delay(1000))));
  }

}
