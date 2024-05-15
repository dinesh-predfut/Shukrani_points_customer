


Page({
  mixins: [],
  title:{},
  message:'',
  data: {
   
    
  },
  
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  onLoad(query) {
    // Page load
   
  },
  onReady() {},
  onShow() {
    // Page display
    this.apiCallNotification()
  },
  onHide() {
    // Page hidden
  },
  onUnload() {
    // Page is closed
  },
  onTitleClick() {
    // Title clicked
  },
  onPullDownRefresh() {},
  onReachBottom() {
    // Page is pulled to the bottom
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString);
      // Format the date as needed
      const formattedDate = date.toLocaleString(); // Or use other methods to format the date
      return formattedDate;
    }
  },
onchangedte(){
  formatDate = (dateString) => {
    const date = new Date(dateString);
    // Format the date in your desired way
    const formattedDate = date.toLocaleString(); // Adjust this according to your preference
    return formattedDate;
  }; 
},
  apiCallNotification() {
    const self = this;
    my.request({
      url: `http://52.51.249.84:8080/api/app/notifications`,
      method: 'GET',
     
      headers: {
        "authorization": ["Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI2NTk2NTU5MGE3OWIxYjBjMDMwMzJiOTkiLCJzdWIiOiIxMTExMTU1NTU1IiwiaWF0IjoxNzEzMTY5MjYyLCJleHAiOjE3MTMyNTU2NjJ9.Wz50QVm8UPupxYQxOLeNpgOvZTmT-LFb3dfEqj5ILSc"]
      },
      dataType: 'json',
      success: function (res) {
        self.setData({
         title:res.data
        
        });
      
        console.log("12344", self.data); // Access 'count' using 'self.data.count'
      },
      fail: function (res) {
        my.alert({
          content: 'fail'
        });
      },

    });


  },
 
})



 