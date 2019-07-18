import loader from './webcomponents-loader.js'

const myUrl = document.currentScript.src;

export default function load(bundleUrl, polyfillRootUrl) {
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
  el.src = url.href;
  el.type = 'module';
  document.head.append(el);
}
