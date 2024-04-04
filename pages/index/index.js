import providers from '/data/providers'


Page({

  mixins: [],
  data: {
    providers,
    count: [],
    transactionData: [],
    providersSearchResult: [],
    providerName: [],
    isSearch: false,
    sharepointsvalue: [],
    
 
    arrIndex: 0,
    index: 0
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  onLoad(query) {
    // Page load

    this.userinfo()
   
  },
  onReady() {},
  onShow() {
    my.navigateTo({
      url: '/pages/rewards/rewards'
    })

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
  onPullDownRefresh() {},
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



