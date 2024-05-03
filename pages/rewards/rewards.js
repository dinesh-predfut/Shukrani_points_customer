import providers from '/data/providers'
import {
  getLanguage,
  translate
} from "../translation"

const app = getApp();

Page({

  mixins: [],
  data: {
    hello: '',
    brands: '',
    currentLanguage: '',
    providers,
    count: [],
    transactionData: [],
    providersSearchResult: [],
    providerName: [],
    userProfile: [],
    CategoryFilter: [],
    selectedCategory: [],
    categoryrespon: [],
    isSearch: false,
    sharepointsvalue: [],
    array: ['Category', 'Bakery', 'Bar', 'Beauty'],
    objectArray: [{
        id: 0,
        name: "category",
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
        name: 'Bookstore',
      },
      {
        id: 5,
        name: 'Business_category',
      },
      {
        id: 6,
        name: 'Butcheries',
      },
      {
        id: 7,
        name: 'Coffee Shops',
      },
      {
        id: 8,
        name: 'Cosmetics',
      },
      {
        id: 9,
        name: 'Decor',
      },
      {
        id: 10,
        name: 'Electronics',
      },
      {
        id: 11,
        name: 'fashion',
      },
      {
        id: 12,
        name: 'Fast Food',
      },
      {
        id: 13,
        name: 'Florists',
      },
      {
        id: 14,
        name: 'Groceries',
      }, {
        id: 15,
        name: 'Gym',
      },
      {
        id: 16,
        name: 'Hotel',
      },
      {
        id: 17,
        name: 'Laundry',
      },
      {
        id: 18,
        name: 'Liquor_stores',
      },
      {
        id: 19,
        name: 'Pets',
      },
      {
        id: 20,
        name: 'Resort',
      },
      {
        id: 21,
        name: 'Restaurant',
      },
      {
        id: 22,
        name: 'Saloon',
      },
      {
        id: 23,
        name: 'Shopping',
      }, {
        id: 24,
        name: 'Spa',
      },
      {
        id: 25,
        name: 'Supermarkets',
      },
      {
        id: 26,
        name: 'Travel',
      },
      {
        id: 27,
        name: 'Yoga',
      },
      {
        id: 28,
        name: 'business_category',
      },

    ],
    spanishOptions: [{
      id: 0,
      name: "category",
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
      name: 'Urembo',
    },
    {
      id: 4,
      name: 'Duka la vitabu',
    },
    {
      id: 5,
      name: 'Aina ya Biashara',
    },
    {
      id: 6,
      name: 'Maduka ya nyama',
    },
    {
      id: 7,
      name: 'Coffee Shops',
    },
    {
      id: 8,
      name: 'Vipodozi',
    },
    {
      id: 9,
      name: 'Samani',
    },
    {
      id: 10,
      name: 'Vifaa vya umeme',
    },
    {
      id: 11,
      name: 'Mitindo',
    },
    {
      id: 12,
      name: 'Wauza maua',
    },
    {
      id: 13,
      name: 'Florists',
    },
    {
      id: 14,
      name: 'Groceries',
    }, {
      id: 15,
      name: 'Gym',
    },
    {
      id: 16,
      name: 'Hoteli',
    },
    {
      id: 17,
      name: 'Dobi',
    },
    {
      id: 18,
      name: 'Maduka ya pombe',
    },
    {
      id: 19,
      name: 'Pets',
    },
    {
      id: 20,
      name: 'Mapumziko',
    },
    {
      id: 21,
      name: 'Mgahawa',
    },
    {
      id: 22,
      name: 'Saluni',
    },
    {
      id: 23,
      name: 'Manunuzi',
    }, {
      id: 24,
      name: 'Spa',
    },
    {
      id: 25,
      name: 'Maduka makubwa',
    },
    {
      id: 26,
      name: 'Usafiri',
    },
    {
      id: 27,
      name: 'Yoga',
    },
    
    ],
    arrIndex: 0,
    index: 0
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  onLoad(query) {
    this.setData({
      hello: app.translate("hello"),
      brands: app.translate("brands") 
    });
    const language = app.globalData.language
    this.setData({
      currentLanguage: language
    })
    console.info(`Page onLoad witsh query`, language);
    this.userinfo()
    this.setData({
      providersSearchResult: this.data.providers,
      // currentLanguage:language  
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
  
  setLanguage(language) {
    this.setData({
      currentLanguage: language,
      greeting: translate("greeting", language),
      farewell: translate("farewell", language)
    });
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
        "authorization": ["Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI2NTk2NTU5MGE3OWIxYjBjMDMwMzJiOTkiLCJzdWIiOiIxMTExMTU1NTU1IiwiaWF0IjoxNzE0NzE0MTY1LCJleHAiOjE3MTQ4MDA1NjV9.dS82jCyPtb7CJrBjRRkgvkYcKgdrWQdFa69pdi9czjw"]
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
        "authorization": ["Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI2NTk2NTU5MGE3OWIxYjBjMDMwMzJiOTkiLCJzdWIiOiIxMTExMTU1NTU1IiwiaWF0IjoxNzE0NzE0MTY1LCJleHAiOjE3MTQ4MDA1NjV9.dS82jCyPtb7CJrBjRRkgvkYcKgdrWQdFa69pdi9czjw"]
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
    const selectedcategory = this.dataselectedcategory
    if (!selectedcategory) {
      my.request({
        url: 'http://52.51.249.84:8080/api/app/transactions',
        method: 'GET',
        headers: {
          "authorization": ["Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI2NTk2NTU5MGE3OWIxYjBjMDMwMzJiOTkiLCJzdWIiOiIxMTExMTU1NTU1IiwiaWF0IjoxNzE0NzE0MTY1LCJleHAiOjE3MTQ4MDA1NjV9.dS82jCyPtb7CJrBjRRkgvkYcKgdrWQdFa69pdi9czjw"]
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

    } else {
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
        "authorization": ["Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI2NTk2NTU5MGE3OWIxYjBjMDMwMzJiOTkiLCJzdWIiOiIxMTExMTU1NTU1IiwiaWF0IjoxNzE0NzE0MTY1LCJleHAiOjE3MTQ4MDA1NjV9.dS82jCyPtb7CJrBjRRkgvkYcKgdrWQdFa69pdi9czjw"]
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
        "authorization": ["Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI2NTk2NTU5MGE3OWIxYjBjMDMwMzJiOTkiLCJzdWIiOiIxMTExMTU1NTU1IiwiaWF0IjoxNzE0NzE0MTY1LCJleHAiOjE3MTQ4MDA1NjV9.dS82jCyPtb7CJrBjRRkgvkYcKgdrWQdFa69pdi9czjw"]
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