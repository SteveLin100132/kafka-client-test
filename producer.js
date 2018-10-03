const kafka = require('kafka-node'),
  Producer = kafka.Producer,
  KeyedMessage = kafka.KeyedMessage;

let client = new kafka.KafkaClient({ kafkaHost: 'localhost:9092' }),
  producer = new Producer(client)

let i40_event = {
    evt_ns: 'wks.dpm.p1',
    evt_tp: 'kpi',
    evt_dt: Math.round(new Date().getTime() / 1000),
    evt_key: 'xxx-xxx-xxx',
    evt_pubBy: 'nodejs:APID' 
  },

  evt_data = {
    id: 'xxx-xxx-xxx',
    kpi_name: 'OEE',
    kpi_value: 0.8,
    kpi_uom: 'Percent',
    update_time: Math.round(new Date().getTime() / 1000)
  },

  km = new KeyedMessage(JSON.stringify(i40_event), JSON.stringify(evt_data)),
  payloads = [
    { topic: 'wks.dpm.p1.kpi', messages: km, partition: 0 },
    { topic: 'topic4', messages: "This topic4 partition 0", partition: 0 },
    { topic: 'topic4', messages: "This topic4 partition 1", partition: 1 },
  ];

producer.on('ready', function () {
  producer.send(payloads, function (err, data) {
    if (err) throw console.log(err);
    console.log(data);
  });
  
  // setInterval(() => {
  //   producer.send(payloads, function (err, data) {
  //     if(err) throw console.log(err);
  //     console.log(data);
  //   });
  // }, 1000);
});

producer.on('error', function (err) { 
  console.log(err);
})