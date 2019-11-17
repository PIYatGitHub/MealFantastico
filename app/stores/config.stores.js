export default class ConfigStre {
  constructor() {
    this.splashTime = 2000;
    this.splashImg = require("../../images/splash.jpg");
  }

  get SplashImg() {
    return this.splashImage;
  }

  get SplashTime() {
    return this.splashTime;
  }
}
