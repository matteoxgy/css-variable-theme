import _Vue, { PluginObject } from "vue";
import { ThemePluginOptions, Themes } from "./types";

class VueThemePlugin implements PluginObject<ThemePluginOptions> {
  static themes: Themes = {};

  static setTheme(themeName: string) {
    const theme = VueThemePlugin.themes[themeName];

    for (const key in theme) {
      const v = theme[key];

      document.documentElement.style.setProperty(key, v);
    }
  }

  install(Vue: typeof _Vue, options?: ThemePluginOptions) {
    if (!options) return;

    VueThemePlugin.themes = options.themes;

    if (options.defaultTheme) {
      VueThemePlugin.setTheme(options.defaultTheme);
    }

    Vue.prototype.$setTheme = (v: string) => VueThemePlugin.setTheme(v);
  }
}

export default new VueThemePlugin();
