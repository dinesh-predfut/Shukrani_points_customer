Component({
  data: {
    array: ['China', 'USA', 'Brazil', 'Japan'],
    objectArray: [
      {
        id: 0,
        name: 'USA',
      },
      {
        id: 1,
        name: 'China',
      },
      {
        id: 2,
        name: 'Brazil',
      },
      {
        id: 3,
        name: 'Japan',
      },
    ],
    arrIndex: 0,
    index: 0
  },
  bindObjPickerChange(e) {
    console.log('picker sends selection change, carried value ', e.detail.value);
    this.setData({
      index: e.detail.value,
    });
  },
  bindObjPickerChange(e) {
    console.log('picker sends selection change, carried value ', e.detail.value);
    this.setData({
      arrIndex: e.detail.value,
    });
  },
});



 