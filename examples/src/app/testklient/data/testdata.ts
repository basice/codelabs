export const data = {
  inkomstar: {
    label: 'inkomstar',
    value: '2020',
    type: 'select',
    options: [
      {label: '2019', value: '2019'},
      {label: '2020', value: '2020'}
    ],
    validation: {
      required: true
    }
  },
  typ_deklreg: {
    label: 'typ_deklreg',
    value: 'INK1',
    type: 'text',
    validation: {
      required: true
    }
  },
  ulag_fsk_tomt_sma: {
    label: 'ulag_fsk_tomt_sma ',
    value: '1000000.000000',
    type: 'text',
    validation: {
      required: true,
      pattern: '^[0-9\.]+$'
    }
  },
  ink_tj1_kusum: {
    label: 'ink_tj1_kusum',
    value: '565130220',
    type: 'text'
  },
  ink_tj_lon: {
    label: 'ink_tj_lon',
    value: '565130220',
    type: 'text'
  }
};
