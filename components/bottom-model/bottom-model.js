Component({
  mixins: [],
  data: {
    modalOpened: false,
  },
  props: {
    show: false,
    modalOpened: false,
  },
  didMount() { },
  didUpdate() { },
  didUnmount() { },
  deriveDataFromProps(nextProps) {

  },
  methods: {
    closePopup() {
      this.props.show = false;
    },
    openPopup() {
      this.props.show = true;
    },
    handleOpen() {
      console.log('handleOpen called bottom-model')
    },
    handleClose() {
      console.log('handleClose called bottom-model',this.props)
      // this.props.show = false;
    }
  }
});