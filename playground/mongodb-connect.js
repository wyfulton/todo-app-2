// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('unable to connect');
  }
  console.log('connected to MongoDB server');
  db.collection('Todos').insertOne({
    text: 'Another todo',
    completed: true
  }, (err, result) => {
    if (err) {
      return console.log('unable to instert todo', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  })

  db.collection('Users').insertOne({
    name: 'Tori',
    age: 25,
    location: 'Denver'
  }, (err, result) => {
    if (err) {
      return console.log('unable to create user');
    }

    console.log(result.ops);
  });

  db.close();
});
