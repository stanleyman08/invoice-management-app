const remote = require('electron').remote;

const app = remote.app;
const path = require('path');
const Datastore = require('nedb-promises');

const dbFactory = fileName =>
  Datastore.create({
    filename: `${
      process.env.NODE_ENV === 'dev' ? '.' : app.getPath('userData')
    }/data/${fileName}`,
    timestampData: true,
    autoload: true
  });

const db = {
  schools: dbFactory('schools.db')
};

module.exports = db;
