const Kafka = require('kafka-node');
const Producer = Kafka.Producer;

const Avro = require('avro-js');

let client = new Kafka.KafkaClient({ kafkaHost: 'localhost:9092' });
let producer = new Producer(client);

let schemaType = Avro.parse('./Avro/1-customer-solution.avsc');

producer.on('ready', () => {
  let index = 0;
  
  let customer = {
    first_name: 'Steve',
    last_name: 'Lin',
    age: 26,
    height: 176.9,
    weight: 80,
    automated_email: true
  };

  let timer = setInterval(() => {
    let buf = schemaType.toBuffer(customer);
    let message = schemaType.fromBuffer(buf);

    console.log(message);

    let payloads = [{
      topic: 'ak5.kafka',
      messages: JSON.stringify(message),
      key: 'customer' + index,
      partition: 0
    }];

    if (schemaType.isValid(message)) {
      producer.send(payloads, (err, data) => {
        if(err) throw console.log(err);
        console.log(data);
      });

      index++;
    }

  }, 3000);
});