module.exports = (function(e) {
  const t = {};
  function r(o) {
    if (t[o]) return t[o].exports;
    const n = (t[o] = { i: o, l: !1, exports: {} });
    return e[o].call(n.exports, n, n.exports, r), (n.l = !0), n.exports;
  }
  return (
    (r.m = e),
    (r.c = t),
    (r.d = function(e, t, o) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
    }),
    (r.r = function(e) {
      typeof Symbol !== 'undefined' &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (r.t = function(e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && typeof e === 'object' && e && e.__esModule) return e;
      const o = Object.create(null);
      if (
        (r.r(o),
        Object.defineProperty(o, 'default', { enumerable: !0, value: e }),
        2 & t && typeof e !== 'string')
      )
        for (const n in e) r.d(o, n, (t => e[t]).bind(null, n));
      return o;
    }),
    (r.n = function(e) {
      const t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return r.d(t, 'a', t), t;
    }),
    (r.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = ''),
    r((r.s = './app/main.dev.js'))
  );
})({
  './app/main.dev.js': function(e, t, r) {
    r.r(t);
    r('./node_modules/core-js/modules/web.dom.iterable.js');
    const o = r('electron');
    const n = r('electron-updater');
    const s = r('electron-log');
    const i = r.n(s);
    class a {
      constructor(e) {
        (this.mainWindow = void 0), (this.mainWindow = e);
      }

      buildMenu() {
        const e =
          process.platform === 'darwin'
            ? this.buildDarwinTemplate()
            : this.buildDefaultTemplate();
        const t = o.Menu.buildFromTemplate(e);
        return o.Menu.setApplicationMenu(t), t;
      }

      setupDevelopmentEnvironment() {
        this.mainWindow.openDevTools(),
          this.mainWindow.webContents.on('context-menu', (e, t) => {
            const { x: r, y: n } = t;
            o.Menu.buildFromTemplate([
              {
                label: 'Inspect element',
                click: () => {
                  this.mainWindow.inspectElement(r, n);
                }
              }
            ]).popup(this.mainWindow);
          });
      }

      buildDarwinTemplate() {
        return [
          {
            label: 'Electron',
            submenu: [
              {
                label: 'About ElectronReact',
                selector: 'orderFrontStandardAboutPanel:'
              },
              { type: 'separator' },
              { label: 'Services', submenu: [] },
              { type: 'separator' },
              {
                label: 'Hide ElectronReact',
                accelerator: 'Command+H',
                selector: 'hide:'
              },
              {
                label: 'Hide Others',
                accelerator: 'Command+Shift+H',
                selector: 'hideOtherApplications:'
              },
              { label: 'Show All', selector: 'unhideAllApplications:' },
              { type: 'separator' },
              {
                label: 'Quit',
                accelerator: 'Command+Q',
                click: () => {
                  o.app.quit();
                }
              }
            ]
          },
          {
            label: 'Edit',
            submenu: [
              { label: 'Undo', accelerator: 'Command+Z', selector: 'undo:' },
              {
                label: 'Redo',
                accelerator: 'Shift+Command+Z',
                selector: 'redo:'
              },
              { type: 'separator' },
              { label: 'Cut', accelerator: 'Command+X', selector: 'cut:' },
              { label: 'Copy', accelerator: 'Command+C', selector: 'copy:' },
              { label: 'Paste', accelerator: 'Command+V', selector: 'paste:' },
              {
                label: 'Select All',
                accelerator: 'Command+A',
                selector: 'selectAll:'
              }
            ]
          },
          {
            label: 'View',
            submenu: [
              {
                label: 'Toggle Full Screen',
                accelerator: 'Ctrl+Command+F',
                click: () => {
                  this.mainWindow.setFullScreen(
                    !this.mainWindow.isFullScreen()
                  );
                }
              }
            ]
          },
          {
            label: 'Window',
            submenu: [
              {
                label: 'Minimize',
                accelerator: 'Command+M',
                selector: 'performMiniaturize:'
              },
              {
                label: 'Close',
                accelerator: 'Command+W',
                selector: 'performClose:'
              },
              { type: 'separator' },
              { label: 'Bring All to Front', selector: 'arrangeInFront:' }
            ]
          },
          {
            label: 'Help',
            submenu: [
              {
                label: 'Learn More',
                click() {
                  o.shell.openExternal('http://electron.atom.io');
                }
              },
              {
                label: 'Documentation',
                click() {
                  o.shell.openExternal(
                    'https://github.com/atom/electron/tree/master/docs#readme'
                  );
                }
              },
              {
                label: 'Community Discussions',
                click() {
                  o.shell.openExternal('https://discuss.atom.io/c/electron');
                }
              },
              {
                label: 'Search Issues',
                click() {
                  o.shell.openExternal(
                    'https://github.com/atom/electron/issues'
                  );
                }
              }
            ]
          }
        ];
      }

      buildDefaultTemplate() {
        return [
          {
            label: '&File',
            submenu: [
              { label: '&Open', accelerator: 'Ctrl+O' },
              {
                label: '&Close',
                accelerator: 'Ctrl+W',
                click: () => {
                  this.mainWindow.close();
                }
              }
            ]
          },
          {
            label: '&View',
            submenu: [
              {
                label: 'Toggle &Full Screen',
                accelerator: 'F11',
                click: () => {
                  this.mainWindow.setFullScreen(
                    !this.mainWindow.isFullScreen()
                  );
                }
              }
            ]
          },
          {
            label: 'Help',
            submenu: [
              {
                label: 'Learn More',
                click() {
                  o.shell.openExternal('http://electron.atom.io');
                }
              },
              {
                label: 'Documentation',
                click() {
                  o.shell.openExternal(
                    'https://github.com/atom/electron/tree/master/docs#readme'
                  );
                }
              },
              {
                label: 'Community Discussions',
                click() {
                  o.shell.openExternal('https://discuss.atom.io/c/electron');
                }
              },
              {
                label: 'Search Issues',
                click() {
                  o.shell.openExternal(
                    'https://github.com/atom/electron/issues'
                  );
                }
              }
            ]
          }
        ];
      }
    }
    r.d(t, 'default', () => c);
    class c {
      constructor() {
        (i.a.transports.file.level = 'info'),
          (n.autoUpdater.logger = i.a),
          n.autoUpdater.checkForUpdatesAndNotify();
      }
    }
    let u = null;
    r('source-map-support').install();
    o.app.on('window-all-closed', () => {
      process.platform !== 'darwin' && o.app.quit();
    }),
      o.app.on('ready', async () => {
        (u = new o.BrowserWindow({
          show: !1,
          width: 1024,
          height: 728
        })).loadURL(`file://${__dirname}/app.html`),
          u.webContents.on('did-finish-load', () => {
            if (!u) throw new Error('"mainWindow" is not defined');
            u.show(), u.focus();
          }),
          u.on('closed', () => {
            u = null;
          }),
          new a(u).buildMenu(),
          new c();
      });
  },
  './node_modules/7zip/index.js': function(e, t, r) {
    let o;
    let n;
    const s = r('path').resolve;
    const i = r('./node_modules/7zip/package.json').bin;
    e.exports = ((o = i),
    (n = function(e) {
      return s(__dirname, e);
    }),
    Object.keys(o).reduce((e, t) => (e[t] = n(o[t])), e, {}));
  },
  './node_modules/7zip/package.json': function(e) {
    e.exports = {
      name: '7zip',
      version: '0.0.6',
      description: '7zip Windows Package via Node.js',
      keywords: ['7z', '7zip', '7-zip', 'windows', 'install'],
      repository: 'git@github.com:fritx/win-7zip.git',
      bin: { '7z': '7zip-lite/7z.exe' },
      main: 'index.js',
      scripts: { test: 'mocha' },
      license: 'GNU LGPL'
    };
  },
  './node_modules/balanced-match/index.js': function(e, t, r) {
    function o(e, t, r) {
      e instanceof RegExp && (e = n(e, r)),
        t instanceof RegExp && (t = n(t, r));
      const o = s(e, t, r);
      return (
        o && {
          start: o[0],
          end: o[1],
          pre: r.slice(0, o[0]),
          body: r.slice(o[0] + e.length, o[1]),
          post: r.slice(o[1] + t.length)
        }
      );
    }
    function n(e, t) {
      const r = t.match(e);
      return r ? r[0] : null;
    }
    function s(e, t, r) {
      let o;
      let n;
      let s;
      let i;
      let a;
      let c = r.indexOf(e);
      let u = r.indexOf(t, c + 1);
      let l = c;
      if (c >= 0 && u > 0) {
        for (o = [], s = r.length; l >= 0 && !a; ) {
          l == c
            ? (o.push(l), (c = r.indexOf(e, l + 1)))
            : o.length == 1
            ? (a = [o.pop(), u])
            : ((n = o.pop()) < s && ((s = n), (i = u)),
              (u = r.indexOf(t, l + 1))),
            (l = c < u && c >= 0 ? c : u);
        }
        o.length && (a = [s, i]);
      }
      return a;
    }
    (e.exports = o), (o.range = s);
  },
  './node_modules/brace-expansion/index.js': function(e, t, r) {
    const o = r('./node_modules/concat-map/index.js');
    const n = r('./node_modules/balanced-match/index.js');
    e.exports = function(e) {
      if (!e) return [];
      e.substr(0, 2) === '{}' && (e = `\\{\\}${e.substr(2)}`);
      return (function e(t, r) {
        const s = [];
        const i = n('{', '}', t);
        if (!i || /\$$/.test(i.pre)) return [t];
        const c = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(i.body);
        const u = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(i.body);
        const d = c || u;
        const v = i.body.indexOf(',') >= 0;
        if (!d && !v) {
          return i.post.match(/,.*\}/)
            ? ((t = `${i.pre}{${i.body}${a}${i.post}`), e(t))
            : [t];
        }
        let _;
        if (d) _ = i.body.split(/\.\./);
        else if (
          (_ = (function e(t) {
            if (!t) return [''];
            const r = [];
            const o = n('{', '}', t);
            if (!o) return t.split(',');
            const s = o.pre;
            const i = o.body;
            const a = o.post;
            const c = s.split(',');
            c[c.length - 1] += `{${i}}`;
            const u = e(a);
            a.length && ((c[c.length - 1] += u.shift()), c.push(...u));
            r.push(...c);
            return r;
          })(i.body)).length === 1 &&
          (_ = e(_[0], !1).map(h)).length === 1
        ) {
          var j = i.post.length ? e(i.post, !1) : [''];
          return j.map(e => i.pre + _[0] + e);
        }
        const y = i.pre;
        var j = i.post.length ? e(i.post, !1) : [''];
        let g;
        if (d) {
          const b = l(_[0]);
          const w = l(_[1]);
          const E = Math.max(_[0].length, _[1].length);
          let x = _.length == 3 ? Math.abs(l(_[2])) : 1;
          let O = p;
          const S = w < b;
          S && ((x *= -1), (O = m));
          const k = _.some(f);
          g = [];
          for (let A = b; O(A, w); A += x) {
            var T;
            if (u) (T = String.fromCharCode(A)) === '\\' && (T = '');
            else if (((T = String(A)), k)) {
              const R = E - T.length;
              if (R > 0) {
                const P = new Array(R + 1).join('0');
                T = A < 0 ? `-${P}${T.slice(1)}` : P + T;
              }
            }
            g.push(T);
          }
        } else g = o(_, t => e(t, !1));
        for (let L = 0; L < g.length; L++) {
          for (let M = 0; M < j.length; M++) {
            const C = y + g[L] + j[M];
            (!r || d || C) && s.push(C);
          }
        }
        return s;
      })(
        (function(e) {
          return e
            .split('\\\\')
            .join(s)
            .split('\\{')
            .join(i)
            .split('\\}')
            .join(a)
            .split('\\,')
            .join(c)
            .split('\\.')
            .join(u);
        })(e),
        !0
      ).map(d);
    };
    var s = `\0SLASH${Math.random()}\0`;
    var i = `\0OPEN${Math.random()}\0`;
    var a = `\0CLOSE${Math.random()}\0`;
    var c = `\0COMMA${Math.random()}\0`;
    var u = `\0PERIOD${Math.random()}\0`;
    function l(e) {
      return parseInt(e, 10) == e ? parseInt(e, 10) : e.charCodeAt(0);
    }
    function d(e) {
      return e
        .split(s)
        .join('\\')
        .split(i)
        .join('{')
        .split(a)
        .join('}')
        .split(c)
        .join(',')
        .split(u)
        .join('.');
    }
    function h(e) {
      return `{${e}}`;
    }
    function f(e) {
      return /^-?0\d/.test(e);
    }
    function p(e, t) {
      return e <= t;
    }
    function m(e, t) {
      return e >= t;
    }
  },
  './node_modules/concat-map/index.js': function(e, t) {
    e.exports = function(e, t) {
      for (var o = [], n = 0; n < e.length; n++) {
        const s = t(e[n], n);
        r(s) ? o.push(...s) : o.push(s);
      }
      return o;
    };
    var r =
      Array.isArray ||
      function(e) {
        return Object.prototype.toString.call(e) === '[object Array]';
      };
  },
  './node_modules/core-js/modules/_a-function.js': function(e, t) {
    e.exports = function(e) {
      if (typeof e !== 'function') throw TypeError(`${e} is not a function!`);
      return e;
    };
  },
  './node_modules/core-js/modules/_add-to-unscopables.js': function(e, t, r) {
    const o = r('./node_modules/core-js/modules/_wks.js')('unscopables');
    const n = Array.prototype;
    n[o] == null && r('./node_modules/core-js/modules/_hide.js')(n, o, {}),
      (e.exports = function(e) {
        n[o][e] = !0;
      });
  },
  './node_modules/core-js/modules/_an-object.js': function(e, t, r) {
    const o = r('./node_modules/core-js/modules/_is-object.js');
    e.exports = function(e) {
      if (!o(e)) throw TypeError(`${e} is not an object!`);
      return e;
    };
  },
  './node_modules/core-js/modules/_array-includes.js': function(e, t, r) {
    const o = r('./node_modules/core-js/modules/_to-iobject.js');
    const n = r('./node_modules/core-js/modules/_to-length.js');
    const s = r('./node_modules/core-js/modules/_to-absolute-index.js');
    e.exports = function(e) {
      return function(t, r, i) {
        let a;
        const c = o(t);
        const u = n(c.length);
        let l = s(i, u);
        if (e && r != r) {
          for (; u > l; ) if ((a = c[l++]) != a) return !0;
        } else
          for (; u > l; l++)
            if ((e || l in c) && c[l] === r) return e || l || 0;
        return !e && -1;
      };
    };
  },
  './node_modules/core-js/modules/_cof.js': function(e, t) {
    const r = {}.toString;
    e.exports = function(e) {
      return r.call(e).slice(8, -1);
    };
  },
  './node_modules/core-js/modules/_core.js': function(e, t) {
    const r = (e.exports = { version: '2.5.7' });
    typeof __e === 'number' && (__e = r);
  },
  './node_modules/core-js/modules/_ctx.js': function(e, t, r) {
    const o = r('./node_modules/core-js/modules/_a-function.js');
    e.exports = function(e, t, r) {
      if ((o(e), void 0 === t)) return e;
      switch (r) {
        case 1:
          return function(r) {
            return e.call(t, r);
          };
        case 2:
          return function(r, o) {
            return e.call(t, r, o);
          };
        case 3:
          return function(r, o, n) {
            return e.call(t, r, o, n);
          };
      }
      return function() {
        return e.apply(t, arguments);
      };
    };
  },
  './node_modules/core-js/modules/_defined.js': function(e, t) {
    e.exports = function(e) {
      if (e == null) throw TypeError(`Can't call method on  ${e}`);
      return e;
    };
  },
  './node_modules/core-js/modules/_descriptors.js': function(e, t, r) {
    e.exports = !r('./node_modules/core-js/modules/_fails.js')(
      () =>
        Object.defineProperty({}, 'a', {
          get() {
            return 7;
          }
        }).a != 7
    );
  },
  './node_modules/core-js/modules/_dom-create.js': function(e, t, r) {
    const o = r('./node_modules/core-js/modules/_is-object.js');
    const n = r('./node_modules/core-js/modules/_global.js').document;
    const s = o(n) && o(n.createElement);
    e.exports = function(e) {
      return s ? n.createElement(e) : {};
    };
  },
  './node_modules/core-js/modules/_enum-bug-keys.js': function(e, t) {
    e.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(
      ','
    );
  },
  './node_modules/core-js/modules/_export.js': function(e, t, r) {
    const o = r('./node_modules/core-js/modules/_global.js');
    const n = r('./node_modules/core-js/modules/_core.js');
    const s = r('./node_modules/core-js/modules/_hide.js');
    const i = r('./node_modules/core-js/modules/_redefine.js');
    const a = r('./node_modules/core-js/modules/_ctx.js');
    var c = function(e, t, r) {
      let u;
      let l;
      let d;
      let h;
      const f = e & c.F;
      const p = e & c.G;
      const m = e & c.S;
      const v = e & c.P;
      const _ = e & c.B;
      const j = p ? o : m ? o[t] || (o[t] = {}) : (o[t] || {}).prototype;
      const y = p ? n : n[t] || (n[t] = {});
      const g = y.prototype || (y.prototype = {});
      for (u in (p && (r = t), r)) {
        (d = ((l = !f && j && void 0 !== j[u]) ? j : r)[u]),
          (h =
            _ && l
              ? a(d, o)
              : v && typeof d === 'function'
              ? a(Function.call, d)
              : d),
          j && i(j, u, d, e & c.U),
          y[u] != d && s(y, u, h),
          v && g[u] != d && (g[u] = d);
      }
    };
    (o.core = n),
      (c.F = 1),
      (c.G = 2),
      (c.S = 4),
      (c.P = 8),
      (c.B = 16),
      (c.W = 32),
      (c.U = 64),
      (c.R = 128),
      (e.exports = c);
  },
  './node_modules/core-js/modules/_fails.js': function(e, t) {
    e.exports = function(e) {
      try {
        return !!e();
      } catch (e) {
        return !0;
      }
    };
  },
  './node_modules/core-js/modules/_global.js': function(e, t) {
    const r = (e.exports =
      typeof window !== 'undefined' && window.Math == Math
        ? window
        : typeof self !== 'undefined' && self.Math == Math
        ? self
        : Function('return this')());
    typeof __g === 'number' && (__g = r);
  },
  './node_modules/core-js/modules/_has.js': function(e, t) {
    const r = {}.hasOwnProperty;
    e.exports = function(e, t) {
      return r.call(e, t);
    };
  },
  './node_modules/core-js/modules/_hide.js': function(e, t, r) {
    const o = r('./node_modules/core-js/modules/_object-dp.js');
    const n = r('./node_modules/core-js/modules/_property-desc.js');
    e.exports = r('./node_modules/core-js/modules/_descriptors.js')
      ? function(e, t, r) {
          return o.f(e, t, n(1, r));
        }
      : function(e, t, r) {
          return (e[t] = r), e;
        };
  },
  './node_modules/core-js/modules/_html.js': function(e, t, r) {
    const o = r('./node_modules/core-js/modules/_global.js').document;
    e.exports = o && o.documentElement;
  },
  './node_modules/core-js/modules/_ie8-dom-define.js': function(e, t, r) {
    e.exports =
      !r('./node_modules/core-js/modules/_descriptors.js') &&
      !r('./node_modules/core-js/modules/_fails.js')(
        () =>
          Object.defineProperty(
            r('./node_modules/core-js/modules/_dom-create.js')('div'),
            'a',
            {
              get() {
                return 7;
              }
            }
          ).a != 7
      );
  },
  './node_modules/core-js/modules/_iobject.js': function(e, t, r) {
    const o = r('./node_modules/core-js/modules/_cof.js');
    e.exports = Object('z').propertyIsEnumerable(0)
      ? Object
      : function(e) {
          return o(e) == 'String' ? e.split('') : Object(e);
        };
  },
  './node_modules/core-js/modules/_is-object.js': function(e, t) {
    e.exports = function(e) {
      return typeof e === 'object' ? e !== null : typeof e === 'function';
    };
  },
  './node_modules/core-js/modules/_iter-create.js': function(e, t, r) {
    const o = r('./node_modules/core-js/modules/_object-create.js');
    const n = r('./node_modules/core-js/modules/_property-desc.js');
    const s = r('./node_modules/core-js/modules/_set-to-string-tag.js');
    const i = {};
    r('./node_modules/core-js/modules/_hide.js')(
      i,
      r('./node_modules/core-js/modules/_wks.js')('iterator'),
      function() {
        return this;
      }
    ),
      (e.exports = function(e, t, r) {
        (e.prototype = o(i, { next: n(1, r) })), s(e, `${t} Iterator`);
      });
  },
  './node_modules/core-js/modules/_iter-define.js': function(e, t, r) {
    const o = r('./node_modules/core-js/modules/_library.js');
    const n = r('./node_modules/core-js/modules/_export.js');
    const s = r('./node_modules/core-js/modules/_redefine.js');
    const i = r('./node_modules/core-js/modules/_hide.js');
    const a = r('./node_modules/core-js/modules/_iterators.js');
    const c = r('./node_modules/core-js/modules/_iter-create.js');
    const u = r('./node_modules/core-js/modules/_set-to-string-tag.js');
    const l = r('./node_modules/core-js/modules/_object-gpo.js');
    const d = r('./node_modules/core-js/modules/_wks.js')('iterator');
    const h = !([].keys && 'next' in [].keys());
    const f = function() {
      return this;
    };
    e.exports = function(e, t, r, p, m, v, _) {
      c(r, t, p);
      let j;
      let y;
      let g;
      const b = function(e) {
        if (!h && e in O) return O[e];
        switch (e) {
          case 'keys':
          case 'values':
            return function() {
              return new r(this, e);
            };
        }
        return function() {
          return new r(this, e);
        };
      };
      const w = `${t} Iterator`;
      const E = m == 'values';
      let x = !1;
      var O = e.prototype;
      const S = O[d] || O['@@iterator'] || (m && O[m]);
      let k = S || b(m);
      const A = m ? (E ? b('entries') : k) : void 0;
      const T = (t == 'Array' && O.entries) || S;
      if (
        (T &&
          (g = l(T.call(new e()))) !== Object.prototype &&
          g.next &&
          (u(g, w, !0), o || typeof g[d] === 'function' || i(g, d, f)),
        E &&
          S &&
          S.name !== 'values' &&
          ((x = !0),
          (k = function() {
            return S.call(this);
          })),
        (o && !_) || (!h && !x && O[d]) || i(O, d, k),
        (a[t] = k),
        (a[w] = f),
        m)
      ) {
        if (
          ((j = {
            values: E ? k : b('values'),
            keys: v ? k : b('keys'),
            entries: A
          }),
          _)
        )
          for (y in j) y in O || s(O, y, j[y]);
        else n(n.P + n.F * (h || x), t, j);
      }
      return j;
    };
  },
  './node_modules/core-js/modules/_iter-step.js': function(e, t) {
    e.exports = function(e, t) {
      return { value: t, done: !!e };
    };
  },
  './node_modules/core-js/modules/_iterators.js': function(e, t) {
    e.exports = {};
  },
  './node_modules/core-js/modules/_library.js': function(e, t) {
    e.exports = !1;
  },
  './node_modules/core-js/modules/_object-create.js': function(e, t, r) {
    const o = r('./node_modules/core-js/modules/_an-object.js');
    const n = r('./node_modules/core-js/modules/_object-dps.js');
    const s = r('./node_modules/core-js/modules/_enum-bug-keys.js');
    const i = r('./node_modules/core-js/modules/_shared-key.js')('IE_PROTO');
    const a = function() {};
    var c = function() {
      let e;
      const t = r('./node_modules/core-js/modules/_dom-create.js')('iframe');
      let o = s.length;
      for (
        t.style.display = 'none',
          r('./node_modules/core-js/modules/_html.js').appendChild(t),
          t.src = 'javascript:',
          (e = t.contentWindow.document).open(),
          e.write('<script>document.F=Object</script>'),
          e.close(),
          c = e.F;
        o--;

      )
        delete c.prototype[s[o]];
      return c();
    };
    e.exports =
      Object.create ||
      function(e, t) {
        let r;
        return (
          e !== null
            ? ((a.prototype = o(e)),
              (r = new a()),
              (a.prototype = null),
              (r[i] = e))
            : (r = c()),
          void 0 === t ? r : n(r, t)
        );
      };
  },
  './node_modules/core-js/modules/_object-dp.js': function(e, t, r) {
    const o = r('./node_modules/core-js/modules/_an-object.js');
    const n = r('./node_modules/core-js/modules/_ie8-dom-define.js');
    const s = r('./node_modules/core-js/modules/_to-primitive.js');
    const i = Object.defineProperty;
    t.f = r('./node_modules/core-js/modules/_descriptors.js')
      ? Object.defineProperty
      : function(e, t, r) {
          if ((o(e), (t = s(t, !0)), o(r), n)) {
            try {
              return i(e, t, r);
            } catch (e) {}
          }
          if ('get' in r || 'set' in r)
            throw TypeError('Accessors not supported!');
          return 'value' in r && (e[t] = r.value), e;
        };
  },
  './node_modules/core-js/modules/_object-dps.js': function(e, t, r) {
    const o = r('./node_modules/core-js/modules/_object-dp.js');
    const n = r('./node_modules/core-js/modules/_an-object.js');
    const s = r('./node_modules/core-js/modules/_object-keys.js');
    e.exports = r('./node_modules/core-js/modules/_descriptors.js')
      ? Object.defineProperties
      : function(e, t) {
          n(e);
          for (var r, i = s(t), a = i.length, c = 0; a > c; )
            o.f(e, (r = i[c++]), t[r]);
          return e;
        };
  },
  './node_modules/core-js/modules/_object-gpo.js': function(e, t, r) {
    const o = r('./node_modules/core-js/modules/_has.js');
    const n = r('./node_modules/core-js/modules/_to-object.js');
    const s = r('./node_modules/core-js/modules/_shared-key.js')('IE_PROTO');
    const i = Object.prototype;
    e.exports =
      Object.getPrototypeOf ||
      function(e) {
        return (
          (e = n(e)),
          o(e, s)
            ? e[s]
            : typeof e.constructor === 'function' && e instanceof e.constructor
            ? e.constructor.prototype
            : e instanceof Object
            ? i
            : null
        );
      };
  },
  './node_modules/core-js/modules/_object-keys-internal.js': function(e, t, r) {
    const o = r('./node_modules/core-js/modules/_has.js');
    const n = r('./node_modules/core-js/modules/_to-iobject.js');
    const s = r('./node_modules/core-js/modules/_array-includes.js')(!1);
    const i = r('./node_modules/core-js/modules/_shared-key.js')('IE_PROTO');
    e.exports = function(e, t) {
      let r;
      const a = n(e);
      let c = 0;
      const u = [];
      for (r in a) r != i && o(a, r) && u.push(r);
      for (; t.length > c; ) o(a, (r = t[c++])) && (~s(u, r) || u.push(r));
      return u;
    };
  },
  './node_modules/core-js/modules/_object-keys.js': function(e, t, r) {
    const o = r('./node_modules/core-js/modules/_object-keys-internal.js');
    const n = r('./node_modules/core-js/modules/_enum-bug-keys.js');
    e.exports =
      Object.keys ||
      function(e) {
        return o(e, n);
      };
  },
  './node_modules/core-js/modules/_property-desc.js': function(e, t) {
    e.exports = function(e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t
      };
    };
  },
  './node_modules/core-js/modules/_redefine.js': function(e, t, r) {
    const o = r('./node_modules/core-js/modules/_global.js');
    const n = r('./node_modules/core-js/modules/_hide.js');
    const s = r('./node_modules/core-js/modules/_has.js');
    const i = r('./node_modules/core-js/modules/_uid.js')('src');
    const a = Function.toString;
    const c = `${a}`.split('toString');
    (r('./node_modules/core-js/modules/_core.js').inspectSource = function(e) {
      return a.call(e);
    }),
      (e.exports = function(e, t, r, a) {
        const u = typeof r === 'function';
        u && (s(r, 'name') || n(r, 'name', t)),
          e[t] !== r &&
            (u && (s(r, i) || n(r, i, e[t] ? `${e[t]}` : c.join(String(t)))),
            e === o
              ? (e[t] = r)
              : a
              ? e[t]
                ? (e[t] = r)
                : n(e, t, r)
              : (delete e[t], n(e, t, r)));
      })(Function.prototype, 'toString', function() {
        return (typeof this === 'function' && this[i]) || a.call(this);
      });
  },
  './node_modules/core-js/modules/_set-to-string-tag.js': function(e, t, r) {
    const o = r('./node_modules/core-js/modules/_object-dp.js').f;
    const n = r('./node_modules/core-js/modules/_has.js');
    const s = r('./node_modules/core-js/modules/_wks.js')('toStringTag');
    e.exports = function(e, t, r) {
      e &&
        !n((e = r ? e : e.prototype), s) &&
        o(e, s, { configurable: !0, value: t });
    };
  },
  './node_modules/core-js/modules/_shared-key.js': function(e, t, r) {
    const o = r('./node_modules/core-js/modules/_shared.js')('keys');
    const n = r('./node_modules/core-js/modules/_uid.js');
    e.exports = function(e) {
      return o[e] || (o[e] = n(e));
    };
  },
  './node_modules/core-js/modules/_shared.js': function(e, t, r) {
    const o = r('./node_modules/core-js/modules/_core.js');
    const n = r('./node_modules/core-js/modules/_global.js');
    const s = n['__core-js_shared__'] || (n['__core-js_shared__'] = {});
    (e.exports = function(e, t) {
      return s[e] || (s[e] = void 0 !== t ? t : {});
    })('versions', []).push({
      version: o.version,
      mode: r('./node_modules/core-js/modules/_library.js') ? 'pure' : 'global',
      copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
    });
  },
  './node_modules/core-js/modules/_to-absolute-index.js': function(e, t, r) {
    const o = r('./node_modules/core-js/modules/_to-integer.js');
    const n = Math.max;
    const s = Math.min;
    e.exports = function(e, t) {
      return (e = o(e)) < 0 ? n(e + t, 0) : s(e, t);
    };
  },
  './node_modules/core-js/modules/_to-integer.js': function(e, t) {
    const r = Math.ceil;
    const o = Math.floor;
    e.exports = function(e) {
      return isNaN((e = +e)) ? 0 : (e > 0 ? o : r)(e);
    };
  },
  './node_modules/core-js/modules/_to-iobject.js': function(e, t, r) {
    const o = r('./node_modules/core-js/modules/_iobject.js');
    const n = r('./node_modules/core-js/modules/_defined.js');
    e.exports = function(e) {
      return o(n(e));
    };
  },
  './node_modules/core-js/modules/_to-length.js': function(e, t, r) {
    const o = r('./node_modules/core-js/modules/_to-integer.js');
    const n = Math.min;
    e.exports = function(e) {
      return e > 0 ? n(o(e), 9007199254740991) : 0;
    };
  },
  './node_modules/core-js/modules/_to-object.js': function(e, t, r) {
    const o = r('./node_modules/core-js/modules/_defined.js');
    e.exports = function(e) {
      return Object(o(e));
    };
  },
  './node_modules/core-js/modules/_to-primitive.js': function(e, t, r) {
    const o = r('./node_modules/core-js/modules/_is-object.js');
    e.exports = function(e, t) {
      if (!o(e)) return e;
      let r;
      let n;
      if (t && typeof (r = e.toString) === 'function' && !o((n = r.call(e))))
        return n;
      if (typeof (r = e.valueOf) === 'function' && !o((n = r.call(e))))
        return n;
      if (!t && typeof (r = e.toString) === 'function' && !o((n = r.call(e))))
        return n;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  './node_modules/core-js/modules/_uid.js': function(e, t) {
    let r = 0;
    const o = Math.random();
    e.exports = function(e) {
      return 'Symbol('.concat(
        void 0 === e ? '' : e,
        ')_',
        (++r + o).toString(36)
      );
    };
  },
  './node_modules/core-js/modules/_wks.js': function(e, t, r) {
    const o = r('./node_modules/core-js/modules/_shared.js')('wks');
    const n = r('./node_modules/core-js/modules/_uid.js');
    const s = r('./node_modules/core-js/modules/_global.js').Symbol;
    const i = typeof s === 'function';
    (e.exports = function(e) {
      return o[e] || (o[e] = (i && s[e]) || (i ? s : n)(`Symbol.${e}`));
    }).store = o;
  },
  './node_modules/core-js/modules/es6.array.iterator.js': function(e, t, r) {
    const o = r('./node_modules/core-js/modules/_add-to-unscopables.js');
    const n = r('./node_modules/core-js/modules/_iter-step.js');
    const s = r('./node_modules/core-js/modules/_iterators.js');
    const i = r('./node_modules/core-js/modules/_to-iobject.js');
    (e.exports = r('./node_modules/core-js/modules/_iter-define.js')(
      Array,
      'Array',
      function(e, t) {
        (this._t = i(e)), (this._i = 0), (this._k = t);
      },
      function() {
        const e = this._t;
        const t = this._k;
        const r = this._i++;
        return !e || r >= e.length
          ? ((this._t = void 0), n(1))
          : n(0, t == 'keys' ? r : t == 'values' ? e[r] : [r, e[r]]);
      },
      'values'
    )),
      (s.Arguments = s.Array),
      o('keys'),
      o('values'),
      o('entries');
  },
  './node_modules/core-js/modules/web.dom.iterable.js': function(e, t, r) {
    for (
      let o = r('./node_modules/core-js/modules/es6.array.iterator.js'),
        n = r('./node_modules/core-js/modules/_object-keys.js'),
        s = r('./node_modules/core-js/modules/_redefine.js'),
        i = r('./node_modules/core-js/modules/_global.js'),
        a = r('./node_modules/core-js/modules/_hide.js'),
        c = r('./node_modules/core-js/modules/_iterators.js'),
        u = r('./node_modules/core-js/modules/_wks.js'),
        l = u('iterator'),
        d = u('toStringTag'),
        h = c.Array,
        f = {
          CSSRuleList: !0,
          CSSStyleDeclaration: !1,
          CSSValueList: !1,
          ClientRectList: !1,
          DOMRectList: !1,
          DOMStringList: !1,
          DOMTokenList: !0,
          DataTransferItemList: !1,
          FileList: !1,
          HTMLAllCollection: !1,
          HTMLCollection: !1,
          HTMLFormElement: !1,
          HTMLSelectElement: !1,
          MediaList: !0,
          MimeTypeArray: !1,
          NamedNodeMap: !1,
          NodeList: !0,
          PaintRequestList: !1,
          Plugin: !1,
          PluginArray: !1,
          SVGLengthList: !1,
          SVGNumberList: !1,
          SVGPathSegList: !1,
          SVGPointList: !1,
          SVGStringList: !1,
          SVGTransformList: !1,
          SourceBufferList: !1,
          StyleSheetList: !0,
          TextTrackCueList: !1,
          TextTrackList: !1,
          TouchList: !1
        },
        p = n(f),
        m = 0;
      m < p.length;
      m++
    ) {
      var v;
      const _ = p[m];
      const j = f[_];
      const y = i[_];
      const g = y && y.prototype;
      if (g && (g[l] || a(g, l, h), g[d] || a(g, d, _), (c[_] = h), j))
        for (v in o) g[v] || s(g, v, o[v], !0);
    }
  },
  './node_modules/cross-unzip/index.js': function(e, t, r) {
    const o = r('child_process').spawn;
    const n = Array.prototype.slice;
    const s =
      process.platform === 'win32'
        ? function(e, t, o) {
            i(
              r('./node_modules/7zip/index.js')['7z'],
              ['x', e, '-y', `-o${t}`],
              o
            );
          }
        : function(e, t, r) {
            i('unzip', ['-o', e, '-d', t], r);
          };
    function i(e, t, r) {
      let s;
      let i;
      (s = r),
        (i = !1),
        (r = function() {
          i || ((i = !0), s.apply(this, n.call(arguments)));
        });
      const a = o(e, t, { stdio: 'ignore' });
      a.on('error', e => {
        r(e);
      }),
        a.on('exit', e => {
          r(e ? new Error(`Exited with code ${e}`) : null);
        });
    }
    (s.unzip = s), (e.exports = s);
  },
  './node_modules/electron-devtools-installer/dist/downloadChromeExtension.js': function(
    e,
    t,
    r
  ) {
    Object.defineProperty(t, '__esModule', { value: !0 });
    const o = c(r('fs'));
    const n = c(r('path'));
    const s = c(r('./node_modules/rimraf/rimraf.js'));
    const i = c(r('./node_modules/cross-unzip/index.js'));
    const a = r('./node_modules/electron-devtools-installer/dist/utils.js');
    function c(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function e(t, r) {
      const c =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5;
      const u = (0, a.getPath)();
      o.default.existsSync(u) || o.default.mkdirSync(u);
      const l = n.default.resolve(`${u}/${t}`);
      return new Promise((u, d) => {
        if (!o.default.existsSync(l) || r) {
          o.default.existsSync(l) && s.default.sync(l);
          const h = `https://clients2.google.com/service/update2/crx?response=redirect&x=id%3D${t}%26uc&prodversion=32`;
          const f = n.default.resolve(`${l}.crx`);
          (0, a.downloadFile)(h, f)
            .then(() => {
              (0, i.default)(f, l, e => {
                if (
                  e &&
                  !o.default.existsSync(n.default.resolve(l, 'manifest.json'))
                )
                  return d(e);
                (0, a.changePermissions)(l, 755), u(l);
              });
            })
            .catch(o => {
              if (
                (console.log(
                  `Failed to fetch extension, trying ${c - 1} more times`
                ),
                c <= 1)
              )
                return d(o);
              setTimeout(() => {
                e(t, r, c - 1)
                  .then(u)
                  .catch(d);
              }, 200);
            });
        } else u(l);
      });
    };
  },
  './node_modules/electron-devtools-installer/dist/index.js': function(
    e,
    t,
    r
  ) {
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.MOBX_DEVTOOLS = t.APOLLO_DEVELOPER_TOOLS = t.CYCLEJS_DEVTOOL = t.REACT_PERF = t.REDUX_DEVTOOLS = t.VUEJS_DEVTOOLS = t.ANGULARJS_BATARANG = t.JQUERY_DEBUGGER = t.BACKBONE_DEBUGGER = t.REACT_DEVELOPER_TOOLS = t.EMBER_INSPECTOR = void 0);
    const o =
      typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
        ? function(e) {
            return typeof e;
          }
        : function(e) {
            return e &&
              typeof Symbol === 'function' &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? 'symbol'
              : typeof e;
          };
    const n = r('electron');
    const s = d(n);
    const i = d(r('fs'));
    const a = d(r('path'));
    const c = d(r('./node_modules/semver/semver.js'));
    const u = d(
      r(
        './node_modules/electron-devtools-installer/dist/downloadChromeExtension.js'
      )
    );
    const l = r('./node_modules/electron-devtools-installer/dist/utils.js');
    function d(e) {
      return e && e.__esModule ? e : { default: e };
    }
    const h = (n.remote || s.default).BrowserWindow;
    let f = {};
    const p = a.default.resolve((0, l.getPath)(), 'IDMap.json');
    if (i.default.existsSync(p)) {
      try {
        f = JSON.parse(i.default.readFileSync(p, 'utf8'));
      } catch (e) {
        console.error(
          'electron-devtools-installer: Invalid JSON present in the IDMap file'
        );
      }
    }
    t.default = function e(t) {
      const r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      if (Array.isArray(t)) return Promise.all(t.map(t => e(t, r)));
      let n = void 0;
      if ((void 0 === t ? 'undefined' : o(t)) === 'object' && t.id) {
        n = t.id;
        const s = process.versions.electron.split('-')[0];
        if (!c.default.satisfies(s, t.electron)) {
          return Promise.reject(
            new Error(
              `Version of Electron: ${s} does not match required range ${
                t.electron
              } for extension ${n}`
            )
          );
        }
      } else {
        if (typeof t !== 'string') {
          return Promise.reject(
            new Error(`Invalid extensionReference passed in: "${t}"`)
          );
        }
        n = t;
      }
      const a = f[n];
      const l = a && h.getDevToolsExtensions && h.getDevToolsExtensions()[a];
      return !r && l
        ? Promise.resolve(f[n])
        : (0, u.default)(n, r).then(e => {
            l && h.removeDevToolsExtension(a);
            let t;
            let r;
            let o;
            const s = h.addDevToolsExtension(e);
            return (
              i.default.writeFileSync(
                p,
                JSON.stringify(
                  Object.assign(
                    f,
                    ((o = s),
                    (r = n) in (t = {})
                      ? Object.defineProperty(t, r, {
                          value: o,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0
                        })
                      : (t[r] = o),
                    t)
                  )
                )
              ),
              Promise.resolve(s)
            );
          });
    };
    (t.EMBER_INSPECTOR = {
      id: 'bmdblncegkenkacieihfhpjfppoconhi',
      electron: '>=1.2.1'
    }),
      (t.REACT_DEVELOPER_TOOLS = {
        id: 'fmkadmapgofadopljbjfkapdkoienihi',
        electron: '>=1.2.1'
      }),
      (t.BACKBONE_DEBUGGER = {
        id: 'bhljhndlimiafopmmhjlgfpnnchjjbhd',
        electron: '>=1.2.1'
      }),
      (t.JQUERY_DEBUGGER = {
        id: 'dbhhnnnpaeobfddmlalhnehgclcmjimi',
        electron: '>=1.2.1'
      }),
      (t.ANGULARJS_BATARANG = {
        id: 'ighdmehidhipcmcojjgiloacoafjmpfk',
        electron: '>=1.2.1'
      }),
      (t.VUEJS_DEVTOOLS = {
        id: 'nhdogjmejiglipccpnnnanhbledajbpd',
        electron: '>=1.2.1'
      }),
      (t.REDUX_DEVTOOLS = {
        id: 'lmhkpmbekcpmknklioeibfkpmmfibljd',
        electron: '>=1.2.1'
      }),
      (t.REACT_PERF = {
        id: 'hacmcodfllhbnekmghgdlplbdnahmhmm',
        electron: '>=1.2.6'
      }),
      (t.CYCLEJS_DEVTOOL = {
        id: 'dfgplfmhhmdekalbpejekgfegkonjpfp',
        electron: '>=1.2.1'
      }),
      (t.APOLLO_DEVELOPER_TOOLS = {
        id: 'jdkknkkbebbapilgoeccciglkfbmbnfm',
        electron: '>=1.2.1'
      }),
      (t.MOBX_DEVTOOLS = {
        id: 'pfgnfdagidkfgccljigdamigbcnndkod',
        electron: '>=1.2.1'
      });
  },
  './node_modules/electron-devtools-installer/dist/utils.js': function(
    e,
    t,
    r
  ) {
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.changePermissions = t.downloadFile = t.getPath = void 0);
    const o = r('electron');
    const n = c(o);
    const s = c(r('fs'));
    const i = c(r('path'));
    const a = c(r('https'));
    function c(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.getPath = function() {
      const e = (o.remote || n.default).app.getPath('userData');
      return i.default.resolve(`${e}/extensions`);
    };
    const u = (o.remote || n.default).net;
    const l = u ? u.request : a.default.get;
    (t.downloadFile = function e(t, r) {
      return new Promise((o, n) => {
        const i = l(t);
        i.on('response', t => {
          if (t.statusCode >= 300 && t.statusCode < 400 && t.headers.location) {
            return e(t.headers.location, r)
              .then(o)
              .catch(n);
          }
          t.pipe(s.default.createWriteStream(r)).on('close', o);
        }),
          i.on('error', n),
          i.end();
      });
    }),
      (t.changePermissions = function e(t, r) {
        s.default.readdirSync(t).forEach(o => {
          const n = i.default.join(t, o);
          s.default.chmodSync(n, parseInt(r, 8)),
            s.default.statSync(n).isDirectory() && e(n, r);
        });
      });
  },
  './node_modules/fs.realpath/index.js': function(e, t, r) {
    (e.exports = l),
      (l.realpath = l),
      (l.sync = d),
      (l.realpathSync = d),
      (l.monkeypatch = function() {
        (o.realpath = l), (o.realpathSync = d);
      }),
      (l.unmonkeypatch = function() {
        (o.realpath = n), (o.realpathSync = s);
      });
    var o = r('fs');
    var n = o.realpath;
    var s = o.realpathSync;
    const i = process.version;
    const a = /^v[0-5]\./.test(i);
    const c = r('./node_modules/fs.realpath/old.js');
    function u(e) {
      return (
        e &&
        e.syscall === 'realpath' &&
        (e.code === 'ELOOP' || e.code === 'ENOMEM' || e.code === 'ENAMETOOLONG')
      );
    }
    function l(e, t, r) {
      if (a) return n(e, t, r);
      typeof t === 'function' && ((r = t), (t = null)),
        n(e, t, (o, n) => {
          u(o) ? c.realpath(e, t, r) : r(o, n);
        });
    }
    function d(e, t) {
      if (a) return s(e, t);
      try {
        return s(e, t);
      } catch (r) {
        if (u(r)) return c.realpathSync(e, t);
        throw r;
      }
    }
  },
  './node_modules/fs.realpath/old.js': function(e, t, r) {
    const o = r('path');
    const n = process.platform === 'win32';
    const s = r('fs');
    const i = process.env.NODE_DEBUG && /fs/.test(process.env.NODE_DEBUG);
    function a(e) {
      return typeof e === 'function'
        ? e
        : (function() {
            let e;
            if (i) {
              const t = new Error();
              e = function(e) {
                e && ((t.message = e.message), r((e = t)));
              };
            } else e = r;
            return e;
            function r(e) {
              if (e) {
                if (process.throwDeprecation) throw e;
                if (!process.noDeprecation) {
                  const t = `fs: missing callback ${e.stack || e.message}`;
                  process.traceDeprecation
                    ? console.trace(t)
                    : console.error(t);
                }
              }
            }
          })();
    }
    o.normalize;
    if (n) var c = /(.*?)(?:[\/\\]+|$)/g;
    else c = /(.*?)(?:[\/]+|$)/g;
    if (n) var u = /^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/][^\\\/]+)?[\\\/]*/;
    else u = /^[\/]*/;
    (t.realpathSync = function(e, t) {
      if (((e = o.resolve(e)), t && Object.prototype.hasOwnProperty.call(t, e)))
        return t[e];
      let r;
      let i;
      let a;
      let l;
      const d = e;
      const h = {};
      const f = {};
      function p() {
        const t = u.exec(e);
        (r = t[0].length),
          (i = t[0]),
          (a = t[0]),
          (l = ''),
          n && !f[a] && (s.lstatSync(a), (f[a] = !0));
      }
      for (p(); r < e.length; ) {
        c.lastIndex = r;
        const m = c.exec(e);
        if (
          ((l = i),
          (i += m[0]),
          (a = l + m[1]),
          (r = c.lastIndex),
          !(f[a] || (t && t[a] === a)))
        ) {
          var v;
          if (t && Object.prototype.hasOwnProperty.call(t, a)) v = t[a];
          else {
            const _ = s.lstatSync(a);
            if (!_.isSymbolicLink()) {
              (f[a] = !0), t && (t[a] = a);
              continue;
            }
            let j = null;
            if (!n) {
              var y = `${_.dev.toString(32)}:${_.ino.toString(32)}`;
              h.hasOwnProperty(y) && (j = h[y]);
            }
            j === null && (s.statSync(a), (j = s.readlinkSync(a))),
              (v = o.resolve(l, j)),
              t && (t[a] = v),
              n || (h[y] = j);
          }
          (e = o.resolve(v, e.slice(r))), p();
        }
      }
      return t && (t[d] = e), e;
    }),
      (t.realpath = function(e, t, r) {
        if (
          (typeof r !== 'function' && ((r = a(t)), (t = null)),
          (e = o.resolve(e)),
          t && Object.prototype.hasOwnProperty.call(t, e))
        )
          return process.nextTick(r.bind(null, null, t[e]));
        let i;
        let l;
        let d;
        let h;
        const f = e;
        const p = {};
        const m = {};
        function v() {
          const t = u.exec(e);
          (i = t[0].length),
            (l = t[0]),
            (d = t[0]),
            (h = ''),
            n && !m[d]
              ? s.lstat(d, e => {
                  if (e) return r(e);
                  (m[d] = !0), _();
                })
              : process.nextTick(_);
        }
        function _() {
          if (i >= e.length) return t && (t[f] = e), r(null, e);
          c.lastIndex = i;
          const o = c.exec(e);
          return (
            (h = l),
            (l += o[0]),
            (d = h + o[1]),
            (i = c.lastIndex),
            m[d] || (t && t[d] === d)
              ? process.nextTick(_)
              : t && Object.prototype.hasOwnProperty.call(t, d)
              ? g(t[d])
              : s.lstat(d, j)
          );
        }
        function j(e, o) {
          if (e) return r(e);
          if (!o.isSymbolicLink())
            return (m[d] = !0), t && (t[d] = d), process.nextTick(_);
          if (!n) {
            var i = `${o.dev.toString(32)}:${o.ino.toString(32)}`;
            if (p.hasOwnProperty(i)) return y(null, p[i], d);
          }
          s.stat(d, e => {
            if (e) return r(e);
            s.readlink(d, (e, t) => {
              n || (p[i] = t), y(e, t);
            });
          });
        }
        function y(e, n, s) {
          if (e) return r(e);
          const i = o.resolve(h, n);
          t && (t[s] = i), g(i);
        }
        function g(t) {
          (e = o.resolve(t, e.slice(i))), v();
        }
        v();
      });
  },
  './node_modules/glob/common.js': function(e, t, r) {
    function o(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }
    (t.alphasort = u),
      (t.alphasorti = c),
      (t.setopts = function(e, t, r) {
        r || (r = {});
        if (r.matchBase && t.indexOf('/') === -1) {
          if (r.noglobstar) throw new Error('base matching requires globstar');
          t = `**/${t}`;
        }
        (e.silent = !!r.silent),
          (e.pattern = t),
          (e.strict = !1 !== r.strict),
          (e.realpath = !!r.realpath),
          (e.realpathCache = r.realpathCache || Object.create(null)),
          (e.follow = !!r.follow),
          (e.dot = !!r.dot),
          (e.mark = !!r.mark),
          (e.nodir = !!r.nodir),
          e.nodir && (e.mark = !0);
        (e.sync = !!r.sync),
          (e.nounique = !!r.nounique),
          (e.nonull = !!r.nonull),
          (e.nosort = !!r.nosort),
          (e.nocase = !!r.nocase),
          (e.stat = !!r.stat),
          (e.noprocess = !!r.noprocess),
          (e.absolute = !!r.absolute),
          (e.maxLength = r.maxLength || 1 / 0),
          (e.cache = r.cache || Object.create(null)),
          (e.statCache = r.statCache || Object.create(null)),
          (e.symlinks = r.symlinks || Object.create(null)),
          (function(e, t) {
            (e.ignore = t.ignore || []),
              Array.isArray(e.ignore) || (e.ignore = [e.ignore]);
            e.ignore.length && (e.ignore = e.ignore.map(l));
          })(e, r),
          (e.changedCwd = !1);
        const s = process.cwd();
        o(r, 'cwd')
          ? ((e.cwd = n.resolve(r.cwd)), (e.changedCwd = e.cwd !== s))
          : (e.cwd = s);
        (e.root = r.root || n.resolve(e.cwd, '/')),
          (e.root = n.resolve(e.root)),
          process.platform === 'win32' && (e.root = e.root.replace(/\\/g, '/'));
        (e.cwdAbs = i(e.cwd) ? e.cwd : d(e, e.cwd)),
          process.platform === 'win32' &&
            (e.cwdAbs = e.cwdAbs.replace(/\\/g, '/'));
        (e.nomount = !!r.nomount),
          (r.nonegate = !0),
          (r.nocomment = !0),
          (e.minimatch = new a(t, r)),
          (e.options = e.minimatch.options);
      }),
      (t.ownProp = o),
      (t.makeAbs = d),
      (t.finish = function(e) {
        for (
          var t = e.nounique,
            r = t ? [] : Object.create(null),
            o = 0,
            n = e.matches.length;
          o < n;
          o++
        ) {
          const s = e.matches[o];
          if (s && Object.keys(s).length !== 0) {
            const i = Object.keys(s);
            t
              ? r.push(...i)
              : i.forEach(e => {
                  r[e] = !0;
                });
          } else if (e.nonull) {
            const a = e.minimatch.globSet[o];
            t ? r.push(a) : (r[a] = !0);
          }
        }
        t || (r = Object.keys(r));
        e.nosort || (r = r.sort(e.nocase ? c : u));
        if (e.mark) {
          for (var o = 0; o < r.length; o++) r[o] = e._mark(r[o]);
          e.nodir &&
            (r = r.filter(t => {
              let r = !/\/$/.test(t);
              const o = e.cache[t] || e.cache[d(e, t)];
              return r && o && (r = o !== 'DIR' && !Array.isArray(o)), r;
            }));
        }
        e.ignore.length && (r = r.filter(t => !h(e, t)));
        e.found = r;
      }),
      (t.mark = function(e, t) {
        const r = d(e, t);
        const o = e.cache[r];
        let n = t;
        if (o) {
          const s = o === 'DIR' || Array.isArray(o);
          const i = t.slice(-1) === '/';
          if (
            (s && !i ? (n += '/') : !s && i && (n = n.slice(0, -1)), n !== t)
          ) {
            const a = d(e, n);
            (e.statCache[a] = e.statCache[r]), (e.cache[a] = e.cache[r]);
          }
        }
        return n;
      }),
      (t.isIgnored = h),
      (t.childrenIgnored = function(e, t) {
        return (
          !!e.ignore.length &&
          e.ignore.some(e => !(!e.gmatcher || !e.gmatcher.match(t)))
        );
      });
    var n = r('path');
    const s = r('./node_modules/minimatch/minimatch.js');
    var i = r('./node_modules/path-is-absolute/index.js');
    var a = s.Minimatch;
    function c(e, t) {
      return e.toLowerCase().localeCompare(t.toLowerCase());
    }
    function u(e, t) {
      return e.localeCompare(t);
    }
    function l(e) {
      let t = null;
      if (e.slice(-3) === '/**') {
        const r = e.replace(/(\/\*\*)+$/, '');
        t = new a(r, { dot: !0 });
      }
      return { matcher: new a(e, { dot: !0 }), gmatcher: t };
    }
    function d(e, t) {
      let r = t;
      return (
        (r =
          t.charAt(0) === '/'
            ? n.join(e.root, t)
            : i(t) || t === ''
            ? t
            : e.changedCwd
            ? n.resolve(e.cwd, t)
            : n.resolve(t)),
        process.platform === 'win32' && (r = r.replace(/\\/g, '/')),
        r
      );
    }
    function h(e, t) {
      return (
        !!e.ignore.length &&
        e.ignore.some(
          e => e.matcher.match(t) || !(!e.gmatcher || !e.gmatcher.match(t))
        )
      );
    }
  },
  './node_modules/glob/glob.js': function(e, t, r) {
    e.exports = y;
    const o = r('fs');
    const n = r('./node_modules/fs.realpath/index.js');
    const s = r('./node_modules/minimatch/minimatch.js');
    const i = (s.Minimatch, r('./node_modules/inherits/inherits.js'));
    const a = r('events').EventEmitter;
    const c = r('path');
    const u = r('assert');
    const l = r('./node_modules/path-is-absolute/index.js');
    const d = r('./node_modules/glob/sync.js');
    const h = r('./node_modules/glob/common.js');
    const f = (h.alphasort, h.alphasorti, h.setopts);
    const p = h.ownProp;
    const m = r('./node_modules/inflight/inflight.js');
    const v = (r('util'), h.childrenIgnored);
    const _ = h.isIgnored;
    const j = r('./node_modules/once/once.js');
    function y(e, t, r) {
      if (
        (typeof t === 'function' && ((r = t), (t = {})), t || (t = {}), t.sync)
      ) {
        if (r) throw new TypeError('callback provided to sync glob');
        return d(e, t);
      }
      return new b(e, t, r);
    }
    y.sync = d;
    const g = (y.GlobSync = d.GlobSync);
    function b(e, t, r) {
      if ((typeof t === 'function' && ((r = t), (t = null)), t && t.sync)) {
        if (r) throw new TypeError('callback provided to sync glob');
        return new g(e, t);
      }
      if (!(this instanceof b)) return new b(e, t, r);
      f(this, e, t), (this._didRealPath = !1);
      const o = this.minimatch.set.length;
      (this.matches = new Array(o)),
        typeof r === 'function' &&
          ((r = j(r)),
          this.on('error', r),
          this.on('end', e => {
            r(null, e);
          }));
      const n = this;
      if (
        ((this._processing = 0),
        (this._emitQueue = []),
        (this._processQueue = []),
        (this.paused = !1),
        this.noprocess)
      )
        return this;
      if (o === 0) return a();
      for (var s = !0, i = 0; i < o; i++)
        this._process(this.minimatch.set[i], i, !1, a);
      function a() {
        --n._processing,
          n._processing <= 0 &&
            (s
              ? process.nextTick(() => {
                  n._finish();
                })
              : n._finish());
      }
      s = !1;
    }
    (y.glob = y),
      (y.hasMagic = function(e, t) {
        const r = (function(e, t) {
          if (t === null || typeof t !== 'object') return e;
          for (let r = Object.keys(t), o = r.length; o--; ) e[r[o]] = t[r[o]];
          return e;
        })({}, t);
        r.noprocess = !0;
        const o = new b(e, r).minimatch.set;
        if (!e) return !1;
        if (o.length > 1) return !0;
        for (let n = 0; n < o[0].length; n++)
          if (typeof o[0][n] !== 'string') return !0;
        return !1;
      }),
      (y.Glob = b),
      i(b, a),
      (b.prototype._finish = function() {
        if ((u(this instanceof b), !this.aborted)) {
          if (this.realpath && !this._didRealpath) return this._realpath();
          h.finish(this), this.emit('end', this.found);
        }
      }),
      (b.prototype._realpath = function() {
        if (!this._didRealpath) {
          this._didRealpath = !0;
          var e = this.matches.length;
          if (e === 0) return this._finish();
          for (var t = this, r = 0; r < this.matches.length; r++)
            this._realpathSet(r, o);
        }
        function o() {
          --e == 0 && t._finish();
        }
      }),
      (b.prototype._realpathSet = function(e, t) {
        const r = this.matches[e];
        if (!r) return t();
        const o = Object.keys(r);
        const s = this;
        let i = o.length;
        if (i === 0) return t();
        const a = (this.matches[e] = Object.create(null));
        o.forEach((r, o) => {
          (r = s._makeAbs(r)),
            n.realpath(r, s.realpathCache, (o, n) => {
              o
                ? o.syscall === 'stat'
                  ? (a[r] = !0)
                  : s.emit('error', o)
                : (a[n] = !0),
                --i == 0 && ((s.matches[e] = a), t());
            });
        });
      }),
      (b.prototype._mark = function(e) {
        return h.mark(this, e);
      }),
      (b.prototype._makeAbs = function(e) {
        return h.makeAbs(this, e);
      }),
      (b.prototype.abort = function() {
        (this.aborted = !0), this.emit('abort');
      }),
      (b.prototype.pause = function() {
        this.paused || ((this.paused = !0), this.emit('pause'));
      }),
      (b.prototype.resume = function() {
        if (this.paused) {
          if (
            (this.emit('resume'), (this.paused = !1), this._emitQueue.length)
          ) {
            const e = this._emitQueue.slice(0);
            this._emitQueue.length = 0;
            for (var t = 0; t < e.length; t++) {
              const r = e[t];
              this._emitMatch(r[0], r[1]);
            }
          }
          if (this._processQueue.length) {
            const o = this._processQueue.slice(0);
            this._processQueue.length = 0;
            for (t = 0; t < o.length; t++) {
              const n = o[t];
              this._processing--, this._process(n[0], n[1], n[2], n[3]);
            }
          }
        }
      }),
      (b.prototype._process = function(e, t, r, o) {
        if ((u(this instanceof b), u(typeof o === 'function'), !this.aborted)) {
          if ((this._processing++, this.paused))
            this._processQueue.push([e, t, r, o]);
          else {
            for (var n, i = 0; typeof e[i] === 'string'; ) i++;
            switch (i) {
              case e.length:
                return void this._processSimple(e.join('/'), t, o);
              case 0:
                n = null;
                break;
              default:
                n = e.slice(0, i).join('/');
            }
            let a;
            const c = e.slice(i);
            n === null
              ? (a = '.')
              : l(n) || l(e.join('/'))
              ? ((n && l(n)) || (n = `/${n}`), (a = n))
              : (a = n);
            const d = this._makeAbs(a);
            if (v(this, a)) return o();
            c[0] === s.GLOBSTAR
              ? this._processGlobStar(n, a, d, c, t, r, o)
              : this._processReaddir(n, a, d, c, t, r, o);
          }
        }
      }),
      (b.prototype._processReaddir = function(e, t, r, o, n, s, i) {
        const a = this;
        this._readdir(r, s, (c, u) =>
          a._processReaddir2(e, t, r, o, n, s, u, i)
        );
      }),
      (b.prototype._processReaddir2 = function(e, t, r, o, n, s, i, a) {
        if (!i) return a();
        for (
          var u = o[0],
            l = !!this.minimatch.negate,
            d = u._glob,
            h = this.dot || d.charAt(0) === '.',
            f = [],
            p = 0;
          p < i.length;
          p++
        ) {
          if ((v = i[p]).charAt(0) !== '.' || h)
            (l && !e ? !v.match(u) : v.match(u)) && f.push(v);
        }
        const m = f.length;
        if (m === 0) return a();
        if (o.length === 1 && !this.mark && !this.stat) {
          this.matches[n] || (this.matches[n] = Object.create(null));
          for (p = 0; p < m; p++) {
            var v = f[p];
            e && (v = e !== '/' ? `${e}/${v}` : e + v),
              v.charAt(0) !== '/' || this.nomount || (v = c.join(this.root, v)),
              this._emitMatch(n, v);
          }
          return a();
        }
        o.shift();
        for (p = 0; p < m; p++) {
          v = f[p];
          e && (v = e !== '/' ? `${e}/${v}` : e + v),
            this._process([v].concat(o), n, s, a);
        }
        a();
      }),
      (b.prototype._emitMatch = function(e, t) {
        if (!this.aborted && !_(this, t)) {
          if (this.paused) this._emitQueue.push([e, t]);
          else {
            const r = l(t) ? t : this._makeAbs(t);
            if (
              (this.mark && (t = this._mark(t)),
              this.absolute && (t = r),
              !this.matches[e][t])
            ) {
              if (this.nodir) {
                const o = this.cache[r];
                if (o === 'DIR' || Array.isArray(o)) return;
              }
              this.matches[e][t] = !0;
              const n = this.statCache[r];
              n && this.emit('stat', t, n), this.emit('match', t);
            }
          }
        }
      }),
      (b.prototype._readdirInGlobStar = function(e, t) {
        if (!this.aborted) {
          if (this.follow) return this._readdir(e, !1, t);
          const r = this;
          const n = m(`lstat\0${e}`, (o, n) => {
            if (o && o.code === 'ENOENT') return t();
            const s = n && n.isSymbolicLink();
            (r.symlinks[e] = s),
              s || !n || n.isDirectory()
                ? r._readdir(e, !1, t)
                : ((r.cache[e] = 'FILE'), t());
          });
          n && o.lstat(e, n);
        }
      }),
      (b.prototype._readdir = function(e, t, r) {
        if (!this.aborted && (r = m(`readdir\0${e}\0${t}`, r))) {
          if (t && !p(this.symlinks, e)) return this._readdirInGlobStar(e, r);
          if (p(this.cache, e)) {
            const n = this.cache[e];
            if (!n || n === 'FILE') return r();
            if (Array.isArray(n)) return r(null, n);
          }
          o.readdir(
            e,
            (function(e, t, r) {
              return function(o, n) {
                o ? e._readdirError(t, o, r) : e._readdirEntries(t, n, r);
              };
            })(this, e, r)
          );
        }
      }),
      (b.prototype._readdirEntries = function(e, t, r) {
        if (!this.aborted) {
          if (!this.mark && !this.stat) {
            for (let o = 0; o < t.length; o++) {
              let n = t[o];
              (n = e === '/' ? e + n : `${e}/${n}`), (this.cache[n] = !0);
            }
          }
          return (this.cache[e] = t), r(null, t);
        }
      }),
      (b.prototype._readdirError = function(e, t, r) {
        if (!this.aborted) {
          switch (t.code) {
            case 'ENOTSUP':
            case 'ENOTDIR':
              var o = this._makeAbs(e);
              if (((this.cache[o] = 'FILE'), o === this.cwdAbs)) {
                const n = new Error(`${t.code} invalid cwd ${this.cwd}`);
                (n.path = this.cwd),
                  (n.code = t.code),
                  this.emit('error', n),
                  this.abort();
              }
              break;
            case 'ENOENT':
            case 'ELOOP':
            case 'ENAMETOOLONG':
            case 'UNKNOWN':
              this.cache[this._makeAbs(e)] = !1;
              break;
            default:
              (this.cache[this._makeAbs(e)] = !1),
                this.strict && (this.emit('error', t), this.abort()),
                this.silent || console.error('glob error', t);
          }
          return r();
        }
      }),
      (b.prototype._processGlobStar = function(e, t, r, o, n, s, i) {
        const a = this;
        this._readdir(r, s, (c, u) => {
          a._processGlobStar2(e, t, r, o, n, s, u, i);
        });
      }),
      (b.prototype._processGlobStar2 = function(e, t, r, o, n, s, i, a) {
        if (!i) return a();
        const c = o.slice(1);
        const u = e ? [e] : [];
        const l = u.concat(c);
        this._process(l, n, !1, a);
        const d = this.symlinks[r];
        const h = i.length;
        if (d && s) return a();
        for (let f = 0; f < h; f++) {
          if (i[f].charAt(0) !== '.' || this.dot) {
            const p = u.concat(i[f], c);
            this._process(p, n, !0, a);
            const m = u.concat(i[f], o);
            this._process(m, n, !0, a);
          }
        }
        a();
      }),
      (b.prototype._processSimple = function(e, t, r) {
        const o = this;
        this._stat(e, (n, s) => {
          o._processSimple2(e, t, n, s, r);
        });
      }),
      (b.prototype._processSimple2 = function(e, t, r, o, n) {
        if ((this.matches[t] || (this.matches[t] = Object.create(null)), !o))
          return n();
        if (e && l(e) && !this.nomount) {
          const s = /[\/\\]$/.test(e);
          e.charAt(0) === '/'
            ? (e = c.join(this.root, e))
            : ((e = c.resolve(this.root, e)), s && (e += '/'));
        }
        process.platform === 'win32' && (e = e.replace(/\\/g, '/')),
          this._emitMatch(t, e),
          n();
      }),
      (b.prototype._stat = function(e, t) {
        const r = this._makeAbs(e);
        const n = e.slice(-1) === '/';
        if (e.length > this.maxLength) return t();
        if (!this.stat && p(this.cache, r)) {
          let s = this.cache[r];
          if ((Array.isArray(s) && (s = 'DIR'), !n || s === 'DIR'))
            return t(null, s);
          if (n && s === 'FILE') return t();
        }
        const i = this.statCache[r];
        if (void 0 !== i) {
          if (!1 === i) return t(null, i);
          const a = i.isDirectory() ? 'DIR' : 'FILE';
          return n && a === 'FILE' ? t() : t(null, a, i);
        }
        const c = this;
        const u = m(`stat\0${r}`, (n, s) => {
          if (s && s.isSymbolicLink()) {
            return o.stat(r, (o, n) => {
              o ? c._stat2(e, r, null, s, t) : c._stat2(e, r, o, n, t);
            });
          }
          c._stat2(e, r, n, s, t);
        });
        u && o.lstat(r, u);
      }),
      (b.prototype._stat2 = function(e, t, r, o, n) {
        if (r && (r.code === 'ENOENT' || r.code === 'ENOTDIR'))
          return (this.statCache[t] = !1), n();
        const s = e.slice(-1) === '/';
        if (
          ((this.statCache[t] = o),
          t.slice(-1) === '/' && o && !o.isDirectory())
        )
          return n(null, !1, o);
        let i = !0;
        return (
          o && (i = o.isDirectory() ? 'DIR' : 'FILE'),
          (this.cache[t] = this.cache[t] || i),
          s && i === 'FILE' ? n() : n(null, i, o)
        );
      });
  },
  './node_modules/glob/sync.js': function(e, t, r) {
    (e.exports = p), (p.GlobSync = m);
    const o = r('fs');
    const n = r('./node_modules/fs.realpath/index.js');
    const s = r('./node_modules/minimatch/minimatch.js');
    const i = (s.Minimatch,
    r('./node_modules/glob/glob.js').Glob,
    r('util'),
    r('path'));
    const a = r('assert');
    const c = r('./node_modules/path-is-absolute/index.js');
    const u = r('./node_modules/glob/common.js');
    const l = (u.alphasort, u.alphasorti, u.setopts);
    const d = u.ownProp;
    const h = u.childrenIgnored;
    const f = u.isIgnored;
    function p(e, t) {
      if (typeof t === 'function' || arguments.length === 3) {
        throw new TypeError(
          'callback provided to sync glob\nSee: https://github.com/isaacs/node-glob/issues/167'
        );
      }
      return new m(e, t).found;
    }
    function m(e, t) {
      if (!e) throw new Error('must provide pattern');
      if (typeof t === 'function' || arguments.length === 3) {
        throw new TypeError(
          'callback provided to sync glob\nSee: https://github.com/isaacs/node-glob/issues/167'
        );
      }
      if (!(this instanceof m)) return new m(e, t);
      if ((l(this, e, t), this.noprocess)) return this;
      const r = this.minimatch.set.length;
      this.matches = new Array(r);
      for (let o = 0; o < r; o++) this._process(this.minimatch.set[o], o, !1);
      this._finish();
    }
    (m.prototype._finish = function() {
      if ((a(this instanceof m), this.realpath)) {
        const e = this;
        this.matches.forEach((t, r) => {
          const o = (e.matches[r] = Object.create(null));
          for (let s in t) {
            try {
              (s = e._makeAbs(s)), (o[n.realpathSync(s, e.realpathCache)] = !0);
            } catch (t) {
              if (t.syscall !== 'stat') throw t;
              o[e._makeAbs(s)] = !0;
            }
          }
        });
      }
      u.finish(this);
    }),
      (m.prototype._process = function(e, t, r) {
        a(this instanceof m);
        for (var o, n = 0; typeof e[n] === 'string'; ) n++;
        switch (n) {
          case e.length:
            return void this._processSimple(e.join('/'), t);
          case 0:
            o = null;
            break;
          default:
            o = e.slice(0, n).join('/');
        }
        let i;
        const u = e.slice(n);
        o === null
          ? (i = '.')
          : c(o) || c(e.join('/'))
          ? ((o && c(o)) || (o = `/${o}`), (i = o))
          : (i = o);
        const l = this._makeAbs(i);
        h(this, i) ||
          (u[0] === s.GLOBSTAR
            ? this._processGlobStar(o, i, l, u, t, r)
            : this._processReaddir(o, i, l, u, t, r));
      }),
      (m.prototype._processReaddir = function(e, t, r, o, n, s) {
        const a = this._readdir(r, s);
        if (a) {
          for (
            var c = o[0],
              u = !!this.minimatch.negate,
              l = c._glob,
              d = this.dot || l.charAt(0) === '.',
              h = [],
              f = 0;
            f < a.length;
            f++
          ) {
            if ((v = a[f]).charAt(0) !== '.' || d)
              (u && !e ? !v.match(c) : v.match(c)) && h.push(v);
          }
          const p = h.length;
          if (p !== 0) {
            if (o.length !== 1 || this.mark || this.stat) {
              o.shift();
              for (f = 0; f < p; f++) {
                var m;
                v = h[f];
                (m = e ? [e, v] : [v]), this._process(m.concat(o), n, s);
              }
            } else {
              this.matches[n] || (this.matches[n] = Object.create(null));
              for (var f = 0; f < p; f++) {
                var v = h[f];
                e && (v = e.slice(-1) !== '/' ? `${e}/${v}` : e + v),
                  v.charAt(0) !== '/' ||
                    this.nomount ||
                    (v = i.join(this.root, v)),
                  this._emitMatch(n, v);
              }
            }
          }
        }
      }),
      (m.prototype._emitMatch = function(e, t) {
        if (!f(this, t)) {
          const r = this._makeAbs(t);
          if (
            (this.mark && (t = this._mark(t)),
            this.absolute && (t = r),
            !this.matches[e][t])
          ) {
            if (this.nodir) {
              const o = this.cache[r];
              if (o === 'DIR' || Array.isArray(o)) return;
            }
            (this.matches[e][t] = !0), this.stat && this._stat(t);
          }
        }
      }),
      (m.prototype._readdirInGlobStar = function(e) {
        if (this.follow) return this._readdir(e, !1);
        let t;
        let r;
        try {
          r = o.lstatSync(e);
        } catch (e) {
          if (e.code === 'ENOENT') return null;
        }
        const n = r && r.isSymbolicLink();
        return (
          (this.symlinks[e] = n),
          n || !r || r.isDirectory()
            ? (t = this._readdir(e, !1))
            : (this.cache[e] = 'FILE'),
          t
        );
      }),
      (m.prototype._readdir = function(e, t) {
        if (t && !d(this.symlinks, e)) return this._readdirInGlobStar(e);
        if (d(this.cache, e)) {
          const r = this.cache[e];
          if (!r || r === 'FILE') return null;
          if (Array.isArray(r)) return r;
        }
        try {
          return this._readdirEntries(e, o.readdirSync(e));
        } catch (t) {
          return this._readdirError(e, t), null;
        }
      }),
      (m.prototype._readdirEntries = function(e, t) {
        if (!this.mark && !this.stat) {
          for (let r = 0; r < t.length; r++) {
            let o = t[r];
            (o = e === '/' ? e + o : `${e}/${o}`), (this.cache[o] = !0);
          }
        }
        return (this.cache[e] = t), t;
      }),
      (m.prototype._readdirError = function(e, t) {
        switch (t.code) {
          case 'ENOTSUP':
          case 'ENOTDIR':
            var r = this._makeAbs(e);
            if (((this.cache[r] = 'FILE'), r === this.cwdAbs)) {
              const o = new Error(`${t.code} invalid cwd ${this.cwd}`);
              throw ((o.path = this.cwd), (o.code = t.code), o);
            }
            break;
          case 'ENOENT':
          case 'ELOOP':
          case 'ENAMETOOLONG':
          case 'UNKNOWN':
            this.cache[this._makeAbs(e)] = !1;
            break;
          default:
            if (((this.cache[this._makeAbs(e)] = !1), this.strict)) throw t;
            this.silent || console.error('glob error', t);
        }
      }),
      (m.prototype._processGlobStar = function(e, t, r, o, n, s) {
        const i = this._readdir(r, s);
        if (i) {
          const a = o.slice(1);
          const c = e ? [e] : [];
          const u = c.concat(a);
          this._process(u, n, !1);
          const l = i.length;
          if (!this.symlinks[r] || !s) {
            for (let d = 0; d < l; d++) {
              if (i[d].charAt(0) !== '.' || this.dot) {
                const h = c.concat(i[d], a);
                this._process(h, n, !0);
                const f = c.concat(i[d], o);
                this._process(f, n, !0);
              }
            }
          }
        }
      }),
      (m.prototype._processSimple = function(e, t) {
        const r = this._stat(e);
        if ((this.matches[t] || (this.matches[t] = Object.create(null)), r)) {
          if (e && c(e) && !this.nomount) {
            const o = /[\/\\]$/.test(e);
            e.charAt(0) === '/'
              ? (e = i.join(this.root, e))
              : ((e = i.resolve(this.root, e)), o && (e += '/'));
          }
          process.platform === 'win32' && (e = e.replace(/\\/g, '/')),
            this._emitMatch(t, e);
        }
      }),
      (m.prototype._stat = function(e) {
        const t = this._makeAbs(e);
        const r = e.slice(-1) === '/';
        if (e.length > this.maxLength) return !1;
        if (!this.stat && d(this.cache, t)) {
          var n = this.cache[t];
          if ((Array.isArray(n) && (n = 'DIR'), !r || n === 'DIR')) return n;
          if (r && n === 'FILE') return !1;
        }
        let s = this.statCache[t];
        if (!s) {
          let i;
          try {
            i = o.lstatSync(t);
          } catch (e) {
            if (e && (e.code === 'ENOENT' || e.code === 'ENOTDIR'))
              return (this.statCache[t] = !1), !1;
          }
          if (i && i.isSymbolicLink()) {
            try {
              s = o.statSync(t);
            } catch (e) {
              s = i;
            }
          } else s = i;
        }
        this.statCache[t] = s;
        n = !0;
        return (
          s && (n = s.isDirectory() ? 'DIR' : 'FILE'),
          (this.cache[t] = this.cache[t] || n),
          (!r || n !== 'FILE') && n
        );
      }),
      (m.prototype._mark = function(e) {
        return u.mark(this, e);
      }),
      (m.prototype._makeAbs = function(e) {
        return u.makeAbs(this, e);
      });
  },
  './node_modules/inflight/inflight.js': function(e, t, r) {
    const o = r('./node_modules/wrappy/wrappy.js');
    const n = Object.create(null);
    const s = r('./node_modules/once/once.js');
    e.exports = o((e, t) =>
      n[e]
        ? (n[e].push(t), null)
        : ((n[e] = [t]),
          (function(e) {
            return s(function t() {
              const r = n[e];
              const o = r.length;
              const s = (function(e) {
                for (var t = e.length, r = [], o = 0; o < t; o++) r[o] = e[o];
                return r;
              })(arguments);
              try {
                for (let i = 0; i < o; i++) r[i].apply(null, s);
              } finally {
                r.length > o
                  ? (r.splice(0, o),
                    process.nextTick(() => {
                      t(...s);
                    }))
                  : delete n[e];
              }
            });
          })(e))
    );
  },
  './node_modules/inherits/inherits.js': function(e, t, r) {
    try {
      const o = r('util');
      if (typeof o.inherits !== 'function') throw '';
      e.exports = o.inherits;
    } catch (t) {
      e.exports = r('./node_modules/inherits/inherits_browser.js');
    }
  },
  './node_modules/inherits/inherits_browser.js': function(e, t) {
    typeof Object.create === 'function'
      ? (e.exports = function(e, t) {
          (e.super_ = t),
            (e.prototype = Object.create(t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }));
        })
      : (e.exports = function(e, t) {
          e.super_ = t;
          const r = function() {};
          (r.prototype = t.prototype),
            (e.prototype = new r()),
            (e.prototype.constructor = e);
        });
  },
  './node_modules/minimatch/minimatch.js': function(e, t, r) {
    (e.exports = p), (p.Minimatch = m);
    let o = { sep: '/' };
    try {
      o = r('path');
    } catch (e) {}
    const n = (p.GLOBSTAR = m.GLOBSTAR = {});
    const s = r('./node_modules/brace-expansion/index.js');
    const i = {
      '!': { open: '(?:(?!(?:', close: '))[^/]*?)' },
      '?': { open: '(?:', close: ')?' },
      '+': { open: '(?:', close: ')+' },
      '*': { open: '(?:', close: ')*' },
      '@': { open: '(?:', close: ')' }
    };
    const a = '[^/]';
    const c = `${a}*?`;
    const u = '(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?';
    const l = '(?:(?!(?:\\/|^)\\.).)*?';
    const d = '().*{}+?[]^$\\!'.split('').reduce((e, t) => (e[t] = !0), e, {});
    const h = /\/+/;
    function f(e, t) {
      (e = e || {}), (t = t || {});
      const r = {};
      return (
        Object.keys(t).forEach(e => {
          r[e] = t[e];
        }),
        Object.keys(e).forEach(t => {
          r[t] = e[t];
        }),
        r
      );
    }
    function p(e, t, r) {
      if (typeof t !== 'string')
        throw new TypeError('glob pattern string required');
      return (
        r || (r = {}),
        !(!r.nocomment && t.charAt(0) === '#') &&
          (t.trim() === '' ? e === '' : new m(t, r).match(e))
      );
    }
    function m(e, t) {
      if (!(this instanceof m)) return new m(e, t);
      if (typeof e !== 'string')
        throw new TypeError('glob pattern string required');
      t || (t = {}),
        (e = e.trim()),
        o.sep !== '/' && (e = e.split(o.sep).join('/')),
        (this.options = t),
        (this.set = []),
        (this.pattern = e),
        (this.regexp = null),
        (this.negate = !1),
        (this.comment = !1),
        (this.empty = !1),
        this.make();
    }
    function v(e, t) {
      if (
        (t || (t = this instanceof m ? this.options : {}),
        void 0 === (e = void 0 === e ? this.pattern : e))
      )
        throw new TypeError('undefined pattern');
      return t.nobrace || !e.match(/\{.*\}/) ? [e] : s(e);
    }
    (p.filter = function(e, t) {
      return (
        (t = t || {}),
        function(r, o, n) {
          return p(r, e, t);
        }
      );
    }),
      (p.defaults = function(e) {
        if (!e || !Object.keys(e).length) return p;
        const t = p;
        const r = function(r, o, n) {
          return t.minimatch(r, o, f(e, n));
        };
        return (
          (r.Minimatch = function(r, o) {
            return new t.Minimatch(r, f(e, o));
          }),
          r
        );
      }),
      (m.defaults = function(e) {
        return e && Object.keys(e).length ? p.defaults(e).Minimatch : m;
      }),
      (m.prototype.debug = function() {}),
      (m.prototype.make = function() {
        if (this._made) return;
        const e = this.pattern;
        const t = this.options;
        if (!t.nocomment && e.charAt(0) === '#')
          return void (this.comment = !0);
        if (!e) return void (this.empty = !0);
        this.parseNegate();
        let r = (this.globSet = this.braceExpand());
        t.debug && (this.debug = console.error);
        this.debug(this.pattern, r),
          (r = this.globParts = r.map(e => e.split(h))),
          this.debug(this.pattern, r),
          (r = r.map(function(e, t, r) {
            return e.map(this.parse, this);
          }, this)),
          this.debug(this.pattern, r),
          (r = r.filter(e => e.indexOf(!1) === -1)),
          this.debug(this.pattern, r),
          (this.set = r);
      }),
      (m.prototype.parseNegate = function() {
        const e = this.pattern;
        let t = !1;
        const r = this.options;
        let o = 0;
        if (r.nonegate) return;
        for (let n = 0, s = e.length; n < s && e.charAt(n) === '!'; n++)
          (t = !t), o++;
        o && (this.pattern = e.substr(o));
        this.negate = t;
      }),
      (p.braceExpand = function(e, t) {
        return v(e, t);
      }),
      (m.prototype.braceExpand = v),
      (m.prototype.parse = function(e, t) {
        if (e.length > 65536) throw new TypeError('pattern is too long');
        const r = this.options;
        if (!r.noglobstar && e === '**') return n;
        if (e === '') return '';
        let o;
        let s = '';
        let u = !!r.nocase;
        let l = !1;
        const h = [];
        const f = [];
        let p = !1;
        let m = -1;
        let v = -1;
        const j =
          e.charAt(0) === '.'
            ? ''
            : r.dot
            ? '(?!(?:^|\\/)\\.{1,2}(?:$|\\/))'
            : '(?!\\.)';
        const y = this;
        function g() {
          if (o) {
            switch (o) {
              case '*':
                (s += c), (u = !0);
                break;
              case '?':
                (s += a), (u = !0);
                break;
              default:
                s += `\\${o}`;
            }
            y.debug('clearStateChar %j %j', o, s), (o = !1);
          }
        }
        for (var b, w = 0, E = e.length; w < E && (b = e.charAt(w)); w++) {
          if ((this.debug('%s\t%s %s %j', e, w, s, b), l && d[b]))
            (s += `\\${b}`), (l = !1);
          else {
            switch (b) {
              case '/':
                return !1;
              case '\\':
                g(), (l = !0);
                continue;
              case '?':
              case '*':
              case '+':
              case '@':
              case '!':
                if ((this.debug('%s\t%s %s %j <-- stateChar', e, w, s, b), p)) {
                  this.debug('  in class'),
                    b === '!' && w === v + 1 && (b = '^'),
                    (s += b);
                  continue;
                }
                y.debug('call clearStateChar %j', o),
                  g(),
                  (o = b),
                  r.noext && g();
                continue;
              case '(':
                if (p) {
                  s += '(';
                  continue;
                }
                if (!o) {
                  s += '\\(';
                  continue;
                }
                h.push({
                  type: o,
                  start: w - 1,
                  reStart: s.length,
                  open: i[o].open,
                  close: i[o].close
                }),
                  (s += o === '!' ? '(?:(?!(?:' : '(?:'),
                  this.debug('plType %j %j', o, s),
                  (o = !1);
                continue;
              case ')':
                if (p || !h.length) {
                  s += '\\)';
                  continue;
                }
                g(), (u = !0);
                var x = h.pop();
                (s += x.close),
                  x.type === '!' && f.push(x),
                  (x.reEnd = s.length);
                continue;
              case '|':
                if (p || !h.length || l) {
                  (s += '\\|'), (l = !1);
                  continue;
                }
                g(), (s += '|');
                continue;
              case '[':
                if ((g(), p)) {
                  s += `\\${b}`;
                  continue;
                }
                (p = !0), (v = w), (m = s.length), (s += b);
                continue;
              case ']':
                if (w === v + 1 || !p) {
                  (s += `\\${b}`), (l = !1);
                  continue;
                }
                if (p) {
                  var O = e.substring(v + 1, w);
                  try {
                    RegExp(`[${O}]`);
                  } catch (e) {
                    var S = this.parse(O, _);
                    (s = `${s.substr(0, m)}\\[${S[0]}\\]`),
                      (u = u || S[1]),
                      (p = !1);
                    continue;
                  }
                }
                (u = !0), (p = !1), (s += b);
                continue;
              default:
                g(),
                  l ? (l = !1) : !d[b] || (b === '^' && p) || (s += '\\'),
                  (s += b);
            }
          }
        }
        p &&
          ((O = e.substr(v + 1)),
          (S = this.parse(O, _)),
          (s = `${s.substr(0, m)}\\[${S[0]}`),
          (u = u || S[1]));
        for (x = h.pop(); x; x = h.pop()) {
          let k = s.slice(x.reStart + x.open.length);
          this.debug('setting tail', s, x),
            (k = k.replace(
              /((?:\\{2}){0,64})(\\?)\|/g,
              (e, t, r) => r || (r = '\\'),
              `${t + t + r}|`
            )),
            this.debug('tail=%j\n   %s', k, k, x, s);
          const A = x.type === '*' ? c : x.type === '?' ? a : `\\${x.type}`;
          (u = !0), (s = `${s.slice(0, x.reStart) + A}\\(${k}`);
        }
        g(), l && (s += '\\\\');
        let T = !1;
        switch (s.charAt(0)) {
          case '.':
          case '[':
          case '(':
            T = !0;
        }
        for (let R = f.length - 1; R > -1; R--) {
          const P = f[R];
          const L = s.slice(0, P.reStart);
          const M = s.slice(P.reStart, P.reEnd - 8);
          let C = s.slice(P.reEnd - 8, P.reEnd);
          let N = s.slice(P.reEnd);
          C += N;
          const I = L.split('(').length - 1;
          let D = N;
          for (w = 0; w < I; w++) D = D.replace(/\)[+*?]?/, '');
          let G = '';
          (N = D) === '' && t !== _ && (G = '$');
          const F = L + M + N + G + C;
          s = F;
        }
        s !== '' && u && (s = `(?=.)${s}`);
        T && (s = j + s);
        if (t === _) return [s, u];
        if (!u) return e.replace(/\\(.)/g, '$1');
        const $ = r.nocase ? 'i' : '';
        try {
          var B = new RegExp(`^${s}$`, $);
        } catch (e) {
          return new RegExp('$.');
        }
        return (B._glob = e), (B._src = s), B;
      });
    var _ = {};
    (p.makeRe = function(e, t) {
      return new m(e, t || {}).makeRe();
    }),
      (m.prototype.makeRe = function() {
        if (this.regexp || !1 === this.regexp) return this.regexp;
        const e = this.set;
        if (!e.length) return (this.regexp = !1), this.regexp;
        const t = this.options;
        const r = t.noglobstar ? c : t.dot ? u : l;
        const o = t.nocase ? 'i' : '';
        let s = e
          .map(e =>
            e
              .map(e =>
                e === n
                  ? r
                  : typeof e === 'string'
                  ? e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
                  : e._src
              )
              .join('\\/')
          )
          .join('|');
        (s = `^(?:${s})$`), this.negate && (s = `^(?!${s}).*$`);
        try {
          this.regexp = new RegExp(s, o);
        } catch (e) {
          this.regexp = !1;
        }
        return this.regexp;
      }),
      (p.match = function(e, t, r) {
        const o = new m(t, (r = r || {}));
        return (
          (e = e.filter(e => o.match(e))),
          o.options.nonull && !e.length && e.push(t),
          e
        );
      }),
      (m.prototype.match = function(e, t) {
        if ((this.debug('match', e, this.pattern), this.comment)) return !1;
        if (this.empty) return e === '';
        if (e === '/' && t) return !0;
        const r = this.options;
        o.sep !== '/' && (e = e.split(o.sep).join('/'));
        (e = e.split(h)), this.debug(this.pattern, 'split', e);
        let n;
        let s;
        const i = this.set;
        for (
          this.debug(this.pattern, 'set', i), s = e.length - 1;
          s >= 0 && !(n = e[s]);
          s--
        );
        for (s = 0; s < i.length; s++) {
          const a = i[s];
          let c = e;
          r.matchBase && a.length === 1 && (c = [n]);
          const u = this.matchOne(c, a, t);
          if (u) return !!r.flipNegate || !this.negate;
        }
        return !r.flipNegate && this.negate;
      }),
      (m.prototype.matchOne = function(e, t, r) {
        const o = this.options;
        this.debug('matchOne', { this: this, file: e, pattern: t }),
          this.debug('matchOne', e.length, t.length);
        for (
          var s = 0, i = 0, a = e.length, c = t.length;
          s < a && i < c;
          s++, i++
        ) {
          this.debug('matchOne loop');
          var u;
          const l = t[i];
          const d = e[s];
          if ((this.debug(t, l, d), !1 === l)) return !1;
          if (l === n) {
            this.debug('GLOBSTAR', [t, l, d]);
            let h = s;
            const f = i + 1;
            if (f === c) {
              for (this.debug('** at the end'); s < a; s++) {
                if (
                  e[s] === '.' ||
                  e[s] === '..' ||
                  (!o.dot && e[s].charAt(0) === '.')
                )
                  return !1;
              }
              return !0;
            }
            for (; h < a; ) {
              const p = e[h];
              if (
                (this.debug('\nglobstar while', e, h, t, f, p),
                this.matchOne(e.slice(h), t.slice(f), r))
              )
                return this.debug('globstar found match!', h, a, p), !0;
              if (p === '.' || p === '..' || (!o.dot && p.charAt(0) === '.')) {
                this.debug('dot detected!', e, h, t, f);
                break;
              }
              this.debug('globstar swallow a segment, and continue'), h++;
            }
            return !(
              !r ||
              (this.debug('\n>>> no match, partial?', e, h, t, f), h !== a)
            );
          }
          if (
            (typeof l === 'string'
              ? ((u = o.nocase ? d.toLowerCase() === l.toLowerCase() : d === l),
                this.debug('string match', l, d, u))
              : ((u = d.match(l)), this.debug('pattern match', l, d, u)),
            !u)
          )
            return !1;
        }
        if (s === a && i === c) return !0;
        if (s === a) return r;
        if (i === c) return s === a - 1 && e[s] === '';
        throw new Error('wtf?');
      });
  },
  './node_modules/once/once.js': function(e, t, r) {
    const o = r('./node_modules/wrappy/wrappy.js');
    function n(e) {
      var t = function() {
        return t.called
          ? t.value
          : ((t.called = !0), (t.value = e.apply(this, arguments)));
      };
      return (t.called = !1), t;
    }
    function s(e) {
      var t = function() {
        if (t.called) throw new Error(t.onceError);
        return (t.called = !0), (t.value = e.apply(this, arguments));
      };
      const r = e.name || 'Function wrapped with `once`';
      return (
        (t.onceError = `${r} shouldn't be called more than once`),
        (t.called = !1),
        t
      );
    }
    (e.exports = o(n)),
      (e.exports.strict = o(s)),
      (n.proto = n(() => {
        Object.defineProperty(Function.prototype, 'once', {
          value() {
            return n(this);
          },
          configurable: !0
        }),
          Object.defineProperty(Function.prototype, 'onceStrict', {
            value() {
              return s(this);
            },
            configurable: !0
          });
      }));
  },
  './node_modules/path-is-absolute/index.js': function(e, t, r) {
    function o(e) {
      return e.charAt(0) === '/';
    }
    function n(e) {
      const t = /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/.exec(
        e
      );
      const r = t[1] || '';
      const o = Boolean(r && r.charAt(1) !== ':');
      return Boolean(t[2] || o);
    }
    (e.exports = process.platform === 'win32' ? n : o),
      (e.exports.posix = o),
      (e.exports.win32 = n);
  },
  './node_modules/rimraf/rimraf.js': function(e, t, r) {
    (e.exports = h), (h.sync = _);
    const o = r('assert');
    const n = r('path');
    const s = r('fs');
    const i = r('./node_modules/glob/glob.js');
    const a = 0o666;
    const c = { nosort: !0, silent: !0 };
    let u = 0;
    const l = process.platform === 'win32';
    function d(e) {
      ['unlink', 'chmod', 'stat', 'lstat', 'rmdir', 'readdir'].forEach(t => {
        (e[t] = e[t] || s[t]), (e[(t += 'Sync')] = e[t] || s[t]);
      }),
        (e.maxBusyTries = e.maxBusyTries || 3),
        (e.emfileWait = e.emfileWait || 1e3),
        !1 === e.glob && (e.disableGlob = !0),
        (e.disableGlob = e.disableGlob || !1),
        (e.glob = e.glob || c);
    }
    function h(e, t, r) {
      typeof t === 'function' && ((r = t), (t = {})),
        o(e, 'rimraf: missing path'),
        o.equal(typeof e, 'string', 'rimraf: path should be a string'),
        o.equal(typeof r, 'function', 'rimraf: callback function required'),
        o(t, 'rimraf: invalid options argument provided'),
        o.equal(typeof t, 'object', 'rimraf: options should be object'),
        d(t);
      let n = 0;
      let s = null;
      let a = 0;
      if (t.disableGlob || !i.hasMagic(e)) return c(null, [e]);
      function c(e, o) {
        return e
          ? r(e)
          : (a = o.length) === 0
          ? r()
          : void o.forEach(e => {
              f(e, t, function o(i) {
                if (i) {
                  if (
                    (i.code === 'EBUSY' ||
                      i.code === 'ENOTEMPTY' ||
                      i.code === 'EPERM') &&
                    n < t.maxBusyTries
                  ) {
                    return (
                      n++,
                      setTimeout(() => {
                        f(e, t, o);
                      }, 100 * n)
                    );
                  }
                  if (i.code === 'EMFILE' && u < t.emfileWait) {
                    return setTimeout(() => {
                      f(e, t, o);
                    }, u++);
                  }
                  i.code === 'ENOENT' && (i = null);
                }
                (u = 0),
                  (function(e) {
                    (s = s || e), --a == 0 && r(s);
                  })(i);
              });
            });
      }
      t.lstat(e, (r, o) => {
        if (!r) return c(null, [e]);
        i(e, t.glob, c);
      });
    }
    function f(e, t, r) {
      o(e),
        o(t),
        o(typeof r === 'function'),
        t.lstat(e, (o, n) =>
          o && o.code === 'ENOENT'
            ? r(null)
            : (o && o.code === 'EPERM' && l && p(e, t, o, r),
              n && n.isDirectory()
                ? v(e, t, o, r)
                : void t.unlink(e, o => {
                    if (o) {
                      if (o.code === 'ENOENT') return r(null);
                      if (o.code === 'EPERM')
                        return l ? p(e, t, o, r) : v(e, t, o, r);
                      if (o.code === 'EISDIR') return v(e, t, o, r);
                    }
                    return r(o);
                  }))
        );
    }
    function p(e, t, r, n) {
      o(e),
        o(t),
        o(typeof n === 'function'),
        r && o(r instanceof Error),
        t.chmod(e, a, o => {
          o
            ? n(o.code === 'ENOENT' ? null : r)
            : t.stat(e, (o, s) => {
                o
                  ? n(o.code === 'ENOENT' ? null : r)
                  : s.isDirectory()
                  ? v(e, t, r, n)
                  : t.unlink(e, n);
              });
        });
    }
    function m(e, t, r) {
      o(e), o(t), r && o(r instanceof Error);
      try {
        t.chmodSync(e, a);
      } catch (e) {
        if (e.code === 'ENOENT') return;
        throw r;
      }
      try {
        var n = t.statSync(e);
      } catch (e) {
        if (e.code === 'ENOENT') return;
        throw r;
      }
      n.isDirectory() ? j(e, t, r) : t.unlinkSync(e);
    }
    function v(e, t, r, s) {
      o(e),
        o(t),
        r && o(r instanceof Error),
        o(typeof s === 'function'),
        t.rmdir(e, i => {
          !i ||
          (i.code !== 'ENOTEMPTY' && i.code !== 'EEXIST' && i.code !== 'EPERM')
            ? i && i.code === 'ENOTDIR'
              ? s(r)
              : s(i)
            : (function(e, t, r) {
                o(e),
                  o(t),
                  o(typeof r === 'function'),
                  t.readdir(e, (o, s) => {
                    if (o) return r(o);
                    let i;
                    let a = s.length;
                    if (a === 0) return t.rmdir(e, r);
                    s.forEach(o => {
                      h(n.join(e, o), t, o => {
                        if (!i) {
                          return o
                            ? r((i = o))
                            : void (--a == 0 && t.rmdir(e, r));
                        }
                      });
                    });
                  });
              })(e, t, s);
        });
    }
    function _(e, t) {
      let r;
      if (
        (d((t = t || {})),
        o(e, 'rimraf: missing path'),
        o.equal(typeof e, 'string', 'rimraf: path should be a string'),
        o(t, 'rimraf: missing options'),
        o.equal(typeof t, 'object', 'rimraf: options should be object'),
        t.disableGlob || !i.hasMagic(e))
      )
        r = [e];
      else {
        try {
          t.lstatSync(e), (r = [e]);
        } catch (o) {
          r = i.sync(e, t.glob);
        }
      }
      if (r.length) {
        for (let n = 0; n < r.length; n++) {
          e = r[n];
          try {
            var s = t.lstatSync(e);
          } catch (r) {
            if (r.code === 'ENOENT') return;
            r.code === 'EPERM' && l && m(e, t, r);
          }
          try {
            s && s.isDirectory() ? j(e, t, null) : t.unlinkSync(e);
          } catch (r) {
            if (r.code === 'ENOENT') return;
            if (r.code === 'EPERM') return l ? m(e, t, r) : j(e, t, r);
            if (r.code !== 'EISDIR') throw r;
            j(e, t, r);
          }
        }
      }
    }
    function j(e, t, r) {
      o(e), o(t), r && o(r instanceof Error);
      try {
        t.rmdirSync(e);
      } catch (s) {
        if (s.code === 'ENOENT') return;
        if (s.code === 'ENOTDIR') throw r;
        (s.code !== 'ENOTEMPTY' && s.code !== 'EEXIST' && s.code !== 'EPERM') ||
          (function(e, t) {
            o(e),
              o(t),
              t.readdirSync(e).forEach(r => {
                _(n.join(e, r), t);
              });
            const r = l ? 100 : 1;
            let s = 0;
            for (;;) {
              let i = !0;
              try {
                const a = t.rmdirSync(e, t);
                return (i = !1), a;
              } finally {
                if (++s < r && i) continue;
              }
            }
          })(e, t);
      }
    }
  },
  './node_modules/semver/semver.js': function(e, t) {
    let r;
    (t = e.exports = Q),
      (r =
        typeof process === 'object' &&
        process.env &&
        process.env.NODE_DEBUG &&
        /\bsemver\b/i.test(process.env.NODE_DEBUG)
          ? function() {
              const e = Array.prototype.slice.call(arguments, 0);
              e.unshift('SEMVER'), console.log(...e);
            }
          : function() {}),
      (t.SEMVER_SPEC_VERSION = '2.0.0');
    const o = 256;
    const n = Number.MAX_SAFE_INTEGER || 9007199254740991;
    const s = (t.re = []);
    const i = (t.src = []);
    let a = 0;
    const c = a++;
    i[c] = '0|[1-9]\\d*';
    const u = a++;
    i[u] = '[0-9]+';
    const l = a++;
    i[l] = '\\d*[a-zA-Z-][a-zA-Z0-9-]*';
    const d = a++;
    i[d] = `(${i[c]})\\.(${i[c]})\\.(${i[c]})`;
    const h = a++;
    i[h] = `(${i[u]})\\.(${i[u]})\\.(${i[u]})`;
    const f = a++;
    i[f] = `(?:${i[c]}|${i[l]})`;
    const p = a++;
    i[p] = `(?:${i[u]}|${i[l]})`;
    const m = a++;
    i[m] = `(?:-(${i[f]}(?:\\.${i[f]})*))`;
    const v = a++;
    i[v] = `(?:-?(${i[p]}(?:\\.${i[p]})*))`;
    const _ = a++;
    i[_] = '[0-9A-Za-z-]+';
    const j = a++;
    i[j] = `(?:\\+(${i[_]}(?:\\.${i[_]})*))`;
    const y = a++;
    const g = `v?${i[d]}${i[m]}?${i[j]}?`;
    i[y] = `^${g}$`;
    const b = `[v=\\s]*${i[h]}${i[v]}?${i[j]}?`;
    const w = a++;
    i[w] = `^${b}$`;
    const E = a++;
    i[E] = '((?:<|>)?=?)';
    const x = a++;
    i[x] = `${i[u]}|x|X|\\*`;
    const O = a++;
    i[O] = `${i[c]}|x|X|\\*`;
    const S = a++;
    i[S] = `[v=\\s]*(${i[O]})(?:\\.(${i[O]})(?:\\.(${i[O]})(?:${i[m]})?${
      i[j]
    }?)?)?`;
    const k = a++;
    i[k] = `[v=\\s]*(${i[x]})(?:\\.(${i[x]})(?:\\.(${i[x]})(?:${i[v]})?${
      i[j]
    }?)?)?`;
    const A = a++;
    i[A] = `^${i[E]}\\s*${i[S]}$`;
    const T = a++;
    i[T] = `^${i[E]}\\s*${i[k]}$`;
    const R = a++;
    i[R] =
      '(?:^|[^\\d])(\\d{1,16})(?:\\.(\\d{1,16}))?(?:\\.(\\d{1,16}))?(?:$|[^\\d])';
    const P = a++;
    i[P] = '(?:~>?)';
    const L = a++;
    (i[L] = `(\\s*)${i[P]}\\s+`), (s[L] = new RegExp(i[L], 'g'));
    const M = a++;
    i[M] = `^${i[P]}${i[S]}$`;
    const C = a++;
    i[C] = `^${i[P]}${i[k]}$`;
    const N = a++;
    i[N] = '(?:\\^)';
    const I = a++;
    (i[I] = `(\\s*)${i[N]}\\s+`), (s[I] = new RegExp(i[I], 'g'));
    const D = a++;
    i[D] = `^${i[N]}${i[S]}$`;
    const G = a++;
    i[G] = `^${i[N]}${i[k]}$`;
    const F = a++;
    i[F] = `^${i[E]}\\s*(${b})$|^$`;
    const $ = a++;
    i[$] = `^${i[E]}\\s*(${g})$|^$`;
    const B = a++;
    (i[B] = `(\\s*)${i[E]}\\s*(${b}|${i[S]})`), (s[B] = new RegExp(i[B], 'g'));
    const V = a++;
    i[V] = `^\\s*(${i[S]})\\s+-\\s+(${i[S]})\\s*$`;
    const q = a++;
    i[q] = `^\\s*(${i[k]})\\s+-\\s+(${i[k]})\\s*$`;
    const z = a++;
    i[z] = '(<|>)?=?\\s*\\*';
    for (let U = 0; U < 35; U++) r(U, i[U]), s[U] || (s[U] = new RegExp(i[U]));
    function W(e, t) {
      if (
        ((t && typeof t === 'object') ||
          (t = { loose: !!t, includePrerelease: !1 }),
        e instanceof Q)
      )
        return e;
      if (typeof e !== 'string') return null;
      if (e.length > o) return null;
      if (!(t.loose ? s[w] : s[y]).test(e)) return null;
      try {
        return new Q(e, t);
      } catch (e) {
        return null;
      }
    }
    function Q(e, t) {
      if (
        ((t && typeof t === 'object') ||
          (t = { loose: !!t, includePrerelease: !1 }),
        e instanceof Q)
      ) {
        if (e.loose === t.loose) return e;
        e = e.version;
      } else if (typeof e !== 'string')
        throw new TypeError(`Invalid Version: ${e}`);
      if (e.length > o)
        throw new TypeError(`version is longer than ${o} characters`);
      if (!(this instanceof Q)) return new Q(e, t);
      r('SemVer', e, t), (this.options = t), (this.loose = !!t.loose);
      const i = e.trim().match(t.loose ? s[w] : s[y]);
      if (!i) throw new TypeError(`Invalid Version: ${e}`);
      if (
        ((this.raw = e),
        (this.major = +i[1]),
        (this.minor = +i[2]),
        (this.patch = +i[3]),
        this.major > n || this.major < 0)
      )
        throw new TypeError('Invalid major version');
      if (this.minor > n || this.minor < 0)
        throw new TypeError('Invalid minor version');
      if (this.patch > n || this.patch < 0)
        throw new TypeError('Invalid patch version');
      i[4]
        ? (this.prerelease = i[4].split('.').map(e => {
            if (/^[0-9]+$/.test(e)) {
              const t = +e;
              if (t >= 0 && t < n) return t;
            }
            return e;
          }))
        : (this.prerelease = []),
        (this.build = i[5] ? i[5].split('.') : []),
        this.format();
    }
    (t.parse = W),
      (t.valid = function(e, t) {
        const r = W(e, t);
        return r ? r.version : null;
      }),
      (t.clean = function(e, t) {
        const r = W(e.trim().replace(/^[=v]+/, ''), t);
        return r ? r.version : null;
      }),
      (t.SemVer = Q),
      (Q.prototype.format = function() {
        return (
          (this.version = `${this.major}.${this.minor}.${this.patch}`),
          this.prerelease.length &&
            (this.version += `-${this.prerelease.join('.')}`),
          this.version
        );
      }),
      (Q.prototype.toString = function() {
        return this.version;
      }),
      (Q.prototype.compare = function(e) {
        return (
          r('SemVer.compare', this.version, this.options, e),
          e instanceof Q || (e = new Q(e, this.options)),
          this.compareMain(e) || this.comparePre(e)
        );
      }),
      (Q.prototype.compareMain = function(e) {
        return (
          e instanceof Q || (e = new Q(e, this.options)),
          J(this.major, e.major) ||
            J(this.minor, e.minor) ||
            J(this.patch, e.patch)
        );
      }),
      (Q.prototype.comparePre = function(e) {
        if (
          (e instanceof Q || (e = new Q(e, this.options)),
          this.prerelease.length && !e.prerelease.length)
        )
          return -1;
        if (!this.prerelease.length && e.prerelease.length) return 1;
        if (!this.prerelease.length && !e.prerelease.length) return 0;
        let t = 0;
        do {
          const o = this.prerelease[t];
          const n = e.prerelease[t];
          if ((r('prerelease compare', t, o, n), void 0 === o && void 0 === n))
            return 0;
          if (void 0 === n) return 1;
          if (void 0 === o) return -1;
          if (o !== n) return J(o, n);
        } while (++t);
      }),
      (Q.prototype.inc = function(e, t) {
        switch (e) {
          case 'premajor':
            (this.prerelease.length = 0),
              (this.patch = 0),
              (this.minor = 0),
              this.major++,
              this.inc('pre', t);
            break;
          case 'preminor':
            (this.prerelease.length = 0),
              (this.patch = 0),
              this.minor++,
              this.inc('pre', t);
            break;
          case 'prepatch':
            (this.prerelease.length = 0),
              this.inc('patch', t),
              this.inc('pre', t);
            break;
          case 'prerelease':
            this.prerelease.length === 0 && this.inc('patch', t),
              this.inc('pre', t);
            break;
          case 'major':
            (this.minor === 0 &&
              this.patch === 0 &&
              this.prerelease.length !== 0) ||
              this.major++,
              (this.minor = 0),
              (this.patch = 0),
              (this.prerelease = []);
            break;
          case 'minor':
            (this.patch === 0 && this.prerelease.length !== 0) || this.minor++,
              (this.patch = 0),
              (this.prerelease = []);
            break;
          case 'patch':
            this.prerelease.length === 0 && this.patch++,
              (this.prerelease = []);
            break;
          case 'pre':
            if (this.prerelease.length === 0) this.prerelease = [0];
            else {
              for (var r = this.prerelease.length; --r >= 0; ) {
                typeof this.prerelease[r] === 'number' &&
                  (this.prerelease[r]++, (r = -2));
              }
              r === -1 && this.prerelease.push(0);
            }
            t &&
              (this.prerelease[0] === t
                ? isNaN(this.prerelease[1]) && (this.prerelease = [t, 0])
                : (this.prerelease = [t, 0]));
            break;
          default:
            throw new Error(`invalid increment argument: ${e}`);
        }
        return this.format(), (this.raw = this.version), this;
      }),
      (t.inc = function(e, t, r, o) {
        typeof r === 'string' && ((o = r), (r = void 0));
        try {
          return new Q(e, r).inc(t, o).version;
        } catch (e) {
          return null;
        }
      }),
      (t.diff = function(e, t) {
        if (K(e, t)) return null;
        const r = W(e);
        const o = W(t);
        if (r.prerelease.length || o.prerelease.length) {
          for (var n in r) {
            if (
              (n === 'major' || n === 'minor' || n === 'patch') &&
              r[n] !== o[n]
            )
              return `pre${n}`;
          }
          return 'prerelease';
        }
        for (var n in r) {
          if (
            (n === 'major' || n === 'minor' || n === 'patch') &&
            r[n] !== o[n]
          )
            return n;
        }
      }),
      (t.compareIdentifiers = J);
    const H = /^[0-9]+$/;
    function J(e, t) {
      const r = H.test(e);
      const o = H.test(t);
      return (
        r && o && ((e = +e), (t = +t)),
        r && !o ? -1 : o && !r ? 1 : e < t ? -1 : e > t ? 1 : 0
      );
    }
    function X(e, t, r) {
      return new Q(e, r).compare(new Q(t, r));
    }
    function Z(e, t, r) {
      return X(e, t, r) > 0;
    }
    function Y(e, t, r) {
      return X(e, t, r) < 0;
    }
    function K(e, t, r) {
      return X(e, t, r) === 0;
    }
    function ee(e, t, r) {
      return X(e, t, r) !== 0;
    }
    function te(e, t, r) {
      return X(e, t, r) >= 0;
    }
    function re(e, t, r) {
      return X(e, t, r) <= 0;
    }
    function oe(e, t, r, o) {
      let n;
      switch (t) {
        case '===':
          typeof e === 'object' && (e = e.version),
            typeof r === 'object' && (r = r.version),
            (n = e === r);
          break;
        case '!==':
          typeof e === 'object' && (e = e.version),
            typeof r === 'object' && (r = r.version),
            (n = e !== r);
          break;
        case '':
        case '=':
        case '==':
          n = K(e, r, o);
          break;
        case '!=':
          n = ee(e, r, o);
          break;
        case '>':
          n = Z(e, r, o);
          break;
        case '>=':
          n = te(e, r, o);
          break;
        case '<':
          n = Y(e, r, o);
          break;
        case '<=':
          n = re(e, r, o);
          break;
        default:
          throw new TypeError(`Invalid operator: ${t}`);
      }
      return n;
    }
    function ne(e, t) {
      if (
        ((t && typeof t === 'object') ||
          (t = { loose: !!t, includePrerelease: !1 }),
        e instanceof ne)
      ) {
        if (e.loose === !!t.loose) return e;
        e = e.value;
      }
      if (!(this instanceof ne)) return new ne(e, t);
      r('comparator', e, t),
        (this.options = t),
        (this.loose = !!t.loose),
        this.parse(e),
        this.semver === se
          ? (this.value = '')
          : (this.value = this.operator + this.semver.version),
        r('comp', this);
    }
    (t.rcompareIdentifiers = function(e, t) {
      return J(t, e);
    }),
      (t.major = function(e, t) {
        return new Q(e, t).major;
      }),
      (t.minor = function(e, t) {
        return new Q(e, t).minor;
      }),
      (t.patch = function(e, t) {
        return new Q(e, t).patch;
      }),
      (t.compare = X),
      (t.compareLoose = function(e, t) {
        return X(e, t, !0);
      }),
      (t.rcompare = function(e, t, r) {
        return X(t, e, r);
      }),
      (t.sort = function(e, r) {
        return e.sort((e, o) => t.compare(e, o, r));
      }),
      (t.rsort = function(e, r) {
        return e.sort((e, o) => t.rcompare(e, o, r));
      }),
      (t.gt = Z),
      (t.lt = Y),
      (t.eq = K),
      (t.neq = ee),
      (t.gte = te),
      (t.lte = re),
      (t.cmp = oe),
      (t.Comparator = ne);
    var se = {};
    function ie(e, t) {
      if (
        ((t && typeof t === 'object') ||
          (t = { loose: !!t, includePrerelease: !1 }),
        e instanceof ie)
      ) {
        return e.loose === !!t.loose &&
          e.includePrerelease === !!t.includePrerelease
          ? e
          : new ie(e.raw, t);
      }
      if (e instanceof ne) return new ie(e.value, t);
      if (!(this instanceof ie)) return new ie(e, t);
      if (
        ((this.options = t),
        (this.loose = !!t.loose),
        (this.includePrerelease = !!t.includePrerelease),
        (this.raw = e),
        (this.set = e
          .split(/\s*\|\|\s*/)
          .map(function(e) {
            return this.parseRange(e.trim());
          }, this)
          .filter(e => e.length)),
        !this.set.length)
      )
        throw new TypeError(`Invalid SemVer Range: ${e}`);
      this.format();
    }
    function ae(e) {
      return !e || e.toLowerCase() === 'x' || e === '*';
    }
    function ce(e, t, r, o, n, s, i, a, c, u, l, d, h) {
      return `${(t = ae(r)
        ? ''
        : ae(o)
        ? `>=${r}.0.0`
        : ae(n)
        ? `>=${r}.${o}.0`
        : `>=${t}`)} ${(a = ae(c)
        ? ''
        : ae(u)
        ? `<${+c + 1}.0.0`
        : ae(l)
        ? `<${c}.${+u + 1}.0`
        : d
        ? `<=${c}.${u}.${l}-${d}`
        : `<=${a}`)}`.trim();
    }
    function ue(e, t, o) {
      for (var n = 0; n < e.length; n++) if (!e[n].test(t)) return !1;
      if ((o || (o = {}), t.prerelease.length && !o.includePrerelease)) {
        for (n = 0; n < e.length; n++) {
          if (
            (r(e[n].semver),
            e[n].semver !== se && e[n].semver.prerelease.length > 0)
          ) {
            const s = e[n].semver;
            if (
              s.major === t.major &&
              s.minor === t.minor &&
              s.patch === t.patch
            )
              return !0;
          }
        }
        return !1;
      }
      return !0;
    }
    function le(e, t, r) {
      try {
        t = new ie(t, r);
      } catch (e) {
        return !1;
      }
      return t.test(e);
    }
    function de(e, t, r, o) {
      let n;
      let s;
      let i;
      let a;
      let c;
      switch (((e = new Q(e, o)), (t = new ie(t, o)), r)) {
        case '>':
          (n = Z), (s = re), (i = Y), (a = '>'), (c = '>=');
          break;
        case '<':
          (n = Y), (s = te), (i = Z), (a = '<'), (c = '<=');
          break;
        default:
          throw new TypeError('Must provide a hilo val of "<" or ">"');
      }
      if (le(e, t, o)) return !1;
      for (let u = 0; u < t.set.length; ++u) {
        const l = t.set[u];
        var d = null;
        var h = null;
        if (
          (l.forEach(e => {
            e.semver === se && (e = new ne('>=0.0.0')),
              (d = d || e),
              (h = h || e),
              n(e.semver, d.semver, o)
                ? (d = e)
                : i(e.semver, h.semver, o) && (h = e);
          }),
          d.operator === a || d.operator === c)
        )
          return !1;
        if ((!h.operator || h.operator === a) && s(e, h.semver)) return !1;
        if (h.operator === c && i(e, h.semver)) return !1;
      }
      return !0;
    }
    (ne.prototype.parse = function(e) {
      const t = this.options.loose ? s[F] : s[$];
      const r = e.match(t);
      if (!r) throw new TypeError(`Invalid comparator: ${e}`);
      (this.operator = r[1]),
        this.operator === '=' && (this.operator = ''),
        r[2]
          ? (this.semver = new Q(r[2], this.options.loose))
          : (this.semver = se);
    }),
      (ne.prototype.toString = function() {
        return this.value;
      }),
      (ne.prototype.test = function(e) {
        return (
          r('Comparator.test', e, this.options.loose),
          this.semver === se ||
            (typeof e === 'string' && (e = new Q(e, this.options)),
            oe(e, this.operator, this.semver, this.options))
        );
      }),
      (ne.prototype.intersects = function(e, t) {
        if (!(e instanceof ne)) throw new TypeError('a Comparator is required');
        let r;
        if (
          ((t && typeof t === 'object') ||
            (t = { loose: !!t, includePrerelease: !1 }),
          this.operator === '')
        )
          return (r = new ie(e.value, t)), le(this.value, r, t);
        if (e.operator === '')
          return (r = new ie(this.value, t)), le(e.semver, r, t);
        const o = !(
          (this.operator !== '>=' && this.operator !== '>') ||
          (e.operator !== '>=' && e.operator !== '>')
        );
        const n = !(
          (this.operator !== '<=' && this.operator !== '<') ||
          (e.operator !== '<=' && e.operator !== '<')
        );
        const s = this.semver.version === e.semver.version;
        const i = !(
          (this.operator !== '>=' && this.operator !== '<=') ||
          (e.operator !== '>=' && e.operator !== '<=')
        );
        const a =
          oe(this.semver, '<', e.semver, t) &&
          (this.operator === '>=' || this.operator === '>') &&
          (e.operator === '<=' || e.operator === '<');
        const c =
          oe(this.semver, '>', e.semver, t) &&
          (this.operator === '<=' || this.operator === '<') &&
          (e.operator === '>=' || e.operator === '>');
        return o || n || (s && i) || a || c;
      }),
      (t.Range = ie),
      (ie.prototype.format = function() {
        return (
          (this.range = this.set
            .map(e => e.join(' ').trim())
            .join('||')
            .trim()),
          this.range
        );
      }),
      (ie.prototype.toString = function() {
        return this.range;
      }),
      (ie.prototype.parseRange = function(e) {
        const t = this.options.loose;
        e = e.trim();
        const o = t ? s[q] : s[V];
        (e = e.replace(o, ce)),
          r('hyphen replace', e),
          (e = e.replace(s[B], '$1$2$3')),
          r('comparator trim', e, s[B]),
          (e = (e = (e = e.replace(s[L], '$1~')).replace(s[I], '$1^'))
            .split(/\s+/)
            .join(' '));
        const n = t ? s[F] : s[$];
        let i = e
          .split(' ')
          .map(function(e) {
            return (function(e, t) {
              return (
                r('comp', e, t),
                (e = (function(e, t) {
                  return e
                    .trim()
                    .split(/\s+/)
                    .map(e =>
                      (function(e, t) {
                        r('caret', e, t),
                          (t && typeof t === 'object') ||
                            (t = { loose: !!t, includePrerelease: !1 });
                        const o = t.loose ? s[G] : s[D];
                        return e.replace(o, (t, o, n, s, i) => {
                          let a;
                          return (
                            r('caret', e, t, o, n, s, i),
                            ae(o)
                              ? (a = '')
                              : ae(n)
                              ? (a = `>=${o}.0.0 <${+o + 1}.0.0`)
                              : ae(s)
                              ? (a =
                                  o === '0'
                                    ? `>=${o}.${n}.0 <${o}.${+n + 1}.0`
                                    : `>=${o}.${n}.0 <${+o + 1}.0.0`)
                              : i
                              ? (r('replaceCaret pr', i),
                                i.charAt(0) !== '-' && (i = `-${i}`),
                                (a =
                                  o === '0'
                                    ? n === '0'
                                      ? `>=${o}.${n}.${s}${i} <${o}.${n}.${+s +
                                          1}`
                                      : `>=${o}.${n}.${s}${i} <${o}.${+n + 1}.0`
                                    : `>=${o}.${n}.${s}${i} <${+o + 1}.0.0`))
                              : (r('no pr'),
                                (a =
                                  o === '0'
                                    ? n === '0'
                                      ? `>=${o}.${n}.${s} <${o}.${n}.${+s + 1}`
                                      : `>=${o}.${n}.${s} <${o}.${+n + 1}.0`
                                    : `>=${o}.${n}.${s} <${+o + 1}.0.0`)),
                            r('caret return', a),
                            a
                          );
                        });
                      })(e, t)
                    )
                    .join(' ');
                })(e, t)),
                r('caret', e),
                (e = (function(e, t) {
                  return e
                    .trim()
                    .split(/\s+/)
                    .map(e =>
                      (function(e, t) {
                        (t && typeof t === 'object') ||
                          (t = { loose: !!t, includePrerelease: !1 });
                        const o = t.loose ? s[C] : s[M];
                        return e.replace(o, (t, o, n, s, i) => {
                          let a;
                          return (
                            r('tilde', e, t, o, n, s, i),
                            ae(o)
                              ? (a = '')
                              : ae(n)
                              ? (a = `>=${o}.0.0 <${+o + 1}.0.0`)
                              : ae(s)
                              ? (a = `>=${o}.${n}.0 <${o}.${+n + 1}.0`)
                              : i
                              ? (r('replaceTilde pr', i),
                                i.charAt(0) !== '-' && (i = `-${i}`),
                                (a = `>=${o}.${n}.${s}${i} <${o}.${+n + 1}.0`))
                              : (a = `>=${o}.${n}.${s} <${o}.${+n + 1}.0`),
                            r('tilde return', a),
                            a
                          );
                        });
                      })(e, t)
                    )
                    .join(' ');
                })(e, t)),
                r('tildes', e),
                (e = (function(e, t) {
                  return (
                    r('replaceXRanges', e, t),
                    e
                      .split(/\s+/)
                      .map(e =>
                        (function(e, t) {
                          (e = e.trim()),
                            (t && typeof t === 'object') ||
                              (t = { loose: !!t, includePrerelease: !1 });
                          const o = t.loose ? s[T] : s[A];
                          return e.replace(o, (t, o, n, s, i, a) => {
                            r('xRange', e, t, o, n, s, i, a);
                            const c = ae(n);
                            const u = c || ae(s);
                            const l = u || ae(i);
                            const d = l;
                            return (
                              o === '=' && d && (o = ''),
                              c
                                ? (t = o === '>' || o === '<' ? '<0.0.0' : '*')
                                : o && d
                                ? (u && (s = 0),
                                  l && (i = 0),
                                  o === '>'
                                    ? ((o = '>='),
                                      u
                                        ? ((n = +n + 1), (s = 0), (i = 0))
                                        : l && ((s = +s + 1), (i = 0)))
                                    : o === '<=' &&
                                      ((o = '<'),
                                      u ? (n = +n + 1) : (s = +s + 1)),
                                  (t = `${o + n}.${s}.${i}`))
                                : u
                                ? (t = `>=${n}.0.0 <${+n + 1}.0.0`)
                                : l && (t = `>=${n}.${s}.0 <${n}.${+s + 1}.0`),
                              r('xRange return', t),
                              t
                            );
                          });
                        })(e, t)
                      )
                      .join(' ')
                  );
                })(e, t)),
                r('xrange', e),
                (e = (function(e, t) {
                  return r('replaceStars', e, t), e.trim().replace(s[z], '');
                })(e, t)),
                r('stars', e),
                e
              );
            })(e, this.options);
          }, this)
          .join(' ')
          .split(/\s+/);
        return (
          this.options.loose && (i = i.filter(e => !!e.match(n))),
          (i = i.map(function(e) {
            return new ne(e, this.options);
          }, this))
        );
      }),
      (ie.prototype.intersects = function(e, t) {
        if (!(e instanceof ie)) throw new TypeError('a Range is required');
        return this.set.some(r =>
          r.every(r => e.set.some(e => e.every(e => r.intersects(e, t))))
        );
      }),
      (t.toComparators = function(e, t) {
        return new ie(e, t).set.map(e =>
          e
            .map(e => e.value)
            .join(' ')
            .trim()
            .split(' ')
        );
      }),
      (ie.prototype.test = function(e) {
        if (!e) return !1;
        typeof e === 'string' && (e = new Q(e, this.options));
        for (let t = 0; t < this.set.length; t++)
          if (ue(this.set[t], e, this.options)) return !0;
        return !1;
      }),
      (t.satisfies = le),
      (t.maxSatisfying = function(e, t, r) {
        let o = null;
        let n = null;
        try {
          var s = new ie(t, r);
        } catch (e) {
          return null;
        }
        return (
          e.forEach(e => {
            s.test(e) &&
              ((o && n.compare(e) !== -1) || (n = new Q((o = e), r)));
          }),
          o
        );
      }),
      (t.minSatisfying = function(e, t, r) {
        let o = null;
        let n = null;
        try {
          var s = new ie(t, r);
        } catch (e) {
          return null;
        }
        return (
          e.forEach(e => {
            s.test(e) && ((o && n.compare(e) !== 1) || (n = new Q((o = e), r)));
          }),
          o
        );
      }),
      (t.validRange = function(e, t) {
        try {
          return new ie(e, t).range || '*';
        } catch (e) {
          return null;
        }
      }),
      (t.ltr = function(e, t, r) {
        return de(e, t, '<', r);
      }),
      (t.gtr = function(e, t, r) {
        return de(e, t, '>', r);
      }),
      (t.outside = de),
      (t.prerelease = function(e, t) {
        const r = W(e, t);
        return r && r.prerelease.length ? r.prerelease : null;
      }),
      (t.intersects = function(e, t, r) {
        return (e = new ie(e, r)), (t = new ie(t, r)), e.intersects(t);
      }),
      (t.coerce = function(e) {
        if (e instanceof Q) return e;
        if (typeof e !== 'string') return null;
        const t = e.match(s[R]);
        return t == null
          ? null
          : W(`${t[1] || '0'}.${t[2] || '0'}.${t[3] || '0'}`);
      });
  },
  './node_modules/wrappy/wrappy.js': function(e, t) {
    e.exports = function e(t, r) {
      if (t && r) return e(t)(r);
      if (typeof t !== 'function') throw new TypeError('need wrapper function');
      Object.keys(t).forEach(e => {
        o[e] = t[e];
      });
      return o;
      function o() {
        for (var e = new Array(arguments.length), r = 0; r < e.length; r++)
          e[r] = arguments[r];
        const o = t.apply(this, e);
        const n = e[e.length - 1];
        return (
          typeof o === 'function' &&
            o !== n &&
            Object.keys(n).forEach(e => {
              o[e] = n[e];
            }),
          o
        );
      }
    };
  },
  assert(e, t) {
    e.exports = require('assert');
  },
  child_process(e, t) {
    e.exports = require('child_process');
  },
  electron(e, t) {
    e.exports = require('electron');
  },
  'electron-debug': function(e, t) {
    e.exports = require('electron-debug');
  },
  'electron-log': function(e, t) {
    e.exports = require('electron-log');
  },
  'electron-updater': function(e, t) {
    e.exports = require('electron-updater');
  },
  events(e, t) {
    e.exports = require('events');
  },
  fs(e, t) {
    e.exports = require('fs');
  },
  https(e, t) {
    e.exports = require('https');
  },
  path(e, t) {
    e.exports = require('path');
  },
  'source-map-support': function(e, t) {
    e.exports = require('source-map-support');
  },
  util(e, t) {
    e.exports = require('util');
  }
});
// # sourceMappingURL=main.prod.js.map
