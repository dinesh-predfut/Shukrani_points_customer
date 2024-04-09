import providers from '/data/providers'


Page({
  changePin: false,
  changePinOTP: false,
  ShowchangePNumber: false,
  ShowTermsandconditoins: false,
  ShowPrivacyandPolicy: false,
  Showabout: false,

  reenderpin: "",
  mixins: [],
  data: {
    providers,
    providersSearchResult: [],
    isSearch: false,
    imageUrl: "",
    userProfile: [],
    phoneNumber: [],
    changenumberOTP: []
  },

  didMount() {},
  didUpdate() {},
  didUnmount() {},
  onLoad(query) {
  
    // Page load
    console.info(`Page onLoad witsh query`, providers);
    this.setData({
      providersSearchResult: this.data.providers,
      userProfile: this.data.userProfile
    })
  },
  onReady() {},
  onShow() {
    // Page display
    console.log("12344", this.data);
    this.userinfo();
    this.UploadProfilePic()
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
  showPin() {
    this.setData({
      changePin: true

    })

  },


  closewithdraw() {
    this.setData({
      changePin: false
    })
  },
  closewithdrawOTP() {
    this.setData({
      changePin: false,
      changePinOTP: false,

    })
  },
  SuccessNext() {

    my.showToast({
      type: 'success',
      content: 'Success Pin Change Successfully',
      duration: 3000,

    });
    this.setData({
      changePin: false,
      changePinOTP: false,

    })
  },
  showChangePhonenumber() {
    this.setData({
      ShowchangePNumber: true


    })
  },
  closePhoneNumberchange() {
    this.setData({
      ShowchangePNumber: false


    })
  },


  closeChangeNumberOTP() {
    this.setData({
      ShowchangePNumberOTP: false


    })
  },

  openprofilepicturechange() {
    this.setData({
      Showchangeprofilepicture: true,




    })
  },
  choosephoto(e) {
    my.chooseImage({
      count: 1,
      success: (res) => {
        success: (res) => {
          const imagePath = res.apFilePaths[0];
          UploadProfilePic(imagePath);
        }
      
      },
      fail: (error) => {
        console.error('Failed to choose image', error);
      }
    });
  },
  closeprofilechange() {
    this.setData({
      Showchangeprofilepicture: false,

    })
  },
  termsandconditionBtn() {
    this.setData({
      ShowTermsandconditoins: true,

    })
  },
  privacyandpolicybtn() {
    this.setData({

      ShowPrivacyandPolicy: true
    })
  },
  aboutinfoBtn() {

    this.setData({

      Showabout: true
    })
  },
  closeconditions() {
    this.setData({

      ShowTermsandconditoins: false
    })
  },
  closepprivacypolicy() {
    this.setData({

      ShowPrivacyandPolicy: false
    })
  },
  closeabout() {
    this.setData({

      Showabout: false
    })
  },
  opendelect() {
    this.setData({

      showDelect: true
    })
  },
  closedelectpopup() {
    this.setData({

      showDelect: false
    })
  },
  reenterPin(e) {
    this.setData({
      reenderpin: parseInt(e.detail.value),
    });
    console.log("e value", e);
  },
  changenumber(e) {
    this.setData({
      phoneNumber: parseInt(e.detail.value),


    })
    console.log("e value", e);

  },
  changenumbrtOTP(e) {
    this.setData({
      changenumberOTP: parseInt(e.detail.value),


    })
    console.log("e value", e);

  },
  enterPin(e) {
    this.setData({
      enderpin: parseInt(e.detail.value),
    });
    console.log("e value", e);
  },
  enterOTP(e) {
    this.setData({
      OTP: parseInt(e.detail.value),
    });
    console.log("e value", e);
  },

   UploadProfilePic( imagePath) {
  //   const imageFilePath = "/C:/Users/Arun/Downloads/menphoto.jpg";
  //   const self = this;
  //   const pointsdata = this.data.imageUrl;
  //   const formData = {
  //     uri: pointsdata,
  //     type: 'image/jpeg',
  //     name: 'photo.jpg'
  //   }
    
  //   // console.log("e value", pointsdata);
  //   my.request({
  //     url: 'http://52.51.249.84:8080/api/app/userProfile/upload-image',
  //     method: 'post',


  //     body: formData,

  //     headers: {
  //       "authorization": ["Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI2NTk2NTU5MGE3OWIxYjBjMDMwMzJiOTkiLCJzdWIiOiIxMTExMTU1NTU1IiwiaWF0IjoxNzEyNjM1ODY3LCJleHAiOjE3MTI3MjIyNjd9.AKnJjYkN4f8ZVcSnFVghjS_ieBHo_g94HTIvdTK8obk"]
  //     },
  //     dataType: 'json',
  //     success: function (res) {
  //      console.log('Image uploaded successfully');

  //       // Access 'count' using 'self.data.count'
  //     },
  //     fail: function (res) {
  //       my.alert({
  //         content: 'fail'
  //       });
  //     },

  //   });
  my.uploadFile({
    url: 'http://52.51.249.84:8080/api/app/userProfile/upload-image',
    fileType: 'image',
    fileName: 'image',
    filePath: imagePath,
    header: {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI2NTk2NTU5MGE3OWIxYjBjMDMwMzJiOTkiLCJzdWIiOiIxMTExMTU1NTU1IiwiaWF0IjoxNzEyNjM1ODY3LCJleHAiOjE3MTI3MjIyNjd9.AKnJjYkN4f8ZVcSnFVghjS_ieBHo_g94HTIvdTK8obk',
    },
    success: (res) => {
      console.log('Image uploaded successfully');
    },
    fail: (error) => {
      console.error('Failed to upload image:', error);
    },
  });

  },

  chaangePin() {
    const self = this;
    const changePin = this.data.reenderpin;

    console.log("e value", changePin);
    my.request({
      url: 'http://52.51.249.84:8080/api/app/resetnewpin',
      method: 'put',
      data: {
        newpin: changePin
      },

      headers: {
        "authorization": ["Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI2NTk2NTU5MGE3OWIxYjBjMDMwMzJiOTkiLCJzdWIiOiIxMTExMTU1NTU1IiwiaWF0IjoxNzEyNjM1ODY3LCJleHAiOjE3MTI3MjIyNjd9.AKnJjYkN4f8ZVcSnFVghjS_ieBHo_g94HTIvdTK8obk"]
      },
      dataType: 'json',
      success: function (res) {
        self.setData({
          count: res.data,

        });
        self.setData({
          changePinOTP: true,
          changePin: false
        })
        my.alert({
          content: 'Pin Reset Successful'
        });
        // Access 'count' using 'self.data.count'
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
        "authorization": ["Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI2NTk2NTU5MGE3OWIxYjBjMDMwMzJiOTkiLCJzdWIiOiIxMTExMTU1NTU1IiwiaWF0IjoxNzEyNjM1ODY3LCJleHAiOjE3MTI3MjIyNjd9.AKnJjYkN4f8ZVcSnFVghjS_ieBHo_g94HTIvdTK8obk"]
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
  changePhonenumber() {

    const self = this;
    const changenumber = this.data.phoneNumber;
    const username = this.data.userProfile.userName

    console.log("12344", this.data);


    my.request({
      url: `http://52.51.249.84:8080/api/auth/generateOtp`,
      method: 'post',
      data: {
        phoneNumber: changenumber,
        userName: username

      },

      success: function (res) {
        self.setData({
          ShowchangePNumber: false,
          ShowchangePNumberOTP: true

        });

        // console.log("12344", self.data.count); // Access 'count' using 'self.data.count'
      },
      fail: function (res) {
        self.setData({
          ShowchangePNumber: false,
          ShowchangePNumberOTP: true

        });
      },

    });

  },
  finalChangenumber() {
    const self = this;
    const changenumberOTP = this.data.changenumberOTP;
    const username = this.data.userProfile.userName




    my.request({
      url: `http://52.51.249.84:8080/api/auth/validateOtp`,
      method: 'post',
      data: {
        otp: changenumberOTP,
        userName: username

      },

      success: function (res) {
        self.setData({
          ShowchangePNumberOTP: false,
          ShowchangePNumber: false

        });
        this.finalChangenumber()


        // console.log("12344", self.data.count); // Access 'count' using 'self.data.count'
      },
      fail: function (res) {
        // self.setData({
        //   ShowchangePNumber: false,
        //   ShowchangePNumberOTP:true

        // });
      },

    });

  },
  OTPvalidate() {
    const self = this;
    const changenumber = this.data.phoneNumber;




    my.request({
      url: `http://52.51.249.84:8080/api/app/userProfile/changePhoneNumber`,
      method: 'post',
      data: {
        phoneNumber: changenumber

      },
      headers: {
        "authorization": ["Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI2NTk2NTU5MGE3OWIxYjBjMDMwMzJiOTkiLCJzdWIiOiIxMTExMTU1NTU1IiwiaWF0IjoxNzEyNjM1ODY3LCJleHAiOjE3MTI3MjIyNjd9.AKnJjYkN4f8ZVcSnFVghjS_ieBHo_g94HTIvdTK8obk"]
      },

      success: function (res) {
        self.setData({
          ShowchangePNumberOTP: false,
          ShowchangePNumber: false

        });
        my.showToast({
          type: 'success',
          content: 'Successfully change Phone Number',
          duration: 3000,

        });
        // console.log("12344", self.data.count); // Access 'count' using 'self.data.count'
      },
      fail: function (res) {
        // self.setData({
        //   ShowchangePNumber: false,
        //   ShowchangePNumberOTP:true

        // });
      },

    });

  },
})