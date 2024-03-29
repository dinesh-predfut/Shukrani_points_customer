Component({
   showTop: true,
   shareShowtop:false,
  showWithdraw:false,

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
    },
    closePopup() {
      this.setData({
        showTop: false,
        
      });
    }, 
    showshare(){
      this.setData({
        shareShowtop:true,
        showTop: false,
      })
    },
    closesharepoint(){
      this.setData({
        shareShowtop:false,
     
      })
    },
    showwithdraw(){
      this.setData({
        shareShowtop:false,
        showWithdraw:true,
        showTop: false,
     
      })
    },
    closewithdraw(){
      this.setData({
        shareShowtop:false,
        showWithdraw:false,
        showTop: false,
     
      })
    }
  },
});
