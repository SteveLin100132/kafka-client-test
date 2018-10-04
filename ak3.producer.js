const Kafka = require('kafka-node');
const Producer = Kafka.Producer;

let client = new Kafka.KafkaClient({ kafkaHost: 'localhost:9092' });
let producer = new Producer(client);

producer.on('ready', () => {
  let index = 0;
  
  let timer = setInterval(() => {
    let payloads = [{
      topic: 'ak3.consumer.groups',
      messages: 'part 0 message' + index,
      key: 'part 0 key' + index,
      partition: 0
    }, {
      topic: 'ak3.consumer.groups',
      messages: 'part 1 message' + index,
      key: 'part 1 key' + index,
      partition: 1
    }, {
      topic: 'ak3.consumer.groups',
      messages: 'part 2 message' + index,
      key: 'part 2 key' + index,
      partition: 2
    }, {
      topic: 'ak3.consumer.groups',
      messages: 'part 3 message' + index,
      key: 'part 3 key' + index,
      partition: 3
    }];

    producer.send(payloads, (err, data) => {
      if(err) throw console.log(err);
      console.log(data);
    });

    index++;
  }, 3000);
});