// require fs, util.
const fs = require('fs');
const util = require('util');

// promisify readfile.
const readfile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

/** 
 * AHUtilities contains the global utilities for every class and therefore is the base class.
 */
class AHUtilities {
  /**
   * Sanitize method.
   * Purpose: To sanitize a users input to avoid XSS and/or SQL/Data Injection.
   * @param {*} str 
   */
  sanitize(str) {
    str = str.replace(/[^a-z0-9áéíóúñü \.,_-]/gim, "");
    return str.trim();
  }
}

class AHDataEngine extends AHUtilities {
  // class requires a datafile to read from when initialising.
  constructor(datafile, contactfile) {
    super();
    this.dataFile = datafile;
    this.contactfile = contactfile;
  }
/**
 * Purpose: Write JSON data to a defined file this.contactfile.
 * @param {*} json 
 */
  writeContact(json) {
    return new Promise(async (resolve, reject) => {
      try {
        const contactData = await readfile(this.contactfile, 'utf8');
        const newContact = {
            fullName: this.sanitize(json.fullName),
            email: json.email.trim(),
            tNum: this.sanitize(json.tele),
            message: this.sanitize(json.msg)
            };
        let c = JSON.parse(contactData);
        c.contacts.push(newContact);
        c = JSON.stringify(c);
        await writeFile(this.contactfile, c).then(() => {
          resolve();
        });
      } catch(err) {
        reject(err);
      }
    });
  }
/**
 * Purpose: get data from data file.
 */
  async getData() {
    const data = await readfile(this.dataFile, 'utf8');
    return !data ? [] : JSON.parse(data);
  }
/**
 * Purpose: get data from contact data file.
 */
  async getCData() {
    const cData = await readfile(this.contactfile, 'utf8');
    return !cData ? [] : JSON.parse(cData);
  }

/**
 * Purpose: get a list of models from the data file.
 */ 
  async getModels() {
    const data = await this.getData();
    return data.vehicles.map(model => {
      return {id: model.id, name: model.vehName, price: model.vehPrice, imageURL: model.vehImg, category: model.vehCategory, shortDesc: model.shortText};
    });
  }
}

class AHManage extends AHDataEngine {
  constructor(datafile, contactfile) {
    super(datafile, contactfile);
  }
  /**
  * Purpose: get a list of models based off of a popular models array.
  */ 
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
/**
* Purpose: get details about a vehicles by specific ID.
* @param {Number} id
*/ 
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
  /**
   * Purpose: get a list of models within a specific category.
   * @param {String} cat 
   */
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
  /**
  * Purpose: prepare data to be written to the contact file.
  * @param {*} data
  */ 
  writeContactToFile(data) {
    return new Promise(async (resolve, reject) => {
      this.writeContact(data).then(() => {
        resolve();
      }).catch(error => {
        reject(error);
      });
    });
  }

  /**
   * Purpose: get all contacts within the contact file.
   */
  async getAllContacts() {
    const cData = await this.getCData();
    return cData.contacts.map(contact => {
      return {fullName: contact.fullName, email: contact.email, telephone: contact.tNum, message: contact.message};
    });
  }
}

module.exports = { AHManage };