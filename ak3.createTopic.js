const Kafka = require('kafka-node');

let client = new Kafka.KafkaClient();

let topicToCreate = [{
  topic: 'ak3.consumer.groups',
  partitions: 4,
  replicationFactor: 1
}];

client.createTopics(topicToCreate, (err, result) => {
  if(err) throw console.log(err);
  console.log(result);
});