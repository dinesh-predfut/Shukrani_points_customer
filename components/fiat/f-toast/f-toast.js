import FiatComponent from '../core/fiat-component'

Component(FiatComponent({
  internalProps: {
    type: '',
    visible: false,
    message: '',
    onHide: null,
    onAction: null,
    duration: 2500,
    actionText: '',
    icon: '',
    snackbar: false,
  },
  lockedInternalProps: ['visible'],
  mixins: [],
  data: {
    leaving: true,
  },
  didMount() {
    this._autoHide()
  },
  deriveDataFromProps(nextProps) {
    if (this.props.visible && !nextProps.visible) {
      this.setData({ leaving: true }, () => {
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
  didUpdate() {
    this._autoHide()
  },
  didUnmount() {
    clearTimeout(this.hideTimer)
    clearTimeout(this.autoHideTimer)
    clearTimeout(this.leavingTimer)
  },
  methods: {
    _autoHide() {
      clearTimeout(this.autoHideTimer)
      const { type, visible, duration } = this.data.internalProps
      if (type === 'spin') return
      if (visible) {
        this.autoHideTimer = setTimeout(() => {
          this.hide()
        }, parseInt(duration))
      }
    },
    onAction() {
      const { onAction } = this.data.internalProps
      if (onAction) onAction()
    },
    show(options={}) {
      this.reset()
      const internalProps = {...this.data.internalProps}
      const keys = Object.keys(options)
      for (let i=0; i<keys.length; i++) {
        const key = keys[i]
        if (options[key] === null) continue
        internalProps[key] = options[key]
      }
      internalProps.visible = true
      this.setData({ internalProps, leaving: false })
    },
    hide(callback) {
      clearTimeout(this.leavingTimer)
      this.setData({ leaving: true }, () => {
        this.leavingTimer = setTimeout(() => {
          const { onHide } = this.data.internalProps
          if (onHide) onHide()
          this.reset()
          if (callback) callback()
        }, 150)
      })
    },
    reset() {
      clearTimeout(this.hideTimer)
      clearTimeout(this.autoHideTimer)
      const internalProps = {...this.data.initialProps}
      this.setData({ internalProps })
    },
    spin() {
      this.show({
        type: 'spin',
      })
    },
    warning(message, options={}) {
      this.show({
        message,
        type: 'warning',
        ...options,
      })
    },
    error(message, options={}) {
      this.show({
        message,
        type: 'error',
        ...options,
      })
    },
    success(message, options={}) {
      this.show({
        message,
        type: 'success',
        ...options,
      })
    }
  },
}));
