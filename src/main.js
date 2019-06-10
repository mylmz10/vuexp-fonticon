import fonticon from "./filters/fonticon";
import loader from "./loader";

export default {
  install(Vue, options) {
    if (typeof options === "undefined") {
      console.error("Missing options");
      throw "Missing options";
    }

    loader.paths = options.paths;
    loader.loadCss();

    Vue.filter("fonticon", fonticon);
  }
};
