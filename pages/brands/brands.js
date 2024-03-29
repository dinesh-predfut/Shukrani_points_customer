Page({
  onLoad(query) {
    // Page load
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  onReady() {
    // Page loading is complete
  },
  onShow() {
    // Page display
  },
  onHide() {
    // Page hidden
  },
  onUnload() {
    // Page is closed
  },
  onTitleClick() {
    // Title clicked
  },
  onPullDownRefresh() {
    // Page is pulled down
  },
  onReachBottom() {
    // Page is pulled to the bottom
  },
  onShareAppMessage() {
    // Back to custom sharing information
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },

  data: {
    modalOpened: false,
    rewardsOn:false,
    menuOn:false,
    array: ['Mlimani city1', 'Mlimani city2', 'Mlimani city3', 'Mlimani city4'],
    index: 0
  },
  openPopup() {
    console.log('open clicked')
    this.setData({
      modalOpened: true,
    });
    },
    closePopup() {
    console.log('close clicked from redeem file ---')
    this.setData({
      modalOpened: false,
      rewardsOn:false,
      menuOn:false,
      // nextPage:false
    });
    },
  onModalClick() {
    this.setData({
      modalOpened: false,
    });
  },
  onModalClose() {
    this.setData({
      modalOpened: false,
    });
  },
  onRewardsModalClick(){
    this.setData({
      rewardsOn:true
    })
  },
  onMenuModalClick(){
    this.setData({
      menuOn:true
    })
  },
  bindPickerChange(e) {
    console.log('picker sends selection change, carried value ', e.detail.value);
    this.setData({
      index: e.detail.value,
    });
  },
});
