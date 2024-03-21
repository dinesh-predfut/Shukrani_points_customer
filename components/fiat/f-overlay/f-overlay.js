import FiatComponent from '../core/fiat-component'

Component(FiatComponent({
  mixins: [],
  data: {},
  props: {
    type: 'shade',
  },
  validateProps: {
    type: (val) => [
      'blur',
      'white',
      'shade',
    ].includes(val),
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {},
}));
