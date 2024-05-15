import providers from '/data/providers'
import { encrypt, decrypt } from 'secure-encrypt';
import 'i18n'

Page({

  mixins: [],
  data: {
    providers,
    count: [],
    transactionData: [],
    providersSearchResult: [],
    providerName: [],
    isSearch: false,
    sharepointsvalue: [],


    arrIndex: 0,
    index: 0
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  onLoad(query) {
    // Page load

    // this.userinfo()
    this.onApi()
  },
  onReady() {},
  onShow() {
    my.navigateTo({
      url: '/pages/rewards/rewards'
    })

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
  environment() {
    // Implementation of environment function
    return {
      emulator: true // Or false, depending on your setup
    };
  },
  onApi() {
    // change language
    // 
      // const languages = {
      //   en: {
      //     greeting: "Hello!",
      //     farewell: "Goodbye!",
      //   },
      //   es: {
      //     greeting: "¡Hola!",
      //     farewell: "¡Adiós!",
      //   },
      //   fr: {
      //     greeting: "Bonjour!",
      //     farewell: "Au revoir!",
      //   },
      // };
      // function getLanguage() {
      //   // You can implement logic here to determine the user's preferred language
      //   // For simplicity, let's just use English as the default
      //   const userLanguage = "es"; // Default to English
      //   return userLanguage;
      // }
      
      // // Function to translate text based on selected language
      // function translate(key) {
      //   const currentLanguage = getLanguage();
      //   // If the current language is not defined, default to English
      //   const languageStrings = languages[currentLanguage] || languages.en;
      //   return languageStrings[key] || ""; // Return the translated string or empty string if not found
      // }
      
      // const greeting = translate("greeting");
      // const farewell = translate("farewell");
      
      // console.log(greeting); // Output: Hello! (in English)
      // console.log(farewell); // Output: Goodbye! (in English)
// 
    const env = this.environment();
    if (!env.emulator) {
      const serviceID = 'C2BNamecheck';
      const KYCPayload = {
        service: "Get Customer KYC",
        provider: "MFS",
        senderMsisdn: "${MSISDN}"
      };

      const serviceAdapterPayload = {
        msisdn: 'msisdn',
        proxiedRequest: {
          needsIdentity: true,
          needsPIN: false,
          requestInfo: {
            httpMethod: 'POST',
            payload: JSON.stringify(KYCPayload),
          },
        },
      };

      return new Promise((resolve, reject) => {
        my.call('makeRequest', {
          replaceParams: ['msisdn'],
          payload: JSON.stringify(serviceAdapterPayload),
          url: `/service-adapter/v1/generic/proxy/external/${serviceID}`,
          success: function (result) {
            let response = JSON.parse(result.proxiedResponse.data.content);

           
            let encryptedData = encrypt(JSON.stringify(response), 'encryptionKey');

            resolve({
              success: true,
              message: 'KYC retrieved successfully!',
              data: encryptedData
            });
          },
          fail: function (res) {
            reject({
              success: false,
              message: 'There was a problem trying to fetch KYC details.'
            });
          },
        });
      });
    } else {
      // If in emulator mode, return dummy data
      let response = {
        firstName: "John",
        lastName: "Doe",
        fullName: "John Doe",
        locale: "EN",
        msisdn: "255754111111"
      };

      // Encrypting the dummy data
      let encryptedData = encrypt(JSON.stringify(response), 'encryptionKey');
      const se='encryptionKey'
      const decryptedValue = decrypt(encryptedData,se); 

      console.log(decryptedValue,"the decrypt ata");
      console.log(encryptedData, "the Crypt data"); 

      return new Promise((resolve, reject) => {
        resolve({
          success: true,
          message: 'KYC retrieved successfully!',
          data: encryptedData
        });
      });
    }
  },

  transactionAPI() {
    const table = this;
    my.request({
      url: 'http://52.51.249.84:8080/api/app/transactions',
      method: 'GET',
      // headers: { "authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI2NTdhNmZlNWQ4MGE0YTNiZTRhYTQ5MjQiLCJzdWIiOiJyYW5qaXRoMTdAZ21haWwuY29tIiwiaWF0IjoxNzExOTQ2ODI1LCJleHAiOjE3MTIwMzMyMjV9.krBSnWOSXDxx3aWQ5VBlbV8Lj3rxxYyo0CV_X4J8B6g" },
      headers: {
        "authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI2NTk2NTU5MGE3OWIxYjBjMDMwMzJiOTkiLCJzdWIiOiIxMTExMTU1NTU1IiwiaWF0IjoxNzEyMTM0MzQyLCJleHAiOjE3MTIyMjA3NDJ9.wDn9zNfxvEaeD9yh8uUqNL5cM5Bkjxf75M9w6sre9FA"
      },
      dataType: 'json',
      success: function (res) {
        table.setData({
          transactionData: res.data // Set the response value in the 'count' data property
        });
        console.log("12344", table.data.transactionData); // Access 'count' using 'self.data.count'
      },
      fail: function (res) {
        my.alert({
          content: 'fail...!'
        });
      },

    });

  }
})