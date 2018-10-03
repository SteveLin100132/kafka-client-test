var kafka = require('kafka-node');
var client = new kafka.KafkaClient();
 
var topicsToCreate = [{
  topic: 'wks.dpm.p1.kpi',
  partitions: 3,
  replicationFactor: 1
}, {
  topic: 'topic4',
  partitions: 3,
  replicationFactor: 1
}];
 
client.createTopics(topicsToCreate, (error, result) => {
  // result is an array of any errors if a given topic could not be created 
});