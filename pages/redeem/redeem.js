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
    modalOpened: true,
    nextPage : false,
    makePayment: false,
    paymentSuccess:false,
    reviewOn:false,
    redeemPoint:false,
    redeemPin:false,
    payCash:false,
    payPin:false,
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
    index: 0,
    amountInput: '',
    lipaNambaInput: '',
    getRedeemMerchantDetails:[],
    phoneNumberInput: '',
    pinInput:'',
    paymentSuccessDetails:[],
    rating:0,
    stars: [
      "/assets/star.svg",
      "/assets/star.svg",
      "/assets/star.svg",
      "/assets/star.svg",
      "/assets/star.svg"
    ]
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
    nextPage:false,
    makePayment:false,
    paymentSuccess:false,
    reviewOn:false,
    redeemPoint:false,
    redeemPin:false,
    payCash:false,
    payPin:false,
    amountInput:'',
    lipaNambaInput:''
  });
  },
  nextScreen(lipaNambaInput) {
    console.log('open clicked ---- ', lipaNambaInput)
    // this.setData({
    //   nextPage: true,
    // });

    const table = this;
    my.request({
      url: `http://52.51.249.84:8080/api/auth/getMerchantDetail?rewardNumber=${lipaNambaInput}`,
      method: 'GET',
      headers: { "authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI2NjBmODU1OTZkZWQzZTA2ZjMyNDY4ZjUiLCJzdWIiOiIxMTExMTY2NjY2IiwiaWF0IjoxNzEyNTUxNjI5LCJleHAiOjE3MTI2MzgwMjl9.nNSUnganz3sYdTmc79eCs4TZTDo2b9lAXgWPxrbQ92c" },
      dataType: 'json',
      success: function (res) {
        table.setData({
          getRedeemMerchantDetails: res.data, // Set the response value in the 'count' data property
          nextPage: true,
          // pickerSelectedLocation: res.data.locations[0] // Set the default selected location to the first item in the locations array
        });
        console.log("getRedeemMerchantDetails checking ", table.data.getRedeemMerchantDetails); // Access 'count' using 'self.data.count'
      },
      fail: function (res) {
        my.alert({ content: 'fail...!' });
      },
    });
  },
  makePaymentModalClick() {
  console.log('open clicked')
  this.setData({
    makePayment: true,
  });
  },
  payCashModalClick() {
  console.log('open clicked')
  this.setData({
    payCash: true,
  });
  },
  payPinModalClick() {
  console.log('open clicked')
  this.setData({
    payPin: true,
  });
  },
  validatePin(e) {
    const pinInput = e.detail.value;    

    // Regular expression to match only digits
    const digitRegex = /^\d+$/;

    if (!digitRegex.test(pinInput) || pinInput.length !== 4) {
      my.showToast({
        content: 'PIN must be exactly 4 digits',
        type: 'none'
      });
    } else {
      // Update the pinInput in the component's data
      this.setData({ pinInput: pinInput });
    }
  },
  // Verify PIN API & MAKE PAYMENT API CALL
  paymentSuccessModalClick() {
    const pinInput = this.data.pinInput;
    console.log('pinInput --- >> ', pinInput);

    if (!pinInput || pinInput.length !== 4) {
      my.showToast({
        content: 'Please enter a 4-digit PIN',
        type: 'none'
      });
      return;
    } else {
      console.log('success');

      const table = this;
      my.request({
        url: 'http://52.51.249.84:8080/api/app/verifyPin',
        method: 'POST',
        headers: { "authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI2NjBmODU1OTZkZWQzZTA2ZjMyNDY4ZjUiLCJzdWIiOiIxMTExMTY2NjY2IiwiaWF0IjoxNzEyNjM5MDA1LCJleHAiOjE3MTI3MjU0MDV9.zBBSUfIzVmxaWHj06b2CN7pQJoPhvk2dzGcztXIW7W4" },
        dataType: 'json',
        data:{
          pin:pinInput
        },
        success: function (res) {          
          console.log("Success pin ", res); // Access 'count' using 'self.data.count'
          table.makePaymentAPICall();
        },
        fail: function (res) {
          my.alert({ content: 'fail...!' });
        },
      });
    }
  // this.setData({
  //   paymentSuccess: true,
  // });
   
  },
  makePaymentAPICall(){
    console.log('merchantID --- ', this.data.getRedeemMerchantDetails.merchantId);
    console.log('amount --- ', this.data.amountInput);
    console.log('phone number --- ', this.data.phoneNumberInput);
    const table = this;
    my.request({
      url: 'http://52.51.249.84:8080/api/app/makePayment',
      method: 'POST',
      headers: { "authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI2NjBmODU1OTZkZWQzZTA2ZjMyNDY4ZjUiLCJzdWIiOiIxMTExMTY2NjY2IiwiaWF0IjoxNzEyNjM5MDA1LCJleHAiOjE3MTI3MjU0MDV9.zBBSUfIzVmxaWHj06b2CN7pQJoPhvk2dzGcztXIW7W4" },
      dataType: 'json',
      data: {
        merchantId: table.data.getRedeemMerchantDetails.merchantId,
        amount: table.data.amountInput,
        phoneNumber: table.data.phoneNumberInput
      },
      success: function (res) {        
        console.log("Success makePyament ", res); // Access 'count' using 'self.data.count'
        table.setData({
          paymentSuccess: true,
          paymentSuccessDetails: res.data
        });
      },
      fail: function (res) {
        my.alert({ content: 'Payment fail...!' });
      },
    });
  },

  reviewModalClick() {
  console.log('open clicked')
  this.setData({
    reviewOn: true,
  });
  },  
  redeemPinModalClick() {
  console.log('open clicked')
  this.setData({
    redeemPin: true,
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
  onAmountInput(e) {
    const value = e.detail.value.replace(/[^\d]/g, ''); // Replace non-numeric characters with an empty string
    this.setData({
      amountInput: value
    });
  },
  onLipaNambaInput(e) {
    const value = e.detail.value.replace(/[^\d]/g, ''); // Replace non-numeric characters with an empty string
    this.setData({
      lipaNambaInput: value
    });
  },
  validateInputs() {
    const { amountInput, lipaNambaInput } = this.data;

    if (!amountInput || !lipaNambaInput) {
      my.showToast({
        content: 'Please fill in all fields',
        type: 'none'
      });
      return;
    }

    // Perform additional validation if needed

    // If all validations pass, proceed to the next screen
    this.nextScreen(lipaNambaInput);
  },

  // Phone number modal and validation
    phoneNumberInputInput(e) {
      this.setData({
        phoneNumberInput: e.detail.value
      });
    },
  redeemPointModalClick() {
    console.log('open clicked -- ', this.data)
    
    const phoneNumber = this.data.phoneNumberInput.trim()
    console.log('phone number checking on click -=-=->>> ', phoneNumber);

    // Regular expression to match a valid mobile phone number
    const phoneRegex = /^\d{10}$/;

    console.log('!phoneRegex.test(phoneNumber) checking on click -=-=->>> ', !phoneRegex.test(phoneNumber));

    if (!phoneRegex.test(phoneNumber)) {
      my.showToast({
        content: 'Please enter a valid mobile phone number',
        type: 'none'
      });
      return;
    } else {
      if (this.data.payCash) {
        this.setData({
          paymentSuccess: true,
        });
      } else if (this.data.payPin) {
        this.setData({
          redeemPin: true,
        });
      } else {
        this.setData({
          redeemPoint: true,
        });
      }
    }

    console.log('Phone number is valid:', phoneNumber);
    // Proceed with the rest of your logic
  },

  // Review Rating star
  handleRating(e) {
    const index = e.target.dataset.index; // Get the index of the clicked star
    console.log('checking index --- ', index);

    // Update the rating in the component's data
    this.setData({ rating: parseInt(index) + 1 });

    // Update the star images based on the rating
    const updatedStars = this.data.stars.map((star, i) => {
      return i <= index ? "/assets/star_filled.svg" : "/assets/star.svg";
    });

    this.setData({ stars: updatedStars });
  }
});
