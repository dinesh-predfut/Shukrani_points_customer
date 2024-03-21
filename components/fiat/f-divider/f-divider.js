import FiatComponent from '../core/fiat-component'

Component(FiatComponent({
  mixins: [],
  data: {},
  props: {
    title: null,
    type: 'line-full'
  },
  validateProps: {
    type: (val) => [
      'box-4',
      'box-8',
      'box-12',
      'box-16',
      'line-full',
      'title',
    ].includes(val),
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {},
}));