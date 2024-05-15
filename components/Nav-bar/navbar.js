Component({
  mixins: [],
  data: {},
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
      console.info("Image Loaded")
    }
   

  }
});