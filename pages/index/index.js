import providers from '/data/providers'


Page({

  mixins: [],
  data: {
    providers,
    count: [],
    transactionData: [],
    providersSearchResult: [],
    isSearch: false,
    array: ['Saloon', 'Bakery', 'Bar', 'Beauty'],
    objectArray: [
      {
        id: 0,
        name: 'Category',
      },
      {
        id: 1,
        name: 'Bakery',
      },
      {
        id: 2,
        name: 'Bar',
      },
      {
        id: 3,
        name: 'Beauty',
      },
      {
        id: 4,
        name: 'Book Store',
      },
      {
        id: 5,
        name: 'Butcheries',
      },
      {
        id: 6,
        name: 'Doctors',
      },
      {
        id: 7,
        name: 'Electronics',
      },
      {
        id: 8,
        name: 'Fast Foods',
      },
      {
        id: 9,
        name: 'Florists',
      },
      {
        id: 10,
        name: 'Cosmetrics',
      },
    ],
    arrIndex: 0,
    index: 0
  },
  didMount() { },
  didUpdate() { },
  didUnmount() { },
  onLoad(query) {
    // Page load

    console.info(`Page onLoad witsh query`, providers);
    this.setData({ providersSearchResult: this.data.providers },
    )
  },
  onReady() { },
  onShow() {
    // Page display
    // this.setData({ count:1}
    //   )
    this.RequestrewardPoint();
    this.transactionAPI();

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
  onPullDownRefresh() { },
  onReachBottom() {
    // Page is pulled to the bottom
  },
  onShareAppMessage() {
    // Back to custom sharing information
    return {
      title: 'DANA Mini Biller Template',
      desc: 'DANA Mini Program tempalate for bill payment',
      path: 'pages/index/index',
    };
  },

  onProviderCellTap(e, props) {
    this.setData({
      showTop: true,
    });
    const { provider } = props
    this.setData({ providerName: provider.name })
  },
  onTapFiatCell() {
    my.navigateTo({
      url: '/pages/fiat/index/index'
    })
  },
  closePopup() {
    this.setData({
      showTop: false,

    });
  },
  showshare() {
    this.setData({
      shareShowtop: true,
      showTop: false,
    })
  },
  closesharepoint() {
    this.setData({
      shareShowtop: false,

    })
  },
  showwithdraw() {
    this.setData({
      shareShowtop: false,
      showWithdraw: true,
      showTop: false,

    })
  },
  closewithdraw() {
    this.setData({
      shareShowtop: false,
      showWithdraw: false,
      showTop: false,

    })
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

  onSearchInput(e) {
    const searchKey = e.detail.value || '';
    const lowerCaseSearchKey = searchKey.toLowerCase();

    const filtered = this.data.transactionData.filter(transactionData => {
      const lowerCaseTransactionName = transactionData.name.toLowerCase();
      return lowerCaseTransactionName.indexOf(lowerCaseSearchKey) !== -1;
    });

    if (searchKey) {
      this.setData({
        providersSearchResult: filtered,
        isSearch: true,
      });
    } else {
      this.setData({
        providersSearchResult: this.data.transactionData, // Assuming you want to reset to the original 'transactionData'
        isSearch: false,
      });
    }
  },


  bindObjPickerChange(e) {
    // console.log('picker sends selection change, carried value ', CarddataBrands);
    this.setData({
      arrIndex: e.detail.value,
    });
  },

  // API Call
  RequestrewardPoint() {
    const self = this;
    my.request({
      url: 'http://52.51.249.84:8080/api/app/getRewardSummary',
      method: 'GET',
      headers: { "authorization": ["Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI2NTdhNmZlNWQ4MGE0YTNiZTRhYTQ5MjQiLCJzdWIiOiJyYW5qaXRoMTdAZ21haWwuY29tIiwiaWF0IjoxNzExOTQ2ODI1LCJleHAiOjE3MTIwMzMyMjV9.krBSnWOSXDxx3aWQ5VBlbV8Lj3rxxYyo0CV_X4J8B6g"] },
      dataType: 'json',
      success: function (res) {
        self.setData({
          count: res.data // Set the response value in the 'count' data property
        });
        // console.log("12344", self.data.count); // Access 'count' using 'self.data.count'
      },
      fail: function (res) {
        my.alert({ content: 'fail' });
      },

    });


  },
  transactionAPI() {
    const table = this;
    my.request({
      url: 'http://52.51.249.84:8080/api/app/transactions',
      method: 'GET',
      // headers: { "authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI2NTdhNmZlNWQ4MGE0YTNiZTRhYTQ5MjQiLCJzdWIiOiJyYW5qaXRoMTdAZ21haWwuY29tIiwiaWF0IjoxNzExOTQ2ODI1LCJleHAiOjE3MTIwMzMyMjV9.krBSnWOSXDxx3aWQ5VBlbV8Lj3rxxYyo0CV_X4J8B6g" },
      headers: { "authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI2NTk2NTU5MGE3OWIxYjBjMDMwMzJiOTkiLCJzdWIiOiIxMTExMTU1NTU1IiwiaWF0IjoxNzEyMTM0MzQyLCJleHAiOjE3MTIyMjA3NDJ9.wDn9zNfxvEaeD9yh8uUqNL5cM5Bkjxf75M9w6sre9FA" },
      dataType: 'json',
      success: function (res) {
        table.setData({
          transactionData: res.data // Set the response value in the 'count' data property
        });
        console.log("12344", table.data.transactionData); // Access 'count' using 'self.data.count'
      },
      fail: function (res) {
        my.alert({ content: 'fail...!' });
      },

    });

  }
})



