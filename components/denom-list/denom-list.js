Component({
  data: {
    denomRows: [],
    cutOffTimeErrorMessage: `
      Your transaction cannot be processed right now. Please try again after 01.00 AM.
    `,
    generalErrorMessage: `
      We can’t process your customer number right now. Give it a try later, perhaps? 
    `,
  },
  props: {
    denoms: [],
    short: true,
    onInputError: () => {},
  },
  didMount() {
    this.updateDenomRows()
  },
  deriveDataFromProps(nextProps) {
    this.updateDenomRows(nextProps)
  },
  methods: {
    updateDenomRows(props) {
      if (!props) props = this.props
      const { denoms=[] } = props
      const denomRows = []
      let denomRow = []
      let i = 0
      while (i < denoms.length) {
        if (i % 2 == 0) {
          denomRow = [denoms[i]]
          if (i == denoms.length - 1) denomRows.push(denomRow)
        } else {
          denomRow.push(denoms[i])
          denomRows.push(denomRow)
          denomRow = []
        }
        i++
      }
      this.setData({ denomRows })
    },
    onDenomCardTap (e) {
      this.clearInputError()
      const { goods } = e.target.dataset
      const denomAmount = goods.denom.amount
      switch(denomAmount) {
        case '50.000':
          this.showCutOffTimeError()
          break
        case '100.000':
          this.showGeneralError()
          break
        case '200.000':
          this.showConnectionUnstableError()
          break
        case '500.000':
          this.triggerInputError()
          break
        default:
          this.createOrder()
      }
    },

    saveCutOffTimeErrorSheetRef(ref) {
      this.cutOffTimeErrorSheetRef = ref
    },
    showCutOffTimeError() {
      this.cutOffTimeErrorSheetRef.show()
    },
    hideCutOffTimeError() {
      this.cutOffTimeErrorSheetRef.hide()
    },

    saveGeneralErrorSheetRef(ref) {
      this.generalErrorSheetRef = ref
    },
    showGeneralError() {
      this.generalErrorSheetRef.show()
    },
    hideGeneralError() {
      this.generalErrorSheetRef.hide()
    },

    saveToastRef(ref) {
      this.toastRef = ref
    },
    showConnectionUnstableError() {
      this.toastRef.warning('The network connection is unstable. Please try again later.', {
        snackbar: true,
        actionText: 'OKAY',
      })
    },

    triggerInputError () {
      this.props.onInputError('Number not found. Please try again')
    },
    clearInputError () {
      this.props.onInputError('')
    },

    createOrder () {
      // this is only an example, call your backend service to get `redirectionUrl`
      const redirectionUrl = 'http://m.test02.dana.id/m/portal/cashier/checkout?bizNo=20200825111212800110166733200292930&timestamp=1598340695974&mid=216620000091178678235&sign='
      // my.tradePay will open DANA cashier page
      // my.tradePay won't work on Mini Program Studio, need to test on real device
      my.tradePay({
        paymentUrl: redirectionUrl,
      }, function (res) {
        // callback after done in cashier page
        if (res.success) {
          my.alert({
            content: JSON.stringify(res),
          })
        } else {
          my.alert({
            content: JSON.stringify(res),
          })
        }
      })
    }
  },
});
