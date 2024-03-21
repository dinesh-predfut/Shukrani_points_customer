Component({
  mixins: [],
  data: {},
  props: {
    onTap: null,
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    onTap(e) {
      const { onTap } = this.props
      onTap && onTap(e)
    },
  },
});
