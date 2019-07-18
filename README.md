# Web Components Loader

This file is a copy of the [webcomponents loader](https://github.com/webcomponents/polyfills/blob/master/packages/webcomponentsjs/webcomponents-loader.js) published by the Polymer project. It has been tweaked to interface with our CDN and web components.

## How to use

In your components entry point, include the following line:

```javascript
load(bundleUrl, [polyfillRootUrl])
```

- `bundleUrl`: The URL of the bundle relative to the entry point
- `polyfillRootUrl`: The root URL of the polyfills (with no trailing slash).

## BYU'ism

Because of how we load our components, we had to add lines 174-180 to webcomponents-loader.js and use that to check for the ready state rather than the original `document.readyState === 'loading'` statement.
