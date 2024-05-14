import providers from '/data/providers'
import {
  getLanguage,
  translate
} from "../translation"

const app = getApp();

Page({

  mixins: [],
  data: {
    activeTab: 'projects' ,
    htmlContent: "",
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
    selectedmerchant:"",
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
    const htmlContent = "LIABILITY (DISCLAIMER)\n Shukurani Points will do our utmost to ensure that availability of the Shukurani Points Services will be uninterrupted and that transmissions will be error-free. However, due to the nature of the internet, this cannot be guaranteed. Also, your access to Shukurani Points Services may also be occasionally suspended or restricted to allow for repairs, maintenance, or the introduction of new facilities or services. Upon notification to its client Shukurani Points will attempt to limit the frequency and duration of any such suspension or restriction.\n\n Shukurani Points will not be responsible for (i) losses that were not caused by any breach on our part, or (ii) any business loss (including loss of profits, revenue, contracts, anticipated savings, data, goodwill, or wasted expenditure), or (iii) any loss caused by Fraud or misrepresentation, or (iv) any indirect or consequential losses that were not foreseeable to both you and us when you commenced using the Shukurani Points Services.\n\nEach product and description displayed on the platform is according to information received from the Merchant.\n\nThe sole responsibility of Shukurani Points is to facilitate the contractual process between buyer/deal seekers and deal owners/Merchant. Shukurani Points stands as an agent and therefore does not provide warrant, guarantee, or any kind of assurance on its services provided on the platform.\n\nDISPUTE SETTLEMENT\nAny dispute arising from the formation, validity, binding effect, interpretation of or the performance of the terms and conditions hereunder shall be resolved amicably by mediation. If mediation fails, the said dispute will be referred to Arbitration in the presence of an Arbitrator agreed by both parties and pursuant to the current arbitration rules. For the purpose of avoiding doubt, the place of mediation shall be within the United Republic of Tanzania, and the language for arbitration will be in English or Kiswahili upon the client’s choosing. The arbitration award shall be accepted as final and binding upon the Parties, and in any case where the complainant claims for damages, it should be limited to the value of the customer’s exposure to the transaction on the platform.\n\nAPPLICABLE LAW\nThese conditions are governed by and construed in accordance with the laws of the United Republic of Tanzania. We both agree to submit to the jurisdiction of the courts of Tanzania, which means that you may bring a claim to enforce your rights in connection with these Conditions of Sale in Tanzania.\n\nALTERATIONS TO SERVICE OR AMENDMENTS TO THE CONDITIONS OF USE\n Shukurani Points reserves the right to make changes to any Shukurani Points Services with notification to our client, policies, terms and conditions including these Conditions of Use, and Service Terms at any time. However, we will notify the customers of all the changes that have been made. You will be subject to the terms and conditions, policies and Conditions of Use in force at the time that you use the Shukurani Points Services. If any of these Conditions of Use is deemed invalid, void, or for any reason unenforceable, that condition will be deemed severable and will not affect the validity and enforceability of any remaining condition.\n\nWAIVER\nIf you breach these Conditions of Use and we take no action, Shukurani Points  will still be entitled to use our rights and remedies in any other situation where you breach these Conditions of Use.\n\n Shukurani Points’S CONTACT DETAILS\nThis App and website is owned and maintained by Pannecia Consulting Services limited.\nOff-Kimweri Road, Plot number 503/1, Block number G\nDar es salaam, Tanzania\nE-mail: info@shukurani.tz\nPhone: +255 748 007 966\nWhatsApp: +255 748 007 966',"
    this.setData({
      hello: app.translate("hello"),
      brands: app.translate("brands")
    });
    const language = app.globalData.language
    this.setData({
      currentLanguage: language
    })
    console.info(`Page onLoad witsh query`,  this.data.transactionData[0]);
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
      providerName: provider,
      selectedmerchant:provider.merchantId
    })
    console.log("provider",this.data.selectedmerchant);
    this.onLoad()
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
        "authorization": ["Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI2NTk2NTU5MGE3OWIxYjBjMDMwMzJiOTkiLCJzdWIiOiIxMTExMTU1NTU1IiwiaWF0IjoxNzE1NjgwODM0LCJleHAiOjE3MTU3NjcyMzR9.IwEyux0EQY8Ku66RuQZmKrqkjEYjG7iTbxpGBVu_uVQ"]
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
        "authorization": ["Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI2NTk2NTU5MGE3OWIxYjBjMDMwMzJiOTkiLCJzdWIiOiIxMTExMTU1NTU1IiwiaWF0IjoxNzE1NjgwODM0LCJleHAiOjE3MTU3NjcyMzR9.IwEyux0EQY8Ku66RuQZmKrqkjEYjG7iTbxpGBVu_uVQ"]
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
          "authorization": ["Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI2NTk2NTU5MGE3OWIxYjBjMDMwMzJiOTkiLCJzdWIiOiIxMTExMTU1NTU1IiwiaWF0IjoxNzE1NjgwODM0LCJleHAiOjE3MTU3NjcyMzR9.IwEyux0EQY8Ku66RuQZmKrqkjEYjG7iTbxpGBVu_uVQ"]
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
  getDataByPropertyValue(array, property, value) {
    for (const item of array) {
      if (item.hasOwnProperty(property) && item[property] === value) {
        return item; // Return the first object with the specified property and value
      }
    }
    return null; // Return null if no matching object is found
  },

  RequestsharePoint() {
    
    const self = this;
    const pointsdata = this.data.points;
    const ShareNumber = this.data.phoneNumber;
    const merchantId = this.data.selectedmerchant;
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
        "authorization": ["Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI2NTk2NTU5MGE3OWIxYjBjMDMwMzJiOTkiLCJzdWIiOiIxMTExMTU1NTU1IiwiaWF0IjoxNzE1NjgwODM0LCJleHAiOjE3MTU3NjcyMzR9.IwEyux0EQY8Ku66RuQZmKrqkjEYjG7iTbxpGBVu_uVQ"]
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
        "authorization": ["Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI2NTk2NTU5MGE3OWIxYjBjMDMwMzJiOTkiLCJzdWIiOiIxMTExMTU1NTU1IiwiaWF0IjoxNzE1NjgwODM0LCJleHAiOjE3MTU3NjcyMzR9.IwEyux0EQY8Ku66RuQZmKrqkjEYjG7iTbxpGBVu_uVQ"]
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