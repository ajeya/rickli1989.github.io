System.register([], function (_export) {
  'use strict';

  return {
    setters: [],
    execute: function () {
      if (!('localStorage' in window)) {
        window.localStorage = {
          _data: {},
          setItem: function setItem(id, val) {
            return this._data[id] = String(val);
          },
          getItem: function getItem(id) {
            return this._data.hasOwnProperty(id) ? this._data[id] : undefined;
          },
          removeItem: function removeItem(id) {
            return delete this._data[id];
          },
          clear: function clear() {
            return this._data = {};
          }
        };
      } else {
        console.log(window.localStorage);
      }
    }
  };
});
//# sourceMappingURL=../../app/widget/localStorage-polyfill.js.map