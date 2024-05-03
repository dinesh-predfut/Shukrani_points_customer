import providers from '/data/providers'
import base64Img from 'base64-img'
import base64url from 'base64-url'

const app = getApp();

Page({
  currentLanguage:"",
  changePin: false,
  changePinOTP: false,
  ShowchangePNumber: false,
  ShowTermsandconditoins: false,
  ShowPrivacyandPolicy: false,
  Showabout: false,
  showfaq: "false",

  reenderpin: "",
  mixins: [],
  data: {
    greeting: "",
    providers,
    showlanguageoption: false,
    providersSearchResult: [],
    isSearch: false,
    imageUrl: "",
    userProfile: [],
    phoneNumber: [],
    changenumberOTP: [],
    terms_condition:""
  },

  didMount() {},
  didUpdate() {},
  didUnmount() {},
  onLoad(query) {
    // this.onLoad()
    this.setData({ 
      terms_condition: app.translate("terms_condition"),
      farewell: app.translate("farewell")
    });
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


    this.userinfo();

    // this.UploadProfilePic();

    console.log("12344", this.data);
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
    console.log("12344ssss", this.data);
  },

  changelanguagebtn() {
    this.setData({
      showlanguageoption: true
    })
  },
  changeLanguageToenglish() {
    const newLanguage = 'en'// Toggle between English and Spanish for demonstration
    my.setStorage({
      key: 'language',
      data: {
        newLanguage:'en'
      },
      success: function() {
        my.navigateTo({
          url: '/pages/Settings/setting'
        })
      }
    });
    app.setLanguage(newLanguage);
    this.onLoad(); // Reload the current page to reflect the language change
  },
  changetoswahili() {
    const newLanguage = 'es'; // Toggle between English and Spanish for demonstration
    my.setStorage({
      key: 'language',
      data: {
        newLanguage:'es'
      },  
      success: function() {
        my.navigateTo({
          url: '/pages/Settings/setting'
        })
      }
    });
    app.setLanguage(newLanguage);
    this.onLoad(); // Reload the current page to reflect the language change
  },
  setLanguage(language) {
    // localStorage.setItem("preferredLanguage", language);
 
    this.setData({
      currentLanguage: language,
      terms_condition: translate("terms_condition", language),
      farewell: translate("farewell", language)
    });
  },
  closelanguagepopup() {
    this.setData({
      showlanguageoption: false
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
        const imagePath = res.apFilePaths[0];
        this.uploadProfilePic(imagePath);
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
  faqBtn() {
    this.setData({
      showfaq: true,

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

  async uploadProfilePic(imagePath) {
    try {
      my.showLoading({
        content: 'Uploading...',
      });

      const uploadResponse = await my.uploadFile({
        url: 'http://52.51.249.84:8080/api/app/userProfile/upload-image',
        fileType: 'image',
        fileName: 'image',
        filePath: imagePath,
        headers: {
          "authorization": ["Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI2NTk2NTU5MGE3OWIxYjBjMDMwMzJiOTkiLCJzdWIiOiIxMTExMTU1NTU1IiwiaWF0IjoxNzE0NzE0MTY1LCJleHAiOjE3MTQ4MDA1NjV9.dS82jCyPtb7CJrBjRRkgvkYcKgdrWQdFa69pdi9czjw"]
        },
      });

      if (uploadResponse.statusCode === 200) {
        const decodeData = await my.httpResponse({
          url: uploadResponse.apFilePath,
        });
        my.navigateTo({
          url: '/pages/Settings/setting'
        })
        const result = JSON.parse(decodeData.data);
        console.log("upload profile image response ==> ", decodeData);
        this.setData({
          imageUrl: result.imageUrl // Assuming 'imageUrl' is the property in the response containing the image URL
        });
        // Update UI or perform other actions as needed


      } else {
        // console.error('Failed to upload image. Status code: ', uploadResponse.statusCode);
        my.hideLoading();
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      my.hideLoading();
      my.showToast({
        content: 'Error uploading image',
        type: 'fail',
      });
      throw error;
    }
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
        "authorization": ["Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI2NTk2NTU5MGE3OWIxYjBjMDMwMzJiOTkiLCJzdWIiOiIxMTExMTU1NTU1IiwiaWF0IjoxNzE0NzE0MTY1LCJleHAiOjE3MTQ4MDA1NjV9.dS82jCyPtb7CJrBjRRkgvkYcKgdrWQdFa69pdi9czjw"]
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
        "authorization": ["Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI2NTk2NTU5MGE3OWIxYjBjMDMwMzJiOTkiLCJzdWIiOiIxMTExMTU1NTU1IiwiaWF0IjoxNzE0NzE0MTY1LCJleHAiOjE3MTQ4MDA1NjV9.dS82jCyPtb7CJrBjRRkgvkYcKgdrWQdFa69pdi9czjw"]
      },
      dataType: 'json',
      success: function (res) {
        self.setData({
          userProfile: res.data,

        });
        const imageResponse = res.data;
        // downloadimg()
        // console.log("12344", self.data.count); // Access 'count' using 'self.data.count'
      },
      fail: function (res) {
        my.alert({
          content: 'fail'
        });
      },

    });


  },
  downloadimg() {
    const imageDataId = this.data.userProfile.image;
    const base64urlImage = base64url.fromBase64(imageDataId);

    // Now `base64urlImage` contains the image in base64url format
    console.log("Base64URL encoded image:", base64urlImage);
    my.request({
      url: `http://52.51.249.84:8080/api/app/downloaduserimage/${imageDataId}`,
      method: 'get',
      headers: {
        'authorization': ['Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI2NTk2NTU5MGE3OWIxYjBjMDMwMzJiOTkiLCJzdWIiOiIxMTExMTU1NTU1IiwiaWF0IjoxNzE0NzE0MTY1LCJleHAiOjE3MTQ4MDA1NjV9.dS82jCyPtb7CJrBjRRkgvkYcKgdrWQdFa69pdi9czjw']
      },
      dataType: 'json',

      fail: function (res) {
        my.alert({
          content: 'fail'
        });
      },
      success: (res) => {
        // Assuming the response contains the image URL
        const imageUrl = res.data;
        // console.log("12344wwwww", this.data);
        // Set the image URL to the data
        this.setData({
          imageUrl: imageUrl
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
        "authorization": ["Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI2NTk2NTU5MGE3OWIxYjBjMDMwMzJiOTkiLCJzdWIiOiIxMTExMTU1NTU1IiwiaWF0IjoxNzE0NzE0MTY1LCJleHAiOjE3MTQ4MDA1NjV9.dS82jCyPtb7CJrBjRRkgvkYcKgdrWQdFa69pdi9czjw"]
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