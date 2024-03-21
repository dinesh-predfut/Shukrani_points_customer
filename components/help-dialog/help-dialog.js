Component({
  methods: {
     saveDialogRef(ref) {
      this.dialogRef = ref
    },
    show() {
      this.dialogRef.show()
    },
    hide() {
      this.dialogRef.hide()
    },
  },
});