Page({
  data: {
    dialog3Visible: false,
  },
  onLoad() {},
  saveRefDialog2(ref) {
    this.dialog2Ref = ref
  },
  showDialog2 () {
    this.dialog2Ref.show()
  },
  closeDialog2 () {
    this.dialog2Ref.hide()
  },
  showDialog3 () {
    this.setData({ dialog3Visible: true })
  },
  closeDialog3 () {
    this.setData({ dialog3Visible: false })
  },
});
