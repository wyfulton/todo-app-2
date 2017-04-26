const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user');

var id = '58ecf7fac85377ab1b3ffcbc';

if(!ObjectID.isValid(id)) {
  console.log('ID not valid');
}

Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos: ', todos);
});

Todo.findOne({_id:id}).then((todos) => {
  console.log("Todos: ", todos);
});

Todo.findById(id).then((todo) => {
  if(!todo){
    return console.log('Id not found');
  }
  console.log(todo)
}).catch((err) => {
  console.log(err);
});

var userId = '58ecf7fac85377ab1b3ffcbc';

if (!ObjectID.isValid(userId)) {
  console.log('user id not valid');
}

User.findById(userId).then((user) => {
  if(!user){
    return console.log('User not found');
  }
  console.log('User: ', user);
}).catch((e) => {
  console.log(e);
});
