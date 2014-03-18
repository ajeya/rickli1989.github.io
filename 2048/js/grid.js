function Grid(size) {
  this.size = size;

  this.cells1 = [];
  this.cells2 = [];

  this.build();
}

// Build a grid of the specified size
Grid.prototype.build = function () {
  for (var x = 0; x < this.size; x++) {
    var row1 = this.cells1[x] = [];
    var row2 = this.cells2[x] = [];
    for (var y = 0; y < this.size; y++) {
      row1.push(null);
      row2.push(null);
    }
  }
};

// Find the first available random position
Grid.prototype.randomAvailableCell1 = function () {
  var cells1 = this.availablecells1();

  if (cells1.length) {
    return cells1[Math.floor(Math.random() * cells1.length)];
  }
};

Grid.prototype.randomAvailableCell2 = function () {
  var cells2 = this.availablecells2();

  if (cells2.length) {
    return cells2[Math.floor(Math.random() * cells2.length)];
  }
};

Grid.prototype.availablecells1 = function () {
  var cells1 = [];

  this.eachCell1(function (x, y, tile) {
    if (!tile) {
      cells1.push({ x: x, y: y });
    }
  });

  return cells1;
};
Grid.prototype.availablecells2 = function () {
  var cells2 = [];

  this.eachCell2(function (x, y, tile) {
    if (!tile) {
      cells2.push({ x: x, y: y });
    }
  });

  return cells2;
};
// Call callback for every cell
Grid.prototype.eachCell1 = function (callback) {
  for (var x = 0; x < this.size; x++) {
    for (var y = 0; y < this.size; y++) {
      callback(x, y, this.cells1[x][y]);
    }
  }
};

Grid.prototype.eachCell2 = function (callback) {
  for (var x = 0; x < this.size; x++) {
    for (var y = 0; y < this.size; y++) {
      callback(x, y, this.cells2[x][y]);
    }
  }
};

// Check if there are any cells1 available
Grid.prototype.cellsAvailable1 = function () {
  return !!this.availablecells1().length;
};

Grid.prototype.cellsAvailable2 = function () {
  return !!this.availablecells2().length;
};

// Check if the specified cell is taken
Grid.prototype.cellAvailable1 = function (cell) {
  return !this.cellOccupied1(cell);
};

Grid.prototype.cellAvailable2 = function (cell) {
  return !this.cellOccupied2(cell);
};

Grid.prototype.cellOccupied1 = function (cell) {
  return !!this.cellContent(cell);
};

Grid.prototype.cellOccupied2 = function (cell) {
  return !!this.cellContent2(cell);
};

Grid.prototype.cellContent = function (cell) {
  if (this.withinBounds(cell)) {
    return this.cells1[cell.x][cell.y];
  } else {
    return null;
  }
};

Grid.prototype.cellContent2 = function (cell) {
  if (this.withinBounds(cell)) {
    return this.cells2[cell.x][cell.y];
  } else {
    return null;
  }
};

// Inserts a tile at its position
Grid.prototype.insertTile1 = function (tile) {
  this.cells1[tile.x][tile.y] = tile;

};
Grid.prototype.insertTile2 = function (tile) {
  this.cells2[tile.x][tile.y] = tile;

};

Grid.prototype.removeTile = function (tile) {
  this.cells1[tile.x][tile.y] = null;
};
Grid.prototype.removeTile2 = function (tile) {
  this.cells2[tile.x][tile.y] = null;
};

Grid.prototype.withinBounds = function (position) {
  return position.x >= 0 && position.x < this.size &&
         position.y >= 0 && position.y < this.size;
};
