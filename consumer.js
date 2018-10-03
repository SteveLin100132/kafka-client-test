const kafka = require('kafka-node'),
  Consumer = kafka.Consumer,
  client = new kafka.Client(),
  consumer = new Consumer(client, [
    { topic: 'wks.dpm.p1.kpi', partition: 0 },
    { topic: 'topic4', partition: 0 },
    { topic: 'topic4', partition: 1 },
    { topic: 'topic4', partition: 2 },
  ], {
    autoCommit: false,
    groupId: 'Steve-Y-Lin',
    fromOffset: false,
  });

consumer.on('message', (message, err) => {
  if(err) throw console.log(err);
  console.log(message);
});