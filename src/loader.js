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
    for (const fontFile of Object.values(this.paths)) {
      let link = document.createElement("link");

      // set the attributes for link element
      link.rel = "stylesheet";
      link.type = "text/css";
      link.href = fontFile;

      // Get HTML head element to append
      // link element to it
      document.getElementsByTagName("HEAD")[0].appendChild(link);
    }
  }
}

export default new Loader();
