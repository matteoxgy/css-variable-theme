# css-variable-theme

### install

`yarn add css-variable-theme`

### use

```js
import { registerThemes } from 'css-variable-theme';

registerThemes({
    // light theme and its css variables
    light: {
        "--bg": "#fff",
        "--color": "#333"
    },
    dark: {
        "--bg": "#555",
        "--color": "#eee"
    }
});
```

`xxx.css`

```css
.demo {
    background: var(--bg);
    color: var(--color);
}
```

`another.js`

```js
import { setTheme } from 'css-variable-theme';

setTheme('light');
```