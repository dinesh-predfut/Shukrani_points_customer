Component({
   showTop: true,
  mixins: [],
  data: {},
  props: {
    providers: [],
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  onTopBtnTap() {
    this.setData({
      showTop: true,
    });
  },
  onPopupClose() {
    this.setData({
      showTop: false,
    });
  },
  methods: {
    onProviderCellTap (e, props) {
      this.setData({
        showTop: true,
      });
      const { provider } = props
     this.setData({ providerName: provider.name })
    },
    onTapFiatCell () {
      my.navigateTo({ 
        url: '/pages/fiat/index/index'
      })
    }
  },
});
