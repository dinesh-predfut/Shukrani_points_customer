import denoms from '/data/denoms'

Page({
  data: {
    showTop: true,
    providerName: '',
    helpDialogMessage: `
      Hubungi call center kantor pembiayaan anda.
      Sebutkan nama dan nomor telepon yang terdaftar sebelumnya.
      Petugas kantor pembiayaan akan memberitahukan nomor kontrak anda.
    `,
    customerNumberLoading: false,
    denoms: [],
    custNumberInputErrorMsg: ''
  },
  onLoad(query) {
    this.setData({ providerName: query.providerName })
  },

  saveHelpDialogRef(ref) {
    this.helpDialogRef = ref
  },
  openHelpDialog() {
    this.helpDialogRef.show()
  },
  closeHelpDialog() {
    this.helpDialogRef.hide()
  },

  onCustomerNumberInput(e) {
    const { value } = e.detail
    this.setData({ custNumberInputErrorMsg: '' })
    clearTimeout(this.customerNumberTimer)
    this.setData({ customerNumberLoading: true })
    this.customerNumberTimer = setTimeout(() => {
      if (value) {
        this.setData({ denoms, customerNumberLoading: false })
      } else {
        this.setData({ denoms: [], customerNumberLoading: false })
      }
    }, 500)
  },
  onTopBtnTap() {
    this.setData({
      showTop: true,
    });
  },
  onPopupClose() {
    this.setData({
      showTop: true,
    });
  },
  onInputError(errorMsg) {
    this.setData({ custNumberInputErrorMsg: errorMsg })
  }
});
