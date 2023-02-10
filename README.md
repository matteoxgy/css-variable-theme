# vue-css-var-theme-plugin

### install

`yarn add vue-css-var-theme-plugin`

### use

`main.js in vue2 project`

```js
import vueCssVarThemePlugin from 'vue-css-var-theme-plugin';

import './xxx.css';

Vue.use(vueCssVarThemePlugin, {
    // all themes
    themes: {
        // light theme and its css variables
        light: {
            "--bg": "#fff",
            "--color": "#333"
        },
        dark: {
            "--bg": "#555",
            "--color": "#eee"
        }
    },
    // default theme name
    defaultTheme: "light"
});
```

`xxx.css`

```css
.demo {
    background: var(--bg);
    color: var(--color);
}
```

`xxx.vue`

```js
export default {
    // ……
    watch: {
        theme(newV) {
            // call function $setTheme to change theme
            this.$setTheme(newV);
        }
    }
}
```