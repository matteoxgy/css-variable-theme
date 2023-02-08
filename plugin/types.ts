// 主题
export type Theme = {
  [key: string]: string;
};

// 主题映射对象
export type Themes = {
  [key: string]: Theme;
};

// 主题插件选项
export type ThemePluginOptions = {
  themes: Themes;

  defaultTheme: string;
};
