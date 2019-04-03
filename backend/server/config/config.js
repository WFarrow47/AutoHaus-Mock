const path = require('path');

module.exports = {
  development: {
    siteName: "AutoHaus (Dev)",
    data: {
      models: path.join(__dirname, "../data/models.json")
    }
  },
  production: {
    siteName: "AutoHaus",
    data: {
      models: path.join(__dirname, "../data/models.json")
    }
  }
}