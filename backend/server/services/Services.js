// require fs, util.
const fs = require('fs');
const util = require('util');

// promisify readfile.
const readfile = util.promisify(fs.readFile);

class AHDataEngine {
  // class requires a datafile to read from when initialising.
  constructor(datafile) {
    this.dataFile = datafile;
  }

  async getData() {
    const data = await readfile(this.dataFile, 'utf8');
    return !data ? [] : JSON.parse(data);
  }

  async getModels() {
    const data = await this.getData();
    return data.vehicles.map(model => {
      return {id: model.id, name: model.vehName, price: model.vehPrice, imageURL: model.vehImg, category: model.vehCategory, shortDesc: model.shortText};
    });
  }
}

class AHManage extends AHDataEngine {
  constructor(datafile) {
    super(datafile);
  }
  
  async getPopularModels() {
    const data = await this.getData();
    const popular = data.popular;
    let vehicles = [];
    data.vehicles.forEach(model => {
      if(popular.includes(model.id)) {
        let vehicle = {
          id: model.id,
          name: model.vehName,
          price: model.vehPrice,
          imageURL: model.vehImg,
          category: model.vehCategory,
          shortDesc: model.shortText 
        };
        vehicles.push(vehicle);
      }
    });
    return vehicles;
  }

  async getVehicleByID(id) {
    const data = await this.getData();
    let x;
    data.vehicles.forEach(model => {
      if(model.id == id) {
        x = {
          id: model.id,
          name: model.vehName,
          price: model.vehPrice,
          imageURL: model.vehImg,
          category: model.vehCategory,
          shortDesc: model.shortText 
        };
      }
    });
    return x;
  }

  async getCategories(cat) {
    const data = await this.getData();
    let x = [];
    data.vehicles.forEach(model => {
      if (model.vehCategory.toUpperCase() === cat.toUpperCase()) {
        let v = {
          id: model.id,
          name: model.vehName,
          price: model.vehPrice,
          imageURL: model.vehImg,
          category: model.vehCategory,
          shortDesc: model.shortText 
        };
        x.push(v);
      }
    });
    return x;
  }
}

module.exports = { AHManage };