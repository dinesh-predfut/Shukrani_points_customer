Component({
  mixins: [],
  data: {
    "rewards": "",
    "redeem": "",
    "brands": "",
  },
  props: {},
  onload(){ 
    this.setData({
      rewards: app.translate("rewards"),
      redeem: app.translate("redeem")
    });
  },
  didMount() { }, 
  didUpdate() { },
  didUnmount() { }, 
  methods: {
    loadImage(e) {
      console.info("Image Loaded")
    },

    navigateToRewards() {
      console.info('clicked for rewards');
      my.navigateTo({ url: '/pages/rewards/rewards' }); // Adjust the URL based on your project structure
    },
    navigateToRedeem() {
      console.log('clicked redeem');  
      my.navigateTo({ url: '/pages/redeem/redeem' }); // Adjust the URL based on your project structure
    },
    navigateToBrands() {
      console.log('clicked brand screen');
      // const newLocal = '/pages/brands/brands';
      // my.switchTab({ url: newLocal }); // Adjust the URL based on your project structure
      my.navigateTo({ url: '/pages/brands/brands' }); // Adjust the URL based on your project structure
    },
    navigateToProfile() {
      my.navigateTo({ url: '/pages/Settings/setting' }); // Adjust the URL based on your project structure
    }
  }
});
