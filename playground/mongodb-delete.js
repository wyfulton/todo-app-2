const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('unable to connect');
  }
  console.log('connected to MongoDB server');

// // Delete many
//   db.collection('Todos').deleteMany({text: 'Another todo'}).then((result) => {
//     console.log(result);
//   })

// // Delete one
//   db.collection('Todos').deleteOne({text: 'My todo'}).then((result) => {
//     console.log(result);
//   })

// Find one and Delete
// db.collection('Todos').findOneAndDelete({completed: true}).then((result) => {
//   console.log(result);
// })

// db.collection('Users').deleteMany({name: 'Will'}).then((result) => {
//   console.log(result);
// })

db.collection('Users').findOneAndDelete({
  _id: new ObjectID("58e459cd679d783665d69aaf")
}).then((result) => {
  console.log(result);
})

  db.close();
});
