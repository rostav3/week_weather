class ProxyManager {
          BASE_URL = "https://api.darksky.net/forecast/c491f401656298ffe642aec6bfb2dc15/";
          static get instance() {
                    if (!ProxyManager._instance) {
                              ProxyManager._instance = new ProxyManager();
                    }
                    return ProxyManager._instance;
          }

          getWeather(latitude, longitude, successFunc, errorFunc) {
                    new ApiRequest("GET", this.BASE_URL + latitude + "," + longitude, successFunc, errorFunc);
          }


}