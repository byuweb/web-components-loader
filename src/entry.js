import loader from './webcomponents-loader.js'

const myUrl = document.currentScript.src;

export default function load(bundleUrl, polyfillRootUrl) {
  const isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

  if (isIE11) {
    console.warn('IE11 detected. Terminating the byu-web-components.')
    exit(0);
  }

  loader(polyfillRootUrl)

  window.WebComponents = window.WebComponents || {
    waitFor(cb) {
      addEventListener('WebComponentsReady', cb)
    }
  }

  WebComponents.waitFor(() => {
    loadScript(bundleUrl)
  })
}

function loadScript(relativeUrl) {
  const url = new URL(relativeUrl, myUrl);
  const el = document.createElement("script");
  if (url.protocol !== 'https:' && url.hostname !== 'localhost') {
    url.protocol = 'https:'
  }
  el.src = url.href;
  el.type = 'module';
  document.head.append(el);
}
