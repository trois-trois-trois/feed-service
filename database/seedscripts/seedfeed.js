/* eslint-disable func-names */



const faker = require('faker');
// const database = require('../Models/FeedDB.js')
const db = require('../Models/FeedDB.js');


const insertRamsFeed = function () {
  const feed = [];

  for (let i = 0; i < 10000; i += 1) {
    const item = {
      author: faker.name.findName(),
      authorphoto: faker.image.imageUrl(),
      title: faker.random.words(),
      bigphoto: faker.image.imageUrl(),
      smallphoto: faker.image.imageUrl(),
      newsfeed: faker.lorem.paragraph(),
      videoclip: 'https://www.youtube.com/embed/mYXu1xeiYKA',
    };
    console.log('creating record', item, i);
    feed.push(item);
  }
  db.FeedDB.insertMany(feed)
    .then(() => db.db.close())
    .then(console.log('connection closed'))
    .catch(err => console.log(err));
};

insertRamsFeed();
