import FiatComponent from '../core/fiat-component'

Component(FiatComponent({
  mixins: [],
  data: {
    defaultClasses: 'f-btn'
  },
  props: {
    type: 'primary',
    size: 'large',
    uppercase: false,
    disabled: false,
  },
  didMount() {
    const { props } = this
    const upperCaseClass = props.uppercase ? 'f-btn-uppercase' : ''
    this.setData({
      defaultClasses: `f-btn f-btn-${props.type} f-btn-${props.size} ${upperCaseClass}`
    })
  },
  didUpdate() {},
  didUnmount() {},
  methods: {},
}));
