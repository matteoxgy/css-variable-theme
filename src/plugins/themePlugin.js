/**
 * 主题键值对
 */
var themes = {};
/**
 * 设置主题
 * @param themeName 主题键名
 */
function setTheme(themeName) {
    var theme = themes[themeName];
    // 为主题中所有的变量进行赋值
    for (var key in theme) {
        var v = theme[key];
        document.documentElement.style.setProperty(key, v);
    }
}
/**
 * 主题插件类
 */
var VueThemePlugin = /** @class */ (function () {
    function VueThemePlugin() {
    }
    VueThemePlugin.prototype.install = function (Vue, options) {
        if (!options) {
            console.warn("未传递正确的主题插件选项！");
            return;
        }
        if (options.themes) {
            themes = options.themes;
        }
        else {
            console.warn("未设定主题键值对");
        }
        if (options.defaultTheme) {
            setTheme(options.defaultTheme);
        }
        else {
            console.warn("未设定默认主题！");
        }
        Vue.prototype.$setTheme = setTheme;
    };
    return VueThemePlugin;
}());
export default new VueThemePlugin();
