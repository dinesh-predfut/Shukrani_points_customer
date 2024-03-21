import FiatComponent from '../core/fiat-component'

Component(FiatComponent({
  mixins: [],
  internalProps: {
    visible: false,
  },
  lockedInternalProps: ['visible'],
  data: {
    leaving: true,
  },
  props: {
    dismissable: true,
    type: '',
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {
    clearTimeout(this.hideTimer)
  },
  deriveDataFromProps(nextProps) {
    if (this.props.visible && !nextProps.visible) {
      this.setData({ leaving: true }, () => {
        clearTimeout(this.hideTimer)
        this.hideTimer = setTimeout(() => {
          const internalProps = {...this.data.internalProps, visible: false}
          this.setData({ internalProps })
        }, 150)
      })
    } else if (!this.props.visible && nextProps.visible) {
      const internalProps = {...this.data.internalProps, visible: true }
      this.setData({ leaving: false, internalProps })
    }
  },
  methods: {
    saveOverlayRef(ref) {
      this.overlayRef = ref
    },
    show() {
      const internalProps = {...this.data.internalProps, visible: true}
      this.setData({ internalProps, leaving: false })
    },
    hide() {
      this.setData({ leaving: true }, () => {
        clearTimeout(this.hideTimer);
        this.hideTimer = setTimeout(() => {
          const internalProps = {...this.data.internalProps, visible: false}
          this.setData({ internalProps })
        }, 150)
      })
    },
    dismiss() {
      this.props.dismissable && this.hide()
    },
  },
}));