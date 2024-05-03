const app = getApp();
Component({
  mixins: [],
  data: {
    "rewards": "",
    "redeem": "",
    "brands": "",
  },
  onload() { 
    console.log("Component loaded");
    this.loadImage(); // Call loadImage when the component is loaded
  },
  props: {},
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  changeIconColor() {
    var navItems = document.getElementById("#redeem");
   
    navItems.classList.add('active');
  }
    ,
  methods: {
    loadImage(e) {
      this.setData({
        rewards: app.translate("rewards"),
        redeem: app.translate("redeem"),
        brands: app.translate("brands"),
        
      }); 
      console.info("Image Loaded")
    }
   

  }
});