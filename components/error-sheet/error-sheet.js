Component({
  mixins: [],
  data: {},
  props: {},
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    saveSheetRef(ref) {
      this.sheetRef = ref
    },
    show() {
      this.sheetRef.show()
    },
    hide() {
      this.sheetRef.hide()
    }
  },
});
