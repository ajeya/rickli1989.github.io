window.fakeStorage = {
  _data: {},

  setItem: function (id, val) {
    return this._data[id] = String(val);
  },

  getItem: function (id) {
    return this._data.hasOwnProperty(id) ? this._data[id] : undefined;
  },

  removeItem: function (id) {
    return delete this._data[id];
  },

  clear: function () {
    return this._data = {};
  }
};

function LocalScoreManager() {
  var localSupported = !!window.localStorage;

  this.key     = "bestScore";
  this.key2     = "bestScore2";
  this.storage = localSupported ? window.localStorage : window.fakeStorage;
}

LocalScoreManager.prototype.get = function () {
  return this.storage.getItem(this.key) || 0;
};

LocalScoreManager.prototype.set = function (score) {
  this.storage.setItem(this.key, score);
};

LocalScoreManager.prototype.get2 = function () {
  return this.storage.getItem(this.key2) || 0;
};

LocalScoreManager.prototype.set2 = function (score) {
  this.storage.setItem(this.key2, score);
};