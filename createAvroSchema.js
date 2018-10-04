const crypto = require('crypto');
const fs = require('fs');
const Avro = require('avro-js');

let type = Avro.parse({
  name: 'Pet',
  type: 'record',
  fields: [
    { name: 'kind', type: { 
      name: 'Kind', type: 'enum', symbols: ['CAT', 'DOG'] }
    },
    { name: 'name', type: 'string' }
  ]
});

let pet = { kind: 'CAT', name: 'Albert' };
let buf = type.toBuffer(pet); 
let obj = type.fromBuffer(buf);

console.log(buf);
console.log(obj);

let wstream = fs.createWriteStream('Pet');
wstream.write(buf);
wstream.end();