const kafka = require('kafka-node'),
  Consumer = kafka.Consumer,
  client = new kafka.Client(),
  consumer = new Consumer(client, [
    { topic: 'wks.dpm.p1.kpi', partition: 0 },
    { topic: 'test', partition: 0 },
    { topic: 'topic1' },
    { topic: 'topic2' },
    { topic: 'topic4', partition: 1 }
  ], {
    autoCommit: false
  });

// client.loadMetadataForTopics(['test']);

consumer.on('message', (message) => {
  console.log(message);
});