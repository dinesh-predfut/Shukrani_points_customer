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
 
    
  methods: {
    loadImage(e) {
      this.setData({
        rewards: app.translate("rewards"),
        redeem: app.translate("redeem"),
        brands: app.translate("brands"),
        
      }); 
      console.info("Image Loaded")
    },
    changeIconColor(element) {
      // Get all icon elements
      const icons = document.querySelectorAll('.nav-icon');
    
      // Reset all icon colors to their default color
      icons.forEach(icon => {
        icon.style.fill = ''; // Reset to default color
      });
    
      // Change the color of the tapped icon
      const icon = element.querySelector('.nav-icon');
      icon.style.fill = 'red'; // Change color to red (or any color you prefer)
    }
    
   

  }
});