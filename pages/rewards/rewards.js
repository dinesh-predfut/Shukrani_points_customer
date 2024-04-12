import providers from '/data/providers'


Page({
  
  mixins: [],
  data: {
      
    providers,
    count: [],
    transactionData: [],
    providersSearchResult: [],
    providerName: [],
    userProfile:[],
    CategoryFilter:[],
    selectedCategory:[],
    categoryrespon:[],
    isSearch: false,
    sharepointsvalue: [],
    array: ['Category', 'Bakery', 'Bar', 'Beauty'],
    objectArray: [{
        id:0,
        name: 'Category',
      },
      {
        id:1,
        name: 'Park',
      },
      {
        id: 2,
        name: 'Bakery',
      },
      {
        id: 3,
        name: 'Bar',
      },
      {
        id: 4,
        name: 'Beauty',
      },
      {
        id: 5,
        name: 'Book Store',
      },
      {
        id: 6,
        name: 'Butcheries',
      },
      {
        id: 7,
        name: 'Doctors',
      },
      {
        id: 8,
        name: 'Electronics',
      },
      {
        id: 9,
        name: 'Fast Foods',
      },
      {
        id: 10,
        name: 'Florists',
      },
      {
        id: 11,
        name: 'Cosmetrics',
      },
    ],
    arrIndex: 0,
    index: 0
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  onLoad(query) {
    // Page load

    console.info(`Page onLoad witsh query`, providers);
    this.setData({
      providersSearchResult: this.data.providers
    }, )
  },
  onReady() {},
  onShow() {
    // Page display
    // this.setData({ count:1}
    //   )
    this.RequestrewardPoint();
    this.transactionAPI();
    this.userinfo()

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
  makePhoneCall() {
    my.choosePhoneContact({
      success: (res) => {
        my.alert({
          content: 'choosePhoneContact response: ' + JSON.stringify(res)
        });
      },
      fail: (res) => {
        my.alert({
          content: 'choosePhoneContact response: ' + JSON.stringify(res)
        });
      },
    });
  },
  onProviderCellTap(e, props) {
    this.setData({
      showTop: true,
    });
    const {
      provider
    } = props
    this.setData({
      providerName: provider
    })
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
    const table = this
    console.log('picker sends selection change, carried value ', e.detail.value);
    this.setData({
      index: e.detail.value,
    });
  },
  bindObjPickerChange(e) {
    const self = this;
    const array = this.data.objectArray;
    const arrayIndex = e.detail.value;
    const finalValue = array[arrayIndex];
    const categoryFilter = finalValue.name;
    const data = this.data.transactionData;
    const filteredData = data.filter(item => item.category === categoryFilter);
    console.log('picker sends selection change, carried value ', arrayIndex);
  
    my.request({
      url: `http://52.51.249.84:8080/api/app/getRewardDataByCategory?category=${finalValue.name}`,
      method: 'GET',
      headers: {
        "authorization": ["Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI2NTk2NTU5MGE3OWIxYjBjMDMwMzJiOTkiLCJzdWIiOiIxMTExMTU1NTU1IiwiaWF0IjoxNzEyODk3NDg1LCJleHAiOjE3MTI5ODM4ODV9.bKrKYDkV1BWyfv6hglNoZ0EKy6jqg1AdMoY22FyA6i4"]
      },
      dataType: 'json',
      success: function (res) {
        self.setData({
          arrIndex: arrayIndex,
          selectedCategory: finalValue,
          providersSearchResult: filteredData,
          isSearch: true,
          categoryrespon: res.data
        });
        console.log("12344", self.data.categoryrespon);
      },
      fail: function (res) {
        my.alert({
          content: 'transactionfail'
        });
      }
    });
  },
  

  onSearchInput(e) {
    const searchKey = e.detail.value || '';
    const lowerCaseSearchKey = searchKey.toLowerCase();

    const filtered = this.data.transactionData.filter(transactionData => {
      const lowerCaseTransactionName = transactionData.merchantName.toLowerCase();
      return lowerCaseTransactionName.indexOf(lowerCaseSearchKey) !== -1;
    });
    console.log('filtered data ----> ', filtered);

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



  // API Call
  RequestrewardPoint() {
    const self = this;
    my.request({
      url: 'http://52.51.249.84:8080/api/app/getRewardSummary',
      method: 'GET',

      headers: {
        "authorization": ["Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI2NTk2NTU5MGE3OWIxYjBjMDMwMzJiOTkiLCJzdWIiOiIxMTExMTU1NTU1IiwiaWF0IjoxNzEyODk3NDg1LCJleHAiOjE3MTI5ODM4ODV9.bKrKYDkV1BWyfv6hglNoZ0EKy6jqg1AdMoY22FyA6i4"]
      },
      dataType: 'json',
      success: function (res) {
        self.setData({
          count: res.data // Set the response value in the 'count' data property
        });
        // console.log("12344", self.data.count); // Access 'count' using 'self.data.count'
      },
      fail: function (res) {
        my.alert({
          content: 'fail'
        });
      },

    });


  },
  transactionAPI() {
    const table = this;
    const selectedcategory=this.dataselectedcategory
    if(!selectedcategory){
      my.request({
        url: 'http://52.51.249.84:8080/api/app/transactions',
        method: 'GET',
        headers: {
          "authorization": ["Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI2NTk2NTU5MGE3OWIxYjBjMDMwMzJiOTkiLCJzdWIiOiIxMTExMTU1NTU1IiwiaWF0IjoxNzEyODk3NDg1LCJleHAiOjE3MTI5ODM4ODV9.bKrKYDkV1BWyfv6hglNoZ0EKy6jqg1AdMoY22FyA6i4"]
        },
        dataType: 'json',
        success: function (res) {
          table.setData({
            transactionData: res.data // Set the response value in the 'count' data property
          });
          console.log("12344", table.data); // Access 'count' using 'self.data.count'
        },
        fail: function (res) {
          my.alert({
            content: 'transactionfail'
          });
        },
  
      });
  
    }
    else{
      this.onProviderCellTap()
    }
   
  },
  sharePoints(e) {
    this.setData({
      points: parseInt(e.detail.value),
    });
    console.log("e value", this);

  },
  sharePointsphone(e) {
    this.setData({
      phoneNumber: parseInt(e.detail.value),
    });
    console.log("e value", this);

  },
  RequestsharePoint() {
    const self = this;
    const pointsdata = this.data.points;
    const ShareNumber = this.data.phoneNumber;
    const merchantId = this.data.transactionData[0].merchantId;
    console.log("e value", merchantId);
    my.request({
      url: 'http://52.51.249.84:8080/api/app/sharePoints',
      method: 'post',
      data: {
        points: pointsdata,
        phoneNumber: ShareNumber,
        merchantId: merchantId
      },
      headers: {
        "authorization": ["Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI2NTk2NTU5MGE3OWIxYjBjMDMwMzJiOTkiLCJzdWIiOiIxMTExMTU1NTU1IiwiaWF0IjoxNzEyODk3NDg1LCJleHAiOjE3MTI5ODM4ODV9.bKrKYDkV1BWyfv6hglNoZ0EKy6jqg1AdMoY22FyA6i4"]
      },
      dataType: 'json',
      success: function (res) {
        self.setData({
          count: res.data,
        
        });
        my.showToast({
          type: 'success',
          content: 'Successfully Shared your Point',
          duration: 3000,
    
        });
        my.navigateTo({
          url: '/pages/index/index'
        })
        // console.log("12344", self.data.count); // Access 'count' using 'self.data.count'
      },
      fail: function (res) {
        my.alert({
          content: 'fail'
        });
      },

    });


  },
deleteMercentreward() {
    const self = this;
  
    const merchantId = this.data.transactionData[0].merchantId;
    console.log("e value", merchantId);
    my.request({
      url: `http://52.51.249.84:8080/api/app/reward/${merchantId}`,
      method: 'delete',
     
      headers: {
        "authorization": ["Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI2NTk2NTU5MGE3OWIxYjBjMDMwMzJiOTkiLCJzdWIiOiIxMTExMTU1NTU1IiwiaWF0IjoxNzEyMTM0Njc2LCJleHAiOjE3MTIyMjEwNzZ9.PZMEJD1XwsacezBE-noy_0GGJYpZXgcbVHaIVlnDUgk"]
      },
      dataType: 'json',
      success: function (res) {
        self.setData({
          count: res.data,
        
        });
        my.navigateTo({
          url: '/pages/index/index'
        })
        // console.log("12344", self.data.count); // Access 'count' using 'self.data.count'
      },
      fail: function (res) {
        my.alert({
          content: 'fail'
        });
      },

    });


  },
  userinfo() {
    const self = this;
    my.request({
      url: `http://52.51.249.84:8080/api/app/userProfile`,
      method: 'GET',
     
      headers: {
        "authorization": ["Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI2NTk2NTU5MGE3OWIxYjBjMDMwMzJiOTkiLCJzdWIiOiIxMTExMTU1NTU1IiwiaWF0IjoxNzEyODk3NDg1LCJleHAiOjE3MTI5ODM4ODV9.bKrKYDkV1BWyfv6hglNoZ0EKy6jqg1AdMoY22FyA6i4"]
      },
      dataType: 'json',
      success: function (res) {
        self.setData({
          userProfile: res.data,
        
        });
      
        // console.log("12344", self.data.count); // Access 'count' using 'self.data.count'
      },
      fail: function (res) {
        my.alert({
          content: 'fail'
        });
      },

    });


  },
})