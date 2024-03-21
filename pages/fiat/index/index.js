import fiatPages from '/data/fiatPages'

Page({
  data: {
    fiatPages
  },
  onLoad() {},
  onTapCell (e) {
    const { url } = e.target.dataset
    my.navigateTo({ url })
  }
});
