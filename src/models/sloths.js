'use strict';

import storage from '../lib/storage/data-store';
import uuid from 'uuid/v1';

class Sloths {
  constructor(name, age) {
    this.id = uuid();
    this.name = name || '';
    this.age = age || '';
  }

  save() {
    return storage.save(this);
  }
  get(id){
    return storage.fetchOne(id);
  }

}

export default Sloths;

