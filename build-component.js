const fs = require('fs-extra');
const concat = require('concat');


build = async () =>{
    const files = [
        './dist/BoardGame/runtime.js',
        './dist/BoardGame/polyfills.js',
        './dist/BoardGame/main.js'
      ];

      await fs.ensureDir('game');
      await concat(files, 'game/board-game.js');
}

build();

