import  { getLanguage, translate } from "./pages/translation"
App({
  globalData: {
    language: ''
  },
  setLanguage(language) {
    this.globalData.language = language;
    
  },
  translate(key) {
    const language = this.globalData.language || getLanguage();
    return translate(key, language);
    
  },
  onLaunch(options) {
    // Page opens for the first time
    console.info('App onLaunch');
  },
  
  onShow(options) {
    // Reopened by scheme from the background
  },
});
my.hideTabBar({
  animation: false
})