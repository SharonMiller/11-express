const memory = require('../storage/memory.js');
const filesystem = require('../storage/filesystem.js');

let dataStorageModule = {};

switch (process.env.STORAGE) {

case 'filesystem':
  console.log('in filesystem');
  dataStorageModule = filesystem;
  break;
default:
  dataStorageModule = memory;
  break;
}
export default dataStorageModule;

