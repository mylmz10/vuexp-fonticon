import { TNSFontIcon } from "nativescript-akylas-fonticon";

class Loader {
  constructor() {
    this._paths = {};
  }

  get paths() {
    return this._paths;
  }

  set paths(value) {
    this._paths = value;
  }

  loadCss() {
    TNSFontIcon.debug = true;
    TNSFontIcon.paths = this.paths;
    TNSFontIcon.loadCss();
  }
}

export default new Loader();
