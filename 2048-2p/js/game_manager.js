function GameManager(size, InputManager, Actuator, ScoreManager) {
  this.size         = size; // Size of the grid
  this.inputManager = new InputManager;
  this.scoreManager = new ScoreManager;
  this.actuator     = new Actuator;

  this.startTiles   = 2;

  this.inputManager.on("move", this.move.bind(this));
  this.inputManager.on("move2", this.move2.bind(this));
  this.inputManager.on("restart", this.restart.bind(this));

  this.setup();
}

// Restart the game
GameManager.prototype.restart = function () {
  this.actuator.restart();
  this.setup();
};

// Set up the game
GameManager.prototype.setup = function () {
  this.grid         = new Grid(this.size);
  this.grid2        = new Grid(this.size);
  
  this.score        = 0;
  this.over         = false;
  this.won          = false;

  // Add the initial tiles
  this.addStartTiles();

  // Update the actuator
  this.actuate();
  this.actuate2();

};

// Set up the initial tiles to start the game with
GameManager.prototype.addStartTiles = function () {
  for (var i = 0; i < this.startTiles; i++) {
    this.addRandomTile();

    this.addRandomTile2();
  }

};

// Adds a tile in a random position
GameManager.prototype.addRandomTile = function () {
  if (this.grid.cellsAvailable1()) {
    var value = Math.random() < 0.9 ? 2 : 4;
    var tile1 = new Tile(this.grid.randomAvailableCell1(), value);
    //var tile2 = new Tile(this.grid.randomAvailableCell2(), value);
    this.grid.insertTile1(tile1);
   // this.grid.insertTile2(tile2);
  }

};

GameManager.prototype.addRandomTile2 = function () {

  if (this.grid2.cellsAvailable2()) {

    var value = Math.random() < 0.9 ? 2 : 4;
    //var tile1 = new Tile(this.grid.randomAvailableCell1(), value);
    var tile2 = new Tile(this.grid2.randomAvailableCell2(), value);
    //this.grid.insertTile1(tile1);
    this.grid2.insertTile2(tile2);
  }
};

// Sends the updated grid to the actuator
GameManager.prototype.actuate = function () {
  if (this.scoreManager.get() < this.score) {
    this.scoreManager.set(this.score);
  }

  this.actuator.actuate(this.grid, {
    score:     this.score,
    over:      this.over,
    won:       this.won,
    bestScore: this.scoreManager.get()
  });

};

GameManager.prototype.actuate2 = function () {
  if (this.scoreManager.get() < this.score) {
    this.scoreManager.set(this.score);
  }

  this.actuator.actuate2(this.grid2, {
    score:     this.score,
    over:      this.over,
    won:       this.won,
    bestScore: this.scoreManager.get()
  });

};
// Save all tile positions and remove merger info
GameManager.prototype.prepareTiles1 = function () {
  this.grid.eachCell1(function (x, y, tile) {
    if (tile) {
      tile.mergedFrom = null;
      tile.savePosition();
    }
  });
};

GameManager.prototype.prepareTiles2 = function () {
  this.grid2.eachCell2(function (x, y, tile) {
    if (tile) {
      tile.mergedFrom = null;
      tile.savePosition();
    }
  });
};

// Move a tile and its representation
GameManager.prototype.moveTile = function (tile, cell) {
  this.grid.cells1[tile.x][tile.y] = null;
  this.grid.cells1[cell.x][cell.y] = tile;
  tile.updatePosition(cell);
};
GameManager.prototype.moveTile2 = function (tile, cell) {
  this.grid2.cells2[tile.x][tile.y] = null;
  this.grid2.cells2[cell.x][cell.y] = tile;
  tile.updatePosition(cell);
};
// Move tiles on the grid in the specified direction
GameManager.prototype.move = function (direction) {
  console.log("shit");
  // 0: up, 1: right, 2:down, 3: left
  var self = this;

  if (this.over || this.won) return; // Don't do anything if the game's over

  var cell, tile;

  var vector     = this.getVector(direction);

  var traversals = this.buildTraversals(vector);
  var moved      = false;

  // Save the current tile positions and remove merger information
  this.prepareTiles1();

  // Traverse the grid in the right direction and move tiles
  traversals.x.forEach(function (x) {
    traversals.y.forEach(function (y) {
      cell = { x: x, y: y };
      tile = self.grid.cellContent(cell);
      if (tile) {
        var positions = self.findFarthestPosition1(cell, vector);
        var next      = self.grid.cellContent(positions.next);

        // Only one merger per row traversal?
        if (next && next.value === tile.value && !next.mergedFrom) {
          var merged = new Tile(positions.next, tile.value * 2);
          merged.mergedFrom = [tile, next];

          self.grid.insertTile1(merged);
          self.grid.removeTile(tile);

          // Converge the two tiles' positions
          tile.updatePosition(positions.next);

          // Update the score
          self.score += merged.value;

          // The mighty 2048 tile
          if (merged.value === 2048) self.won = true;
        } else {
          self.moveTile(tile, positions.farthest);
        }

        if (!self.positionsEqual(cell, tile)) {
          moved = true; // The tile moved from its original cell!
        }
      }
    });
  });

  if (moved) {
    this.addRandomTile();

    if (!this.movesAvailable()) {
      this.over = true; // Game over!
    }

    this.actuate();
  }
};

GameManager.prototype.move2 = function (direction) {
  console.log("fuck");
  // 0: up, 1: right, 2:down, 3: left
  var self = this;

  if (this.over || this.won) return; // Don't do anything if the game's over

  var cell, tile;

  var vector     = this.getVector2(direction);
  var traversals = this.buildTraversals(vector);
  var moved      = false;

  // Save the current tile positions and remove merger information
  this.prepareTiles2();

  // Traverse the grid in the right direction and move tiles
  traversals.x.forEach(function (x) {
    traversals.y.forEach(function (y) {
      cell = { x: x, y: y };
      tile = self.grid2.cellContent2(cell);

      if (tile) {
        console.log("in");
        var positions = self.findFarthestPosition2(cell, vector);
        console.log(positions);
        var next      = self.grid2.cellContent2(positions.next);

        // Only one merger per row traversal?
        if (next && next.value === tile.value && !next.mergedFrom) {
          var merged = new Tile(positions.next, tile.value * 2);
          merged.mergedFrom = [tile, next];

          self.grid2.insertTile2(merged);
          self.grid2.removeTile2(tile);

          // Converge the two tiles' positions
          tile.updatePosition(positions.next);

          // Update the score
          self.score += merged.value;

          // The mighty 2048 tile
          if (merged.value === 2048) self.won = true;
        } else {
          self.moveTile2(tile, positions.farthest);
        }

        if (!self.positionsEqual(cell, tile)) {
          moved = true; // The tile moved from its original cell!
        }
      }
    });
  });

  if (moved) {
    this.addRandomTile2();

    if (!this.movesAvailable2()) {
      this.over = true; // Game over!
    }

    this.actuate2();
  }
};

// Get the vector representing the chosen direction
GameManager.prototype.getVector = function (direction) {
  // Vectors representing tile movement
  var map = {
    0: { x: 0,  y: -1 }, // up
    1: { x: 1,  y: 0 },  // right
    2: { x: 0,  y: 1 },  // down
    3: { x: -1, y: 0 }   // left
  };

  return map[direction];
};

GameManager.prototype.getVector2 = function (direction) {
  // Vectors representing tile movement
  var map = {
    6: { x: 0,  y: -1 }, // up
    7: { x: 1,  y: 0 },  // right
    8: { x: 0,  y: 1 },  // down
    9: { x: -1, y: 0 }   // left
  };

  return map[direction];
};

// Build a list of positions to traverse in the right order
GameManager.prototype.buildTraversals = function (vector) {
  var traversals = { x: [], y: [] };

  for (var pos = 0; pos < this.size; pos++) {
    traversals.x.push(pos);
    traversals.y.push(pos);
  }

  // Always traverse from the farthest cell in the chosen direction
  if (vector.x === 1) traversals.x = traversals.x.reverse();
  if (vector.y === 1) traversals.y = traversals.y.reverse();

  return traversals;
};

GameManager.prototype.findFarthestPosition1 = function (cell, vector) {
  var previous;

  // Progress towards the vector direction until an obstacle is found
  do {
    previous = cell;
    cell     = { x: previous.x + vector.x, y: previous.y + vector.y };
  } while (this.grid.withinBounds(cell) &&
           this.grid.cellAvailable1(cell));

  return {
    farthest: previous,
    next: cell // Used to check if a merge is required
  };
};

GameManager.prototype.findFarthestPosition2 = function (cell, vector) {
  var previous;
  console.log(vector);
  // Progress towards the vector direction until an obstacle is found
  do {
    previous = cell;
    cell     = { x: previous.x + vector.x, y: previous.y + vector.y };
  } while (this.grid2.withinBounds(cell) &&
           this.grid2.cellAvailable2(cell));

  return {
    farthest: previous,
    next: cell // Used to check if a merge is required
  };
};

GameManager.prototype.movesAvailable = function () {
  return this.grid.cellsAvailable1() || this.tileMatchesAvailable1();
};

GameManager.prototype.movesAvailable2 = function () {
  return this.grid2.cellsAvailable2() || this.tileMatchesAvailable2();
};

// Check for available matches between tiles (more expensive check)
GameManager.prototype.tileMatchesAvailable1 = function () {
  var self = this;

  var tile;

  for (var x = 0; x < this.size; x++) {
    for (var y = 0; y < this.size; y++) {
      tile = this.grid.cellContent({ x: x, y: y });

      if (tile) {
        for (var direction = 0; direction < 4; direction++) {
          var vector = self.getVector(direction);
          var cell   = { x: x + vector.x, y: y + vector.y };

          var other  = self.grid.cellContent(cell);

          if (other && other.value === tile.value) {
            return true; // These two tiles can be merged
          }
        }
      }
    }
  }

  return false;
};

GameManager.prototype.tileMatchesAvailable2 = function () {
  var self = this;

  var tile;

  for (var x = 0; x < this.size; x++) {
    for (var y = 0; y < this.size; y++) {
      tile = this.grid2.cellContent2({ x: x, y: y });

      if (tile) {
        for (var direction = 6; direction < 10; direction++) {
          var vector = self.getVector2(direction);
          var cell   = { x: x + vector.x, y: y + vector.y };

          var other  = self.grid2.cellContent2(cell);

          if (other && other.value === tile.value) {
            return true; // These two tiles can be merged
          }
        }
      }
    }
  }

  return false;
};


GameManager.prototype.positionsEqual = function (first, second) {
  return first.x === second.x && first.y === second.y;
};
