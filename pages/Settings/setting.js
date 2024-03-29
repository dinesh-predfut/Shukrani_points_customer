import providers from '/data/providers'


Page({
  changePin: false,
  changePinOTP: false,
  ShowchangePNumber: false,
  ShowTermsandconditoins: false,
  ShowPrivacyandPolicy:false,
  Showabout:false,

  mixins: [],
  data: {
    providers,
    providersSearchResult: [],
    isSearch: false,
    imageUrl:""

  },

  didMount() {},
  didUpdate() {},
  didUnmount() {},
  onLoad(query) {
    // Page load
    console.info(`Page onLoad witsh query`, providers);
    this.setData({
      providersSearchResult: this.data.providers
    })
  },
  onReady() {},
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
  showPinOTP() {
    this.setData({
      changePinOTP: true,
      changePin: false

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
  ChangePhonenumber() {
    this.setData({
      ShowchangePNumber: true


    })
  },
  closePhoneNumberchange() {
    this.setData({
      ShowchangePNumber: false


    })
  },
  openChangenumberOTP() {
    this.setData({
      ShowchangePNumberOTP: true


    })
  },
  closeChangeNumberOTP() {
    this.setData({
      ShowchangePNumberOTP: false


    })
  },
  phoneNumberSavebtn() {
    my.showToast({
      type: 'success',
      content: 'Successfully change Phone Number',
      duration: 3000,

    });

    this.setData({
      ShowchangePNumberOTP: false,
      ShowchangePNumber: false



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
        const tempFilePaths = res.apFilePaths;
        // Assume you want to upload only one image
        const tempFilePath = tempFilePaths[0];
        // Display the chosen image 
        this.setData({
          imageUrl: tempFilePath,
          Showchangeprofilepicture: false,

        });
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
  termsandconditionBtn(){
    this.setData({
      ShowTermsandconditoins: true,
     
    })
  },
  privacyandpolicybtn(){
    this.setData({
     
      ShowPrivacyandPolicy:true
    })
  },
  aboutinfoBtn(){
    
    this.setData({
     
      Showabout:true
    })
  },
  closeconditions(){
    this.setData({
     
      ShowTermsandconditoins:false
    })
  },
  closepprivacypolicy(){
    this.setData({
     
      ShowPrivacyandPolicy:false
    })
  },
  closeabout(){
    this.setData({
     
      Showabout:false
    })
  },
  opendelect(){
    this.setData({
     
      showDelect:true
    })
  },
  closedelectpopup(){
    this.setData({
     
      showDelect:false
    })
  }


})