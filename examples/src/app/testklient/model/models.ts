export class Entity {
  constructor(public key?: string, public value?: string) {
  }
}

export class InputDto {
  constructor(public entitys?: Entity[],
              public inkomstar?: number) {
  }
}

export class OutputDto {
  constructor(public entitys?: Entity[]) {
  }
}

export const inEntitys = [
  new Entity('typ_deklreg', 'INK1'),
  new Entity('ulag_fsk_tomt_sma', '1000000.000000')];

export const outEntitys = [
  new Entity('sk_fast_tomt_sma', '10001.000000'),
  new Entity('sum_sk_skred', '10002.000000'),
  new Entity('sum_sk_skred_f', '10003.000000'),
  new Entity('sk_slut', '10004.000000'),
  new Entity('sk_fast', '10005.000000')
];
