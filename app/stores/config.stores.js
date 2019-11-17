export default class ConfigStre {
  constructor() {
    this.splashTime = 2000;
    this.splashImg = require("../../images/splash.jpg");
    this.loginBG = require("../../images/login.jpg");
  }

  get SplashImg() {
    return this.splashImg;
  }

  get LoginBG() {
    return this.loginBG;
  }

  get SplashTime() {
    return this.splashTime;
  }
}
