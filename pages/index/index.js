import providers from '/data/providers'


Page({
  mixins: [],
  data: {
    providers,
    providersSearchResult: [],
    isSearch: false,
    
  },
  
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  onLoad(query) {
    // Page load
    console.info(`Page onLoad witsh query`,providers);
    this.setData({ providersSearchResult: this.data.providers })
  },
  onReady() {},
  onShow() {
    // Page display
    console.info(`Page onLoad witsh query QQQQQ`);
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
  onShareAppMessage() {
    // Back to custom sharing information
    return {
      title: 'DANA Mini Biller Template',
      desc: 'DANA Mini Program tempalate for bill payment',
      path: 'pages/index/index',
    };
  },

  onSearchInput(e)  {
    const searchKey = e.detail.value || ''
    const lowerCaseSearchKey = searchKey.toLowerCase()
    const filtered = this.data.providers.filter(provider => {
      const lowerCaseProviderName = provider.name.toLowerCase()
      if (lowerCaseProviderName.indexOf(lowerCaseSearchKey) !== -1) {
        return provider
      }
    })
    if (searchKey) {
      this.setData({ 
        providersSearchResult: filtered,
        isSearch: true,
      })
    } else {
      this.setData({
        providersSearchResult: this.data.providers,
        isSearch: false,
      })

    }
     
  },
 
})



 