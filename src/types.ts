// 主题
export type Theme = {
  // css 变量名及对应值
  [key: string]: string;
};

// 主题键值对
export type Themes = {
  [key: string]: Theme;
};

// 主题插件选项
export type ThemePluginOptions = {
  themes: Themes;

  // 默认主题
  defaultTheme: string;
};
