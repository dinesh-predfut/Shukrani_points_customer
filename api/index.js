// Warning: Donot edit this file

//buy goods
export function buy({
  till,
  amount,
  currency = "TZS",
  description = ""
}) {
  //NOTE: This request only works on device
  return new Promise((resolve, reject) => {
    console.log('value checking in index pay --- ', till, amount)
    my.call("buyGoods", {
      tillNumber: till,
      amount: amount,
      currency: currency,
      reason: description,
      success: function (res) {
        my.alert({
          title: "Success Buy Goods",
          content: JSON.stringify(res)
        });
        console.log('final response --- ', res)
        if (typeof res.transactionId != undefined) {
          resolve({
            success: true,
            message: "Payments made successfully, you will receive confirmation message soon.",
            data: {
              transactionID: res.transactionId,
              amount: amount,
              refferenceNumber: refferenceNumber
            }
          });
        } else {
          reject({
            success: false,
            userCanceled: false,
            message: "Payments made unsuccessfully, please try again later."
          });
        }
      },
      fail: function (res) {
        my.alert({
          title: "Error Buy Goods",
          content: JSON.stringify(res)
        });
        //ignore user cancels
        if (res.error == "APP667") {
          reject({
            success: false,
            userCanceled: true,
            message: "Payments made unsuccessfully, user canceled."
          });
        } else {
          reject({
            success: false,
            userCanceled: false,
            message: "Payments made unsuccessfully, failed to pay bill."
          });
        }
      }
    });
  });
}

//paybill
export function bill({
  shortCode,
  refferenceNumber,
  amount,
  currency = "TZS",
  description = "",
  parameters = {}
}) {
  parameters = {
    ...parameters,
    "miniAppID": my.getAppIdSync().appId
  }
  let env = this.enviroment()
  if (!env.emulator) {
    return new Promise((resolve, reject) => {
      my.call("payBillWithParameters", {
        businessID: shortCode,
        billReference: refferenceNumber,
        amount: amount,
        currency: currency,
        reason: description,
        parameters: JSON.stringify(parameters),
        success: function (res) {
          if (typeof res.transactionId != undefined) {
            resolve({
              success: true,
              message: "Payments made successfully, you will receive confirmation message soon.",
              data: {
                transactionID: res.transactionId,
                amount: amount,
                refferenceNumber: refferenceNumber
              }
            });
          } else {
            reject({
              success: false,
              userCanceled: false,
              message: "Payments made unsuccessfully, please try again later."
            });
          }
        },
        fail: function (res) {
          //ignore user cancels
          if (res.error == "APP667") {
            reject({
              success: false,
              userCanceled: true,
              message: "Payments made unsuccessfully, user canceled."
            });
          } else {
            reject({
              success: false,
              userCanceled: false,
              message: "Payments made unsuccessfully, failed to pay bill."
            });
          }
        }
      });
    });
  } else {
    //simulator
    return new Promise((resolve, reject) => {
      resolve({
        success: true,
        message: "Payments made successfully, you will receive confirmation message soon.",
        data: {
          transactionID: 'XXXXXXXXXX',
          amount: amount,
          refferenceNumber: refferenceNumber
        }
      });
    });
  }

}

//request
export function request({
  url,
  method = 'GET',
  headers = {},
  payload = {}
}) {

  let env = this.enviroment()
  if (!env.emulator) {
    headers = {
      ...headers,
      "x-miniapp-thirdparty": "yes",
      "x-miniapp-service": "proxy",
      "x-miniapp-id": my.getAppIdSync().appId,
      "x-miniapp-secret": "iamasecretandiwillbehidden",
      "x-miniapp-request-url": url,
      "x-miniapp-request-method": method.toLowerCase()
    }

    payload.captain = "${MSISDN}";
    let serviceAdapterPayload = {
      msisdn: "msisdn",
      proxiedRequest: {
        needsIdentity: true,
        needsPIN: false,
        requestInfo: {
          httpMethod: "POST",
          // queryString: JSON.stringify(queryParams),
          payload: JSON.stringify(payload),
          headers: headers
        }
      }
    };
    return new Promise((resolve, reject) => {
      const serviceID = "Miniservices"
      my.call("makeRequest", {
        replaceParams: ["msisdn"],
        payload: JSON.stringify(serviceAdapterPayload),
        url: `/service-adapter/v1/generic/proxy/external/${serviceID}`,
        success: result => {
          if (result.proxiedResponse.data.httpCode == "200") {
            const content = JSON.parse(result.proxiedResponse.data.content)
            if (content.response !== undefined) {
              resolve(content.response);
            } else {
              reject(content)
            }

          } else {
            reject(JSON.parse(result.proxiedResponse.data.content));
          }
        },
        fail: error => {
          reject(error);
        }
      });
    });

  } else {
    //simulator
    return new Promise((resolve, reject) => {
      my.request({
        url: url,
        method: method,
        headers: headers,
        data: payload,
        dataType: 'json',
        success: function (res) {
          resolve(res.data)
        },
        fail: function (res) {
          reject(res)
        },
        complete: function (res) {
          //...
        }
      });
    });
  }
}

//secure call make requestapi
export function makeRequest({
  serviceID,
  payload = {},
  queryParams = "",
  headers = {},
  needsIdentity = true,
  needsPIN = false,
  method = "POST"
}) {
  //track the execution time
  let t0 = Date.now();

  //append msisdn accross all requests
  if (needsIdentity) {
    payload.captain = "${MSISDN}";
  }

  //prepare the payload
  let serviceAdapterPayload = {
    msisdn: "msisdn",
    proxiedRequest: {
      needsIdentity: needsIdentity,
      needsPIN: needsPIN,
      requestInfo: {
        httpMethod: method,
        // queryString: JSON.stringify(queryParams),
        payload: JSON.stringify(payload),
        headers: headers
      }
    }
  };

  return new Promise((resolve, reject) => {
    my.call("makeRequest", {
      replaceParams: ["msisdn"],
      payload: JSON.stringify(serviceAdapterPayload),
      url: `/service-adapter/v1/generic/proxy/external/${serviceID}`,
      success: result => {
        let t1 = ((Date.now() - t0) / 1000).toFixed(2);
        if (result.proxiedResponse.data.httpCode == "200") {
          resolve({
            success: true,
            executionTime: t1,
            data: JSON.parse(result.proxiedResponse.data.content)
          });
        } else {
          reject({
            success: false,
            message: "Failed getting response from upstream!",
            executionTime: t1
          });
        }
      },
      fail: error => {
        let t1 = ((Date.now() - t0) / 1000).toFixed(2);
        reject({
          success: false,
          executionTime: t1,
          message: "Failed making request",
          error: error
        });
      }
    });
  });
}

//call to give kyc
export function kyc() {
  let env = this.enviroment()
  if (!env.emulator) {
    const serviceID = 'C2BNamecheck'
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
    }
    return new Promise((resolve, reject) => {
      my.call('makeRequest', {
        replaceParams: ['msisdn'],
        payload: JSON.stringify(serviceAdapterPayload),
        url: `/service-adapter/v1/generic/proxy/external/${serviceID}`,
        success: function (result) {
          let response = JSON.parse(result.proxiedResponse.data.content)

          resolve({
            success: true,
            message: 'KYC retrieved successfully!',
            data: {
              firstName: response.firstName,
              lastName: response.lastName,
              fullName: `${response.firstName} ${response.lastName}`,
              locale: response.languge, //"EN",
              msisdn: response.msisdn
            }

          })

        },
        fail: function (res) {
          reject({
            success: false,
            message: 'There was a problem tring to fetching KYC details.',
          })
        },
      })
    })

  } else {
    return new Promise((resolve, reject) => {
      resolve({
        success: true,
        message: 'KYC retrieved successfully!',
        data: {
          firstName: "John",
          lastName: "Doe",
          fullName: "John Doe",
          locale: "EN",
          msisdn: "255754111111"
        }

      })
    })


  }
}

//get enviroment: {enviroment: ios | android, emulator: true | false}
export function enviroment() {
  let {
    platform
  } = my.getSystemInfoSync()
  if (platform.toLowerCase() === "ios") {
    if (
      /Ariver/.test(navigator.swuserAgent) ||
      /Griver/.test(navigator.swuserAgent) ||
      /AppContainer/.test(navigator.swuserAgent)
    ) {
      return {
        platform: "ios",
        emulator: false
      }
    } else {
      return {
        platform: "ios",
        emulator: true,
      }
    }
  } else {
    if (
      /Ariver/.test(navigator.userAgent) ||
      /Griver/.test(navigator.userAgent) ||
      /AppContainer/.test(navigator.userAgent)
    ) {
      return {
        platform: "android",
        emulator: false,
      }
    } else {
      return {
        platform: "android",
        emulator: true,
      }
    }
  }
}

//sleep for abit
export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//checkin funciton
export function optIn() {
  let env = this.enviroment()
  if (!env.emulator) {
    let headers = {
      "x-miniapp-thirdparty": "yes",
      "x-miniapp-service": "configurations",
      "x-miniapp-id": my.getAppIdSync().appId,
      "x-miniapp-secret": "iamasecretandiwillbehidden",
      "Content-Type": "application/json"
    }

    let payload = {
      service: 'Opt-in',
      ant_id: my.getAppIdSync().appId,
      captain: '${MSISDN}'
    }

    let serviceAdapterPayload = {
      msisdn: "msisdn",
      proxiedRequest: {
        needsIdentity: true,
        needsPIN: false,
        requestInfo: {
          httpMethod: "POST",
          payload: JSON.stringify(payload),
          headers: headers
        }
      }
    };
    return new Promise((resolve, reject) => {
      const serviceID = "Miniservices"
      my.call("makeRequest", {
        replaceParams: ["msisdn"],
        payload: JSON.stringify(serviceAdapterPayload),
        url: `/service-adapter/v1/generic/proxy/external/${serviceID}`,
        success: result => {
          if (result.proxiedResponse.data.httpCode == "200") {
            const content = JSON.parse(result.proxiedResponse.data.content)
            if (content.response !== undefined) {
              resolve(content.response);
            } else {
              reject(content)
            }

          } else {
            reject(JSON.parse(result.proxiedResponse.data.content));
          }
        },
        fail: error => {
          reject(error);
        }
      });
    });

  } else {
    //simulator
    return new Promise((resolve, reject) => {
      resolve({
        code: 200,
        message: "Captain opted in to this Miniapp.",
        optin: {
          date: "24-07-2023",
          time: 1690193056
        }
      })
    });
  }
}

//opt out funciton
export function optOut() {
  let env = this.enviroment()
  if (!env.emulator) {
    let headers = {
      "x-miniapp-thirdparty": "yes",
      "x-miniapp-service": "configurations",
      "x-miniapp-id": my.getAppIdSync().appId,
      "x-miniapp-secret": "iamasecretandiwillbehidden",
      "Content-Type": "application/json"
    }

    let payload = {
      service: 'Opt-out',
      ant_id: my.getAppIdSync().appId,
      captain: '${MSISDN}'
    }

    let serviceAdapterPayload = {
      msisdn: "msisdn",
      proxiedRequest: {
        needsIdentity: true,
        needsPIN: false,
        requestInfo: {
          httpMethod: "POST",
          // queryString: JSON.stringify(queryParams),
          payload: JSON.stringify(payload),
          headers: headers
        }
      }
    };
    return new Promise((resolve, reject) => {
      const serviceID = "Miniservices"
      my.call("makeRequest", {
        replaceParams: ["msisdn"],
        payload: JSON.stringify(serviceAdapterPayload),
        url: `/service-adapter/v1/generic/proxy/external/${serviceID}`,
        success: result => {
          if (result.proxiedResponse.data.httpCode == "200") {
            const content = JSON.parse(result.proxiedResponse.data.content)
            if (content.response !== undefined) {
              resolve(content.response);
            } else {
              reject(content)
            }

          } else {
            reject(JSON.parse(result.proxiedResponse.data.content));
          }
        },
        fail: error => {
          reject(error);
        }
      });
    });

  } else {
    //simulator
    return new Promise((resolve, reject) => {
      resolve({
        code: 200,
        message: "Captain opted in to this Miniapp.",
        optin: {
          date: "24-07-2023",
          time: 1690193056
        }
      })
    });
  }
}