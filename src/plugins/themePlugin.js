var VueThemePlugin = /** @class */ (function () {
    function VueThemePlugin() {
    }
    VueThemePlugin.setTheme = function (themeName) {
        var theme = VueThemePlugin.themes[themeName];
        for (var key in theme) {
            var v = theme[key];
            document.documentElement.style.setProperty(key, v);
        }
    };
    VueThemePlugin.prototype.install = function (Vue, options) {
        if (!options)
            return;
        VueThemePlugin.themes = options.themes;
        if (options.defaultTheme) {
            VueThemePlugin.setTheme(options.defaultTheme);
        }
        Vue.prototype.$setTheme = function (v) { return VueThemePlugin.setTheme(v); };
    };
    VueThemePlugin.themes = {};
    return VueThemePlugin;
}());
export default new VueThemePlugin();
