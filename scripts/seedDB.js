const mongoose = require('mongoose');
const db = require('../models');

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  'mongodb://localhost/liveTuneUsers'
);

const userSeed = [
  {
    email: 'payton@aol.com',
    username: 'Payton',
    password: 'Ninanina14',
    bio: 'Welcome to my page!',
    events: [
      {
        id: 'vvG1zZpnQj77KL',
        name: 'East. Conf. First Round Gm 6: Knicks at Hawks',
        image: 'https://s1.ticketm.net/dam/a/ae2/5beb62d8-2c29-4c5c-aa7d-c7513e229ae2_1340121_CUSTOM.jpg',
        link: 'https://www.ticketmaster.com/east-conf-first-round-gm-6-atlanta-georgia-06-04-2021/event/0E005AA69C1044DF',
        date: '2021-06-04',
      },
      {
        id: 'vvG1zZpnQ7KL',
        name: 'Another Event',
        image: 'https://s1.ticketm.net/dam/a/ae2/5beb62d8-2c29-4c5c-aa7d-c7513e229ae2_1340121_CUSTOM.jpg',
        link: 'https://www.ticketmaster.com/east-conf-first-round-gm-6-atlanta-georgia-06-04-2021/event/0E005AA69C1044DF',
        date: '2021-06-04',

      }]
  }];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });