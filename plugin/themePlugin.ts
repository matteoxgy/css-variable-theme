import _Vue, { PluginObject } from "vue";
import { ThemePluginOptions, Themes } from "./types";

/**
 * 主题键值对
 */
let themes = {} as Themes;

/**
 * 设置主题
 * @param themeName 主题键名
 */
function setTheme(themeName: string) {
  const theme = themes[themeName];

  // 为主题中所有的变量进行赋值
  for (const key in theme) {
    const v = theme[key];

    document.documentElement.style.setProperty(key, v);
  }
}

/**
 * 主题插件类
 */
class VueThemePlugin implements PluginObject<ThemePluginOptions> {
  install(Vue: typeof _Vue, options?: ThemePluginOptions) {
    if (!options) {
      console.warn("未传递正确的主题插件选项！");
      return;
    }

    if (options.themes) {
      themes = options.themes;
    } else {
      console.warn("未设定主题键值对");
    }

    if (options.defaultTheme) {
      setTheme(options.defaultTheme);
    } else {
      console.warn("未设定默认主题！");
    }

    Vue.prototype.$setTheme = setTheme;
  }
}

export default new VueThemePlugin();
