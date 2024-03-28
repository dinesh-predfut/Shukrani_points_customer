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
    nextPage : false,
    array: ['Mlimani city1', 'Mlimani city2', 'Mlimani city3', 'Mlimani city4'],
    objectArray: [
      {
        id: 0,
        name: 'Country1',
      },
      {
        id: 1,
        name: 'Country2',
      },
      {
        id: 2,
        name: 'Country3',
      },
      {
        id: 3,
        name: 'Country4',
      },
    ],
    arrIndex: 0,
    index: 0
  },
  openModal() {
    this.setData({
      modalOpened: true,
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
    nextPage:false
  });
  },
  nextScreen() {
  console.log('open clicked')
  this.setData({
    nextPage: true,
  });
  },
  bindPickerChange(e) {
    console.log('picker sends selection change, carried value ', e.detail.value);
    this.setData({
      index: e.detail.value,
    });
  },
  bindObjPickerChange(e) {
    console.log('picker sends selection change, carried value ', e.detail.value);
    this.setData({
      arrIndex: e.detail.value,
    });
  },
});
