/**
 * 主题键值对
 */
let themes: any = {};

/**
 * 注册主题
 * @param themes
 */
export function registerThemes(themes: any) {
	themes = themes;
}

/**
 * 设置主题
 * @param themeName 主题键名
 */
export function setTheme(themeName: string) {
	const theme = themes[themeName];

	// 为主题中所有的变量进行赋值
	for (const key in theme) {
		const v = theme[key];

		if (typeof v === "string") {
			document.documentElement.style.setProperty(key, v);
		}
	}
}
