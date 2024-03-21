import FiatComponent from "../fiat/core/fiat-component";

Component(FiatComponent({
  exposeInputHandler: true,
  mixins: [],
  data: {},
  props: {
    type: 'text', // text || number || digit
    maxlength: 140,
    placeholder: 'Placeholder message',
    showLoader: false,
    helperMsg: '',
    errorMsg: '',
    inputType: 'text-box' // 'text-box' || 'text-field' (not supported yet) || 'text-field-amount'
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {},
}));
