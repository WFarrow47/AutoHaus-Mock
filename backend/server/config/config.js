const path = require('path');

module.exports = {
  development: {
    siteName: "AutoHaus (Dev)",
    data: {
      models: path.join(__dirname, "../data/models.json"),
      contacts: path.join(__dirname, "../data/contacts.json")
    }
  },
  production: {
    siteName: "AutoHaus",
    data: {
      models: path.join(__dirname, "../data/models.json"),
      contacts: path.join(__dirname, "../data/contacts.json")
    }
  }
}