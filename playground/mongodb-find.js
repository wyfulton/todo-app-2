// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('unable to connect');
  }
  console.log('connected to MongoDB server');
  //
  // db.collection('Todos').find({
  //   _id: new ObjectID('58e45521723fe735f7842cd9')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('unable to fetch todos', err);
  // })
  //
  // db.collection('Todos')
  //   .find({
  //       _id: new ObjectID('58e45521723fe735f7842cd9')
  //     }).count()
  //   .then((count) => {
  //       console.log(`Todos count: ${count}`);
  //     }, (err) => {
  //       console.log('unable to fetch todos', err);
  //   })

  db.collection('Users')
    .find({name: 'Will'})
    .toArray()
    .then((doc) => {
        console.log(JSON.stringify(doc, undefined, 2));
    });

  db.close();
});
