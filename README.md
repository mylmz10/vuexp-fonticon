# VueXP Fonticon

Use custom font icon collections seamlessly with VueXP.

## Install the vuexp-fonticon plugin

```
npm install vuexp-fonticon --save
```

## Add CSS

Import your fonticon's font files (normally a .ttf, TrueType Font) into fonts. FontAwesome, for example, has a font file called fontawesome-webfont.ttf.

Add a line to styles.scss to set the fonticon's base class:

```
@font-face {
  font-family: "FontAwesome";
  font-weight: normal;
  font-style: normal;
  src: url("/fonts/fontawesome-webfont.ttf");
}

.fa {
  font-family: FontAwesome, fontawesome-webfont;
}

.ion {
  font-family: Ionicons, ionicons;
}
```

## Initialize the plugin

In main.js, add the following snippet:

```
import VxpFontIcon from "vuexp-fonticon";

const FontIcons = {
  paths: {
    fa: "./assets/styles/font-awesome.css",
    ion: "./assets/styles/ionicons.css"
  }
};

Vue.use(VxpFontIcon, FontIcons);
```

## Use the fonticons

```
<VxpLabel class="fa" :text="'fa-eye' | fonticon" />
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
