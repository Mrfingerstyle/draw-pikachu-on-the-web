// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"test.js":[function(require,module,exports) {
// console.log('test page');
// 模块化
// import string from './css'
// 对象的初始化方法
var string = "\n.skin * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n.skin *::after,\n.skin *::before {\n    box-sizing: border-box;\n  }\n\n.skin {\n    min-height: 50vh;\n    background: #ffe600;\n    position: relative;\n  }\n  /* \u773C\u775B\u548C\u9F3B\u5B50 */\n  .nose {\n    position: absolute;\n    width: 0px;\n    height: 0px;\n    left: 50%;\n    top: 145px;\n    margin-left: -10px;\n    border: 10px solid;\n    border-color: #040001 transparent #040001 transparent;\n    border-bottom: none;\n    z-index: 10;\n  }\n  .nose:hover {\n    transform-origin: 50% 100%;\n    animation: wave 200ms infinite linear;\n  }\n  @keyframes wave {\n    0% {\n      transform: rotate(0);\n    }\n    33% {\n      transform: rotate(-15deg);\n    }\n    66% {\n      transform: rotate(15deg);\n    }\n    100% {\n      transform: rotate(0deg);\n    }\n  }\n  .circular {\n    position: absolute;\n    width: 20px;\n    height: 6px;\n    top: -16px;\n    left: -10px;\n    border-radius: 10px 10px 0 0;\n    background: #040001;\n  }\n  .eye {\n    position: absolute;\n    width: 64px;\n    height: 64px;\n    /* border: 1px solid #000; */\n    background: #363334;\n    left: 50%;\n    top: 100px;\n    margin-left: -32px;\n    border-radius: 100%;\n  }\n  .eye.left {\n    transform: translateX(-100px);\n  }\n  \n  .eye.right {\n    transform: translateX(100px);\n  }\n  .eye::after {\n    position: relative;\n    content: \"\";\n    /* \u9ED8\u8BA4\u663E\u793A\u7C7B\u578Bspan */\n    display: block;\n    border: 3px solid #000;\n    width: 30px;\n    height: 30px;\n    /* border: 1px solid red; */\n    background: #ffffff;\n    left: 8px;\n    top: 4px;\n    border-radius: 50%;\n  }\n  /* \u5634\u5DF4 */\n  .mouth {\n    position: absolute;\n    width: 200px;\n    height: 200px;\n    /* border: 1px solid red; */\n    top: 170px;\n    left: 50%;\n    margin-left: -100px;\n  }\n  /* \u4E0A\u5634\u5507 */\n  .mouth .up {\n    position: relative;\n    top: -20px;\n    z-index: 1;\n  }\n  \n  .mouth .up .lips {\n    border: 5px solid #000;\n    height: 30px;\n    width: 100px;\n    border-top-color: transparent;\n    border-right-color: transparent;\n    position: relative;\n    position: absolute;\n    left: 50%;\n    margin-left: -50px;\n    background: #ffe600;\n  }\n  \n  .mouth .up .lips.left {\n    border-radius: 0 0 0 50px;\n    transform: rotate(-15deg) translateX(-46px);\n  }\n  \n  .mouth .up .lips.right {\n    border-radius: 0 0 50px 0;\n    transform: rotate(15deg) translateX(50px);\n    top: 1px;\n  }\n  .mouth .up .lips.left::before {\n    position: absolute;\n    content: \"\";\n    display: block;\n    width: 7px;\n    height: 30px;\n    right: -5px;\n    bottom: -8px;\n    background: #ffe600;\n  }\n  \n  .mouth .up .lips.right::before {\n    position: absolute;\n    content: \"\";\n    display: block;\n    width: 7px;\n    height: 30px;\n    left: -5px;\n    bottom: 0px;\n    background: #ffe600;\n  }\n  .mouth .up .hide-1 {\n    position: absolute;\n    width: 87px;\n    height: 10px;\n    /* border: 1px solid #000; */\n    background: #000;\n    transform: rotate(-20deg);\n    top: 10px;\n    left: 9px;\n    background: #ffe600;\n  }\n  .mouth .up .hide-2 {\n    position: absolute;\n    width: 25px;\n    height: 5px;\n    /* border: 1px solid #000; */\n    background: #000;\n    left: 87px;\n    top: 11px;\n    transform: rotate(-75deg);\n    background: #ffe600;\n  }\n  /* \u4E0B\u5634\u5507 */\n  .mouth .down {\n    position: absolute;\n    /* border: 1px solid red; */\n    width: 100%;\n    height: 180px;\n    top: 5px;\n    overflow: hidden;\n  }\n  .mouth .down .circular-1 {\n    border: 3px solid #000;\n    width: 150px;\n    height: 1000px;\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    margin-left: -75px;\n    border-radius: 75px / 300px;\n    background: #b20f05;\n    overflow: hidden;\n  }\n  .mouth .down .circular-1 .circular-2 {\n    position: absolute;\n    /* border: 1px solid #000; */\n    width: 200px;\n    height: 300px;\n    background: #ff6569;\n    bottom: -156px;\n    left: 50%;\n    margin-left: -100px;\n    border-radius: 100px;\n  }\n  \n  /* \u8138\u988A */\n  .face {\n    border: 1px solid #000;\n    position: absolute;\n    width: 88px;\n    height: 88px;\n    border: 4px solid #000;\n    left: 50%;\n    top: 200px;\n    /* margin-left: -44px; */\n    z-index: 3;\n    border-radius: 50%;\n  }\n  .face.left {\n    transform: translateX(-200px);\n    background: #ff1a01;\n  }\n  .face.right {\n    transform: translateX(112px);\n    background: #ff1a01;\n  }\n  /* \u8BBE\u7F6E\u95EA\u7535 */\n  .face > img {\n    /* border: 1px solid #000; */\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    /* display: none; */\n  }\n  \n  .face.left > img {\n    transform: rotate(180deg);\n    transform-origin: 0 0;\n  }\n";
var player = {
  n: 1,
  time: 10,
  id: undefined,
  ui: {
    demo: document.querySelector('#demo'),
    demo_2: document.querySelector('#demo_2')
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  init: function init() {
    player.ui.demo.innerText = string.substring(0, player.n);
    player.ui.demo_2.innerHTML = string.substring(0, player.n);
    player.bindEvents();
    player.play();
  },
  bindEvents: function bindEvents() {
    // console.log('bind');
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n > string.length) {
      window.clearInterval(player.id);
      return;
    } // console.log(n + '' + string.substring(0, n))


    player.ui.demo.innerText = string.substring(0, player.n);
    player.ui.demo_2.innerHTML = string.substring(0, player.n); // 把代码显示区域 不断下拉 每次都能看到最新的代码
    // demo.scrollTop = 5062.5

    player.ui.demo.scrollTop = demo.scrollHeight;
  },
  play: function play() {
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    // console.log('pause');
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 300;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 100;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 1;
    player.play();
  }
};
player.init();
/*
重复率高的代码即为丑的代码
不断封装代码
*/
},{}],"../../../.config/yarn/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49797" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../.config/yarn/global/node_modules/parcel/src/builtins/hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.e98b79dd.js.map