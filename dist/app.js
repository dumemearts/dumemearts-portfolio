// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"eCF1U":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "138b6a135baa4167";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"igcvL":[function(require,module,exports,__globalThis) {
// NAV MENU ITEMS HOVER STAGGER
function initButtonCharacterStagger() {
    const offsetIncrement = 0.05; // Transition offset increment in seconds
    const buttons = document.querySelectorAll('[data-button-animate-chars]');
    buttons.forEach((button)=>{
        const text = button.textContent; // Get the button's text content
        button.innerHTML = ''; // Clear the original content
        [
            ...text
        ].forEach((char, index)=>{
            const span = document.createElement('span');
            span.textContent = char;
            span.style.transitionDelay = `${index * offsetIncrement}s`;
            // Handle spaces explicitly
            if (char === ' ') span.style.whiteSpace = 'pre'; // Preserve space width
            button.appendChild(span);
        });
    });
}
// Initialize Button Character Stagger Animation
document.addEventListener('DOMContentLoaded', ()=>{
    initButtonCharacterStagger();
});
// HERO DIGITAL DESIGNER TEXT STAGGER
document.addEventListener("DOMContentLoaded", function() {
    function initGSAPAnimation() {
        gsap.from(".heading-letter, .heading-letter.is--space", {
            y: 100,
            opacity: 0,
            duration: 0.4,
            stagger: 0.05,
            ease: "power3.out",
            delay: 1.3,
            scrollTrigger: {
                trigger: ".hero-inner",
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "restart none none none",
                onEnter: (self)=>{
                    setTimeout(()=>self.animation.restart(), 500); // 0.5s delay before restarting
                },
                onEnterBack: (self)=>{
                    setTimeout(()=>self.animation.restart(), 500); // 0.5s delay when scrolling back
                },
                once: false
            }
        });
    }
    initGSAPAnimation(); // Run animation check on page load
    // Listen for window resize to dynamically reinitialize animation
    window.addEventListener("resize", function() {
        gsap.killTweensOf(".heading-letter, .heading-letter.is--space"); // Kill animation on resize
        initGSAPAnimation(); // Reinitialize animation
    });
});
// SCRAMBLE TEXT
function initScrambleOnLoad() {
    let targets = document.querySelectorAll('[data-scramble="load"]');
    targets.forEach((target)=>{
        // split into seperate words + letters 
        let split = new SplitText3(target, {
            type: "words, chars",
            wordsClass: "word",
            charsClass: "char"
        });
        gsap.to(split.words, {
            duration: 1.2,
            stagger: 0.01,
            scrambleText: {
                text: "{original}",
                chars: 'upperCase',
                speed: 0.85
            },
            // Once animation is done, revert the split to reduce DOM size
            onComplete: ()=>split.revert()
        });
    });
}
// Function to reveal stuff on scroll
function initScrambleOnScroll() {
    let targets = document.querySelectorAll('[data-scramble="scroll"]');
    targets.forEach((target)=>{
        // Used this attribute to showcase a different character scramble, can be replaced with many scenarios
        let isAlternative = target.hasAttribute("data-scramble-alt");
        let split = new SplitText3(target, {
            type: "words, chars",
            wordsClass: "word",
            charsClass: "char"
        });
        gsap.to(split.words, {
            duration: 1.4,
            stagger: 0.015,
            scrambleText: {
                text: "{original}",
                chars: isAlternative ? "\u25AF|" : 'upperCase',
                speed: 0.95
            },
            scrollTrigger: {
                trigger: target,
                start: "top bottom",
                once: true
            },
            // Once animation is done, revert the split to reduce DOM size
            onComplete: ()=>split.revert()
        });
    });
}
function initScrambleOnHover() {
    let targets = document.querySelectorAll('[data-scramble-hover="link"]');
    targets.forEach((target)=>{
        let textEl = target.querySelector('[data-scramble-hover="target"]');
        let originalText = textEl.textContent // save original text
        ;
        let customHoverText = textEl.getAttribute("data-scramble-text") // if this attribute is present, take a custom hover text
        ;
        let split = new SplitText3(textEl, {
            type: "words, chars",
            wordsClass: "word",
            charsClass: "char"
        });
        target.addEventListener("mouseenter", ()=>{
            gsap.to(textEl, {
                duration: 1,
                scrambleText: {
                    text: customHoverText ? customHoverText : originalText,
                    chars: "\u25CA\u25AF\u2206|"
                }
            });
        });
        target.addEventListener("mouseleave", ()=>{
            gsap.to(textEl, {
                duration: 0.6,
                scrambleText: {
                    text: originalText,
                    speed: 2,
                    chars: "\u25CA\u25AF\u2206"
                }
            });
        });
    });
}
document.addEventListener("DOMContentLoaded", ()=>{
    initScrambleOnLoad();
    initScrambleOnScroll();
    initScrambleOnHover();
});
// PARAGRAPH SPLIT TEXT 
const splitTypes = document.querySelectorAll('.scroll-highlight');
splitTypes.forEach((char, i)=>{
    const text = new SplitType(char, {
        types: [
            'chars',
            'words'
        ]
    });
    gsap.from(text.chars, {
        scrollTrigger: {
            trigger: char,
            start: 'top 80%',
            end: 'top 20%',
            scrub: true
        },
        opacity: 0.2,
        stagger: 0.1
    });
});
// TR PROJECT SCROLL ANIMATION
$("[tr-scroll-toggle='component']").each(function(index) {
    // get elements
    let component = $(this);
    let lists = component.find("[tr-scroll-toggle='list']");
    // set item total
    let itemTotal = lists.first().children().length;
    component.find("[tr-scroll-toggle='number-total']").text(itemTotal);
    // create trigger divs & spacer
    let firstTrigger = component.find("[tr-scroll-toggle='trigger']").first();
    for(let i = 1; i < itemTotal; i++)firstTrigger.clone().appendTo(component);
    let triggers = component.find("[tr-scroll-toggle='trigger']");
    firstTrigger.css("margin-top", "-100vh");
    let trSpacer = $("<div class='tr-scroll-toggle-spacer' style='width: 100%; height: 100vh;'></div>").hide().appendTo(component);
    // check for min width
    let minWidth = 0;
    let trMinWidth = component.attr("tr-min-width");
    if (trMinWidth !== undefined && trMinWidth !== false) minWidth = +trMinWidth;
    // main breakpoint
    gsap.matchMedia().add(`(min-width: ${minWidth}px)`, ()=>{
        // show spacer
        trSpacer.show();
        // switch which item is active
        function makeItemActive(activeIndex) {
            component.find("[tr-scroll-toggle='transform-y']").css("transform", `translateY(${activeIndex * -100}%)`);
            component.find("[tr-scroll-toggle='transform-x']").css("transform", `translateX(${activeIndex * -100}%)`);
            component.find("[tr-scroll-toggle='number-current']").text(activeIndex + 1);
            lists.each(function(index) {
                $(this).children().removeClass("is-active");
                $(this).children().eq(activeIndex).addClass("is-active");
            });
        }
        makeItemActive(0);
        // scroll to trigger div on click of anchor
        let anchorLinks = component.find("[tr-anchors]").children();
        anchorLinks.on("click", function() {
            let myIndex = $(this).index();
            let scrollDistance = triggers.eq(myIndex).offset().top + triggers.eq(myIndex).height() - 1;
            $("html, body").animate({
                scrollTop: scrollDistance
            });
        });
        // triggers timeline
        triggers.each(function(index) {
            let triggerIndex = index;
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: $(this),
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                    onToggle: ({ self, isActive })=>{
                        if (isActive) makeItemActive(triggerIndex);
                    }
                },
                defaults: {
                    ease: "none"
                }
            });
            lists.each(function() {
                let childItem = $(this).children().eq(triggerIndex);
                tl.to(childItem.find("[tr-item-animation='scale-to-1']"), {
                    scale: 1
                }, 0);
                tl.from(childItem.find("[tr-item-animation='scale-from-1']"), {
                    scale: 1
                }, 0);
                tl.to(childItem.find("[tr-item-animation='progress-horizontal']"), {
                    width: "100%"
                }, 0);
                tl.to(childItem.find("[tr-item-animation='progress-vertical']"), {
                    height: "100%"
                }, 0);
                tl.to(childItem.find("[tr-item-animation='rotate-to-0']"), {
                    rotation: 0
                }, 0);
                tl.from(childItem.find("[tr-item-animation='rotate-from-0']"), {
                    rotation: 0
                }, 0);
            });
        });
        // component timeline
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: component,
                start: "top top",
                end: "bottom bottom",
                scrub: true
            },
            defaults: {
                ease: "none"
            }
        });
        tl.to(component.find("[tr-section-animation='scale-to-1']"), {
            scale: 1
        }, 0);
        tl.from(component.find("[tr-section-animation='scale-from-1']"), {
            scale: 1
        }, 0);
        tl.to(component.find("[tr-section-animation='progress-horizontal']"), {
            width: "100%"
        }, 0);
        tl.to(component.find("[tr-section-animation='progress-vertical']"), {
            height: "100%"
        }, 0);
        tl.to(component.find("[tr-section-animation='rotate-to-0']"), {
            rotation: 0
        }, 0);
        tl.from(component.find("[tr-section-animation='rotate-from-0']"), {
            rotation: 0
        }, 0);
        // optional scroll snapping
        if (component.attr("tr-scroll-snap") === "true") {
            let tl2 = gsap.timeline({
                scrollTrigger: {
                    trigger: component,
                    start: "top top",
                    end: "bottom bottom",
                    snap: {
                        snapTo: "labelsDirectional",
                        duration: {
                            min: 0.01,
                            max: 0.2
                        },
                        delay: 0.0001,
                        ease: "power1.out"
                    }
                }
            });
            triggers.each(function(index) {
                tl2.to($(this), {
                    scale: 1,
                    duration: 1
                });
                tl2.addLabel("trigger" + index);
            });
        }
        // smaller screen sizes
        return ()=>{
            trSpacer.hide();
            component.find("[tr-scroll-toggle='transform-y']").css("transform", "translateY(0%)");
            component.find("[tr-scroll-toggle='transform-x']").css("transform", "translateX(0%)");
            lists.each(function(index) {
                $(this).children().removeClass("is-active");
            });
        };
    });
});
// CHECK MARQUEE 1
let tickerTl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".ticker-inner-wrapper",
        start: "top bottom",
        end: "bottom top",
        scrub: 1
    }
});
tickerTl2.to(".ticker-inner-wrapper", {
    xPercent: -25,
    ease: "none"
});
// CHECK MARQUEE 2
let tickerTl4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".ticker-footer",
        start: "top bottom",
        end: "bottom top",
        scrub: 1
    }
});
tickerTl4.to(".ticker-footer", {
    xPercent: -25,
    ease: "none"
});
// RECENT PROJECTS MARQUEE
let tickerTl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".ticker-container",
        start: "top bottom",
        end: "bottom top",
        scrub: 1
    }
});
tickerTl3.to(".ticker-container", {
    xPercent: -10,
    ease: "none"
});
// HOVER EXPERTISE SECTION
CustomEase.create("osmo-ease", "0.625, 0.05, 0, 1");
gsap.defaults({
    ease: "osmo-ease",
    duration: 0.725
});
document.addEventListener("DOMContentLoaded", ()=>{
    const listItems = document.querySelectorAll(".main-title-item");
    const imageItems = document.querySelectorAll(".main-img-item");
    // Show corresponding image on hover of a list item, based on index
    listItems.forEach((listItem, i)=>{
        listItem.addEventListener("mouseenter", ()=>{
            gsap.set(imageItems, {
                autoAlpha: 0
            }); // Hide all images
            gsap.set(imageItems[i], {
                autoAlpha: 1
            }); // Show image with matching index
        });
    });
});
// PROJECT SPLIT-TEXT ANIMATION
let windowWidth = window.outerWidth;
$(".split-text").each(function(index) {
    let myText = $(this);
    let mySplitText;
    function createSplits() {
        mySplitText = new SplitText(myText, {
            type: "chars,words,lines",
            charsClass: "split-chars",
            wordsClass: "split-words",
            linesClass: "split-lines"
        });
    }
    createSplits();
    $(window).resize(function() {
        if (window.outerWidth !== windowWidth) {
            mySplitText.revert();
            location.reload();
        }
        windowWidth = window.outerWidth;
    });
});
gsap.registerPlugin(ScrollTrigger);
function createTextAnimations() {
    // Line Animation
    $(".line-animation").each(function(index) {
        let triggerElement = $(this);
        let myText = $(this).find(".split-text");
        let targetElement = $(this).find(".split-lines");
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: triggerElement,
                // trigger element - viewport
                start: "top bottom",
                end: "bottom top",
                toggleActions: "restart none none none"
            }
        });
        tl.from(targetElement, {
            duration: 0.5,
            y: "150%",
            rotationX: -90,
            opacity: 0,
            ease: "power1.inOut",
            stagger: {
                amount: 0.4,
                from: "0"
            }
        });
    });
    // Word Animation
    $(".word-animation").each(function(index) {
        let triggerElement = $(this);
        let myText = $(this).find(".split-text");
        let targetElement = $(this).find(".split-words");
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: triggerElement,
                // trigger element - viewport
                start: "top bottom",
                end: "bottom top",
                toggleActions: "restart none none none"
            }
        });
        tl.from(targetElement, {
            duration: 0.3,
            y: "80%",
            rotationX: -90,
            opacity: 0,
            ease: "power1.inOut",
            stagger: {
                amount: 0.9,
                from: "0"
            }
        });
    });
    // Letter Animation
    $(".letter-animation").each(function(index) {
        let triggerElement = $(this);
        let myText = $(this).find(".split-text");
        let targetElement = $(this).find(".split-chars");
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: triggerElement,
                // trigger element - viewport
                start: "top bottom",
                end: "bottom top",
                toggleActions: "restart none none none"
            }
        });
        tl.from(targetElement, {
            duration: 0.5,
            y: "60%",
            opacity: 0,
            rotationX: -90,
            ease: "power1.inOut",
            stagger: {
                amount: 0.7,
                from: "0"
            }
        });
    });
}
createTextAnimations();
window.addEventListener("DOMContentLoaded", (event)=>{
    $(".hover-component").each(function() {
        let componentEl = $(this), triggerEl = componentEl.find(".hover-item"), targetEl = componentEl.find(".cursor-list");
        triggerEl.on("mouseenter", function() {
            let triggerIndex = $(this).index();
            targetEl.css("transform", `translateY(${triggerIndex * -100}%)`);
        });
    });
});
// PIXEL HOVER ANIMATION
document.addEventListener('DOMContentLoaded', function() {
    const animationStepDuration = 0.3; // Adjust this value to control the timing
    const gridSize = 7; // Number of pixels per row and column (adjustable)
    // Calculate pixel size dynamically
    const pixelSize = 100 / gridSize; // Calculate the size of each pixel as a percentage
    // Select all cards
    const cards = document.querySelectorAll('[data-pixelated-image-reveal]');
    // Detect if device is touch device
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || window.matchMedia("(pointer: coarse)").matches;
    // Loop through each card
    cards.forEach((card)=>{
        const pixelGrid = card.querySelector('[data-pixelated-image-reveal-grid]');
        const activeCard = card.querySelector('[data-pixelated-image-reveal-active]');
        // Remove any existing pixels with the class 'pixelated-image-card__pixel'
        const existingPixels = pixelGrid.querySelectorAll('.pixelated-image-card__pixel');
        existingPixels.forEach((pixel)=>pixel.remove());
        // Create a grid of pixels dynamically based on the gridSize
        for(let row = 0; row < gridSize; row++)for(let col = 0; col < gridSize; col++){
            const pixel = document.createElement('div');
            pixel.classList.add('pixelated-image-card__pixel');
            pixel.style.width = `${pixelSize}%`; // Set the pixel width dynamically
            pixel.style.height = `${pixelSize}%`; // Set the pixel height dynamically
            pixel.style.left = `${col * pixelSize}%`; // Set the pixel's horizontal position
            pixel.style.top = `${row * pixelSize}%`; // Set the pixel's vertical position
            pixelGrid.appendChild(pixel);
        }
        const pixels = pixelGrid.querySelectorAll('.pixelated-image-card__pixel');
        const totalPixels = pixels.length;
        const staggerDuration = animationStepDuration / totalPixels; // Calculate stagger duration dynamically
        let isActive = false; // Variable to track if the card is active
        let delayedCall;
        const animatePixels = (activate)=>{
            isActive = activate;
            gsap.killTweensOf(pixels); // Reset any ongoing animations
            if (delayedCall) delayedCall.kill();
            gsap.set(pixels, {
                display: 'none'
            }); // Make all pixels invisible instantly
            // Show pixels randomly
            gsap.to(pixels, {
                display: 'block',
                duration: 0,
                stagger: {
                    each: staggerDuration,
                    from: 'random'
                }
            });
            // After animationStepDuration, show or hide the activeCard
            delayedCall = gsap.delayedCall(animationStepDuration, ()=>{
                if (activate) {
                    activeCard.style.display = 'block';
                    // **Set pointer-events to none so clicks pass through activeCard**
                    activeCard.style.pointerEvents = 'none';
                } else activeCard.style.display = 'none';
            });
            // Hide pixels randomly
            gsap.to(pixels, {
                display: 'none',
                duration: 0,
                delay: animationStepDuration,
                stagger: {
                    each: staggerDuration,
                    from: 'random'
                }
            });
        };
        if (isTouchDevice) // For touch devices, use click event
        card.addEventListener('click', ()=>{
            animatePixels(!isActive);
        });
        else {
            // For non-touch devices, use mouseenter and mouseleave
            card.addEventListener('mouseenter', ()=>{
                if (!isActive) animatePixels(true);
            });
            card.addEventListener('mouseleave', ()=>{
                if (isActive) animatePixels(false);
            });
        }
    });
});
// TESTIMONIAL SLIDER
let photoSwiper = new Swiper(".swiper.is-photos", {
    effect: "cards",
    grabCursor: true,
    loop: true,
    keyboard: true,
    // Navigation arrows
    navigation: {
        nextEl: ".arrow.is-right",
        prevEl: ".arrow.is-left"
    }
});
let contentSwiper = new Swiper(".swiper.is-content", {
    speed: 0,
    loop: true,
    followFinger: false,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    }
});
photoSwiper.controller.control = contentSwiper;
contentSwiper.controller.control = photoSwiper;
// FOOTER CONTACT ME TEXT STAGGER
gsap.from(".heading-style-display,.heading-style-display.is-subtract,.heading-style-display.is--next", {
    y: 100,
    opacity: 0,
    duration: 0.4,
    stagger: 0.05,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".footer-wrapper",
        start: "top 75%",
        toggleActions: "restart pause resume pause",
        once: false
    }
});
// FOOTER TICKER ANIMATION
document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin();
    let ticker = document.querySelector(".email-ticker-wrapper");
    if (!ticker) return;
    let tickerAnimation = gsap.to(ticker, {
        x: "-50%",
        duration: 20,
        ease: "linear",
        repeat: -1
    });
    // Pause on hover
    ticker.addEventListener("mouseenter", function() {
        tickerAnimation.pause();
    });
    // Resume on hover out
    ticker.addEventListener("mouseleave", function() {
        tickerAnimation.resume();
    });
});
// HERO IMAGE TRAIL
function initImageTrail(config = {}) {
    // config + defaults
    const options = {
        minWidth: config.minWidth ?? 992,
        moveDistance: config.moveDistance ?? 15,
        stopDuration: config.stopDuration ?? 300,
        trailLength: config.trailLength ?? 5
    };
    const wrapper = document.querySelector('[data-trail="wrapper"]');
    if (!wrapper || window.innerWidth < options.minWidth) return;
    // State management
    const state = {
        trailInterval: null,
        globalIndex: 0,
        last: {
            x: 0,
            y: 0
        },
        trailImageTimestamps: new Map(),
        trailImages: Array.from(document.querySelectorAll('[data-trail="item"]')),
        isActive: false
    };
    // Utility functions
    const MathUtils = {
        lerp: (a, b, n)=>(1 - n) * a + n * b,
        distance: (x1, y1, x2, y2)=>Math.hypot(x2 - x1, y2 - y1)
    };
    function getRelativeCoordinates(e, rect) {
        return {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };
    }
    function activate(trailImage, x, y) {
        if (!trailImage) return;
        const rect = trailImage.getBoundingClientRect();
        const styles = {
            left: `${x - rect.width / 2}px`,
            top: `${y - rect.height / 2}px`,
            zIndex: state.globalIndex,
            display: 'block'
        };
        Object.assign(trailImage.style, styles);
        state.trailImageTimestamps.set(trailImage, Date.now());
        // Here, animate how the images will appear!
        gsap.fromTo(trailImage, {
            autoAlpha: 0,
            scale: 0.8
        }, {
            scale: 1,
            autoAlpha: 1,
            duration: 0.2,
            overwrite: true
        });
        state.last = {
            x,
            y
        };
    }
    function fadeOutTrailImage(trailImage) {
        if (!trailImage) return;
        // Here, animate how the images will disappear!
        gsap.to(trailImage, {
            opacity: 0,
            scale: 0.2,
            duration: 0.8,
            ease: "expo.out",
            onComplete: ()=>{
                gsap.set(trailImage, {
                    autoAlpha: 0
                });
            }
        });
    }
    function handleOnMove(e) {
        if (!state.isActive) return;
        const rectWrapper = wrapper.getBoundingClientRect();
        const { x: relativeX, y: relativeY } = getRelativeCoordinates(e, rectWrapper);
        const distanceFromLast = MathUtils.distance(relativeX, relativeY, state.last.x, state.last.y);
        if (distanceFromLast > window.innerWidth / options.moveDistance) {
            const lead = state.trailImages[state.globalIndex % state.trailImages.length];
            const tail = state.trailImages[(state.globalIndex - options.trailLength) % state.trailImages.length];
            activate(lead, relativeX, relativeY);
            fadeOutTrailImage(tail);
            state.globalIndex++;
        }
    }
    function cleanupTrailImages() {
        const currentTime = Date.now();
        for (const [trailImage, timestamp] of state.trailImageTimestamps.entries())if (currentTime - timestamp > options.stopDuration) {
            fadeOutTrailImage(trailImage);
            state.trailImageTimestamps.delete(trailImage);
        }
    }
    function startTrail() {
        if (state.isActive) return;
        state.isActive = true;
        wrapper.addEventListener("mousemove", handleOnMove);
        state.trailInterval = setInterval(cleanupTrailImages, 100);
    }
    function stopTrail() {
        if (!state.isActive) return;
        state.isActive = false;
        wrapper.removeEventListener("mousemove", handleOnMove);
        clearInterval(state.trailInterval);
        state.trailInterval = null;
        // Clean up remaining trail images
        state.trailImages.forEach(fadeOutTrailImage);
        state.trailImageTimestamps.clear();
    }
    // Initialize ScrollTrigger
    ScrollTrigger.create({
        trigger: wrapper,
        start: "top bottom",
        end: "bottom top",
        onEnter: startTrail,
        onEnterBack: startTrail,
        onLeave: stopTrail,
        onLeaveBack: stopTrail
    });
    // Clean up on window resize
    const handleResize = ()=>{
        if (window.innerWidth < options.minWidth && state.isActive) stopTrail();
        else if (window.innerWidth >= options.minWidth && !state.isActive) startTrail();
    };
    window.addEventListener('resize', handleResize);
    return ()=>{
        stopTrail();
        window.removeEventListener('resize', handleResize);
    };
}
document.addEventListener("DOMContentLoaded", ()=>{
    const imageTrail = initImageTrail({
        minWidth: 992,
        moveDistance: 15,
        stopDuration: 350,
        trailLength: 8
    });
});
initFooterTrail({
    minWidth: 992,
    moveDistance: 15,
    stopDuration: 300,
    trailLength: 5 // Number of images visible before they start fading out
});

},{}]},["eCF1U","igcvL"], "igcvL", "parcelRequire94c2")

//# sourceMappingURL=app.js.map
