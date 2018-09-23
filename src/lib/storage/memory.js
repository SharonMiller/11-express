'use strict';

const storage = {};

const database = {};

storage.save = (data) => {

  return new Promise((resolve, reject) => {
    if (data.id) {
      database[data.id] = data;
      resolve (database[data.id]);
    }
    else { reject(`${data.id} not found`); }
  });
};
storage.fetchOne = (id) => {
  
  return new Promise ((resolve, reject) => {
    if (!database[id]) {reject(`Error: ${id} not found`);}
    resolve(database[id]);
  });
};

storage.delete = (id) => {
  
  return new Promise((resolve, reject) => {
    if (!database[id]) {reject(`${id} not found`);} 
    else {  
      delete database[id];
      resolve(`resource: ${id} has been deleted`);
    }
  });
};

export default storage;