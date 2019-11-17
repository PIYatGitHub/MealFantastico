import firebase from "firebase";
import firebaseConfig from "../../configs/fbase.js"; //Make your own file or app will crash...

export default class ConfigStre {
  constructor() {
    firebase.initializeApp(firebaseConfig);
    this.splashTime = 1000;
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
