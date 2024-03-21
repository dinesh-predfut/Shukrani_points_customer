Component({
  data: {
    isPopupOpen: false
  },
  props: {
    
  },
  didMount() { },
  didUpdate() { },
  didUnmount() { },
  methods: {
    openPopup() {
      this.setData({
        isPopupOpen: true
      });
    },
    closePopup() {
      this.setData({
        isPopupOpen: false
      });
    },
  }
});