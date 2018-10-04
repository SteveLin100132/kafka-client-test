const Kafka = require('kafka-node');
const Consumer = Kafka.Consumer;

let client = new Kafka.Client();
let consumer = new Consumer(client, [
  { topic: 'ak3.consumer.groups', partition: 0 },
  { topic: 'ak3.consumer.groups', partition: 1 },
  // { topic: 'ak3.consumer.groups', partition: 2 },
  // { topic: 'ak3.consumer.groups', partition: 3 }
  // { topic: 'ak3.consumer.groups' }
], {
    autoCommit: false,
    groupId: 'ak3.group1'
  });

consumer.on('message', (msg, err) => {
  if (err) throw console.log(err);
  console.log(msg);
})