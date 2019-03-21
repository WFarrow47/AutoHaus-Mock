// require fs, util.
const fs = require('fs');
const util = require('util');

// promisify readfile.
const readfile = util.promisify(fs.readFile);

class AutoHausEngine {
  // class requires a datafile to read from when initialising.
  constructor(datafile) {
    this.dataFile = datafile;
  }

  async getData() {
    const data = await readfile(this.dataFile, 'utf8');
    return !data ? [] : null;
  }
}

module.exports = AutoHausEngine;