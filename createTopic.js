var kafka = require('kafka-node');
var client = new kafka.KafkaClient();
 
var topicsToCreate = [{
  topic: 'ak5.kafka',
  partitions: 3,
  replicationFactor: 1
}];
 
client.createTopics(topicsToCreate, (error, result) => {
  if(error) throw console.log(error);
  console.log(result);
});