Component({
 
  mixins: [],
  data: {
    showTop: false,
  },
  props: {
    title: "PROVIDER NAME",
    providerName: "Provider Name", 
    
  },
  onPopupClose() {
    my.navigateBack()
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    onReset( ) {
      console.log(this.data.showTop)
      this.setData({
        showTop: false,
        
      });
    },
  },
});
