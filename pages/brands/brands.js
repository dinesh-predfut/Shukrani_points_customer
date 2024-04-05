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
    this.brandsListDataAPI()
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
    reviewOn:false,
    array: ['Mlimani city1', 'Mlimani city2', 'Mlimani city3', 'Mlimani city4'],
    index: 0,
    brandsData:[],
    brandsSearchResult:[],
    isSearch: false,
    getMerchantDetails:[],
    pickerSelectedLocation:null
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
      categoryOn:false,
      rewardsOn:false,
      menuOn:false,
      reviewOn:false
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
  onCategoryModalClick(){
    this.setData({
      categoryOn:!this.data.categoryOn
    })
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
  onReviewModalClick(){
    this.setData({
      reviewOn:true
    })
  },
  bindPickerChange(e) {
    console.log('picker sends selection change, carried value ', e.detail.value);
    const index = e.detail.value;
    const selectedLocation = this.data.getMerchantDetails.locations[index]
    console.log('selectedLocation -=-=-=->>> ', selectedLocation);
    this.setData({
      pickerSelectedLocation: selectedLocation,
    });
  },
  onProviderCellTap(e, props) {
    console.log('e on select -=-=>>> ', e);
    console.log('props on select -=-=>>> ', props);
    this.getMerchantDetailsAPI(props.provider.merchantId)
    // this.setData({
    //   // showTop: true,
    //   modalOpened: true,
    // });
    // const { provider } = props
    // this.setData({ providerName: provider.name })
  },
  onSearchInput(e) {
    const searchKey = e.detail.value || '';
    const lowerCaseSearchKey = searchKey.toLowerCase();

    const filtered = this.data.brandsData.filter(brandsData => {
      // console.log('brandsData in filtered --- ', brandsData);
      const lowerCaseTransactionName = brandsData.merchantName.toLowerCase();
      return lowerCaseTransactionName.indexOf(lowerCaseSearchKey) !== -1;
    });
    console.log('filtered data ----> ', filtered);

    if (searchKey) {
      this.setData({
        brandsSearchResult: filtered,
        isSearch: true,
      });
    } else {
      this.setData({
        brandsSearchResult: this.data.brandsData, // Assuming you want to reset to the original 'transactionData'
        isSearch: false,
      });
    }
  },

  // open Direction in the MAP
  openLocation(){
    console.log('checking alrady selected location ---->>> ', this.data.pickerSelectedLocation);
    console.log('final location ---->>> ', this.data.pickerSelectedLocation.location);
    if(this.data.pickerSelectedLocation){
      my.openLocation({
        name: 'Selected Location',
        address: this.data.pickerSelectedLocation.location,
        scale: 18
      });      
    }else{
      my.alert('Please select any location first!')
    }
  },

  // API CALL

  brandsListDataAPI() {
    const table = this;
    my.request({
      url: 'http://52.51.249.84:8080/api/app/getRewardDataByBrand',
      method: 'GET',
      // headers: { "authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI2NTdhNmZlNWQ4MGE0YTNiZTRhYTQ5MjQiLCJzdWIiOiJyYW5qaXRoMTdAZ21haWwuY29tIiwiaWF0IjoxNzExOTQ2ODI1LCJleHAiOjE3MTIwMzMyMjV9.krBSnWOSXDxx3aWQ5VBlbV8Lj3rxxYyo0CV_X4J8B6g" },
      headers: { "authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI2NjBmODU1OTZkZWQzZTA2ZjMyNDY4ZjUiLCJzdWIiOiIxMTExMTY2NjY2IiwiaWF0IjoxNzEyMjkzMjc3LCJleHAiOjE3MTIzNzk2Nzd9.ISdlTfDKelEeQt0Pj3omEuYgoMklP-xlqdzTLSJohHU" },
      dataType: 'json',
      success: function (res) {
        table.setData({
          brandsData: res.data // Set the response value in the 'count' data property
        });
        console.log("brandsData checking ", table.data.brandsData); // Access 'count' using 'self.data.count'
      },
      fail: function (res) {
        my.alert({ content: 'fail...!' });
      },
    });
  },
  
  getMerchantDetailsAPI(merchantId) {
    console.log('merchantId in API -=-=-=->>'  , merchantId);
    const table = this;
    my.request({
      // url: 'http://52.51.249.84:8080/api/app/getRewardDataByBrand', -- http://52.51.249.84:8080/api/auth/getMerchantDetail?merchantId=654d39af67b2c15399e0a0d8
      url: `http://52.51.249.84:8080/api/auth/getMerchantDetail?merchantId=${merchantId}`,
      method: 'GET',
      // headers: { "authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI2NTdhNmZlNWQ4MGE0YTNiZTRhYTQ5MjQiLCJzdWIiOiJyYW5qaXRoMTdAZ21haWwuY29tIiwiaWF0IjoxNzExOTQ2ODI1LCJleHAiOjE3MTIwMzMyMjV9.krBSnWOSXDxx3aWQ5VBlbV8Lj3rxxYyo0CV_X4J8B6g" },
      headers: { "authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI2NjBmODU1OTZkZWQzZTA2ZjMyNDY4ZjUiLCJzdWIiOiIxMTExMTY2NjY2IiwiaWF0IjoxNzEyMjkzMjc3LCJleHAiOjE3MTIzNzk2Nzd9.ISdlTfDKelEeQt0Pj3omEuYgoMklP-xlqdzTLSJohHU" },
      dataType: 'json',
      success: function (res) {        
        table.setData({
          getMerchantDetails: res.data, // Set the response value in the 'count' data property
          modalOpened: true,          
          pickerSelectedLocation: res.data.locations[0] // Set the default selected location to the first item in the locations array
        });
        console.log("getMerchantDetails checking ", table.data.getMerchantDetails); // Access 'count' using 'self.data.count'
      },
      fail: function (res) {
        my.alert({ content: 'fail...!' });
      },
    });
  }
});
