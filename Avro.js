const fs = require('fs');
const Avro = require('avro-js');

// let type = Avro.parse('./Avro/1-customer-solution.avsc');
// console.log(type);

// let costomer = {
//   first_name: 'Steve',
//   last_name: 'Lin',
//   age: 26,
//   height: 176.9,
//   weight: 80,
//   automated_email: true
// };

// let ValidateStatus = type.isValid(costomer);
// console.log(ValidateStatus);


fs.readFile('./Pet.avro', (err, data) => {
  if(err) throw console.log(err);

  let schema = Avro.parse('./Avro/Pet.avsc');
  let obj = schema.fromBuffer(data);

  console.log(obj);
  console.log(schema.isValid(obj));
})