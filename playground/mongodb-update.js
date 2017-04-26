const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('unable to connect');
  }
  console.log('connected to MongoDB server');

  // db.collection('Todos')
  //   .findOneAndUpdate({
  //     _id: new ObjectID('58e57ebf4f21344396a86b8d'
  //   )}, {
  //     $set: {
  //       completed: true
  //     }
  //   }, {
  //     returnOriginal: false
  //   })
  //   .then((result) => {
  //     console.log(result);
  //   });

  db.collection('Users')
    .findOneAndUpdate({
      _id: new ObjectID('58e57ebf4f21344396a86b8e')
    }, {
      $set: {
        name: "Will"
      },
      $inc: {
        age: 1
      }
    }, {
      returnOriginal: false
    })
    .then((result) => {
      console.log(result);
    });

  db.close();
});
