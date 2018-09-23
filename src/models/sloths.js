'use strict';

import storage from '../lib/storage/filesystem';
import uuid from 'uuid/v1';

class Sloths {
  constructor(name, age) {
    this.id = uuid();
    this.name = name || '';
    this.age = age || '';
  }

  save() {
    (console.log('I am in save'));
    return storage.save(this);
  }
  static get(id){
    console.log('I am in static get');
    return storage.get(id);
  }
  static delete(id, res){
    console.log('I am in delete on sloths.js');
    return storage.delete(id, res);
  }
}

export default Sloths;

