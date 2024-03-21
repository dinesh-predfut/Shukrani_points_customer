Page({
  data: {
    isToastSpinVisible: false,
    isToastWarningVisible: false,
    isToastIconVisible: false,
    isToastCustomVisible: false,
    isToastSnackbarVisible: false,
  },
  onLoad() {},

  // Using component props
  handleToastSpin() {
    this.setData({ isToastSpinVisible: true })
    setTimeout(() => {
      this.setData({ isToastSpinVisible: false })
    }, 2000)
  },
  showToastWarning() {
    this.setData({ isToastWarningVisible: true })
  },
  hideToastWarning() {
    this.setData({ isToastWarningVisible: false }) 
  },
  showToastIcon() {
    this.setData({ isToastIconVisible: true })
  },
  hideToastIcon() {
    this.setData({ isToastIconVisible: false }) 
  },
  showToastCustom() {
    this.setData({ isToastCustomVisible: true })
  },
  hideToastCustom() {
    my.alert({ title: 'Toast callback', content: 'this is toast callback content', buttonText: 'Okay' })
    this.setData({ isToastCustomVisible: false }) 
  },
  showToastSnackbar() {
    this.setData({ isToastSnackbarVisible: true })
  },
  hideToastSnackbar() {
    my.alert({ title: 'Toast snackbar', content: 'this is onHide callback', buttonText: 'Okay' })
    this.setData({ isToastSnackbarVisible: false }) 
  },
  handleToastSnackbarAction() {
    my.alert({ title: 'Toast snackbar', content: 'this is onAction callback', buttonText: 'Okay' })
  },

  // Using ref
  saveToastRef(ref) {
    this.toastRef = ref
  },
  handleToastRefSpin() {
    this.toastRef.spin()
    setTimeout(() => {
      this.toastRef && this.toastRef.hide()
    }, 2000)
  },
  handleToastRefWarning() {
    this.toastRef.warning('Placeholder for message here', { duration: 1000 })
  },
  handleToastRefIcon() {
    this.toastRef.error('Placeholder for 2- line message here. Please put your message here. Please put your message here.', {
      icon: 'dana-coin',
    })
  },
  handleToastRefCustom() {
    this.toastRef.success('Placeholder for 2- line message here. Please put your message here. ', {
      onHide: () => {
        my.alert({ title: 'Toast Ref', content: 'Toast hide callback', buttonText: 'Okay' })
      },
    })
  },
  handleToastRefSnackbar() {
    this.toastRef.success('Placeholder for 2- line message here. Please put your message here. ', {
      snackbar: true,
      actionText: 'ACTION',
      duration: 5000,
      onAction: () => {
        my.alert({ title: 'Toast Ref', content: 'this is onAction callback', buttonText: 'Okay' })
      },
      onHide: () => {
        my.alert({ title: 'Toast Ref', content: 'Toast hide callback', buttonText: 'Okay' })
      },
    })
  },
});
