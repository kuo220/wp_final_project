import mongoose from 'mongoose'
const {Schema} = mongoose;

/*const UserSchema = new Schema({
  name: { type: String, required: [true, 'Name field is required.'] },
  chatBoxes: [{ type: mongoose.Types.ObjectId, ref: 'ChatBox' }],
  });

const UserModel = mongoose.model('User', UserSchema);*/

  /******* Message Schema *******/
/*const MessageSchema = new Schema({
  chatBox: { type: mongoose.Types.ObjectId, ref: 'ChatBox' },
  sender: { type: mongoose.Types.ObjectId, ref: 'User' },
  body: { type: String, required: [true, 'Body field is required.'] },
  });

const MessageModel = mongoose.model('Message', MessageSchema);*/

  /******* ChatBox Schema *******/
/*const ChatBoxSchema = new Schema({
  name: { type: String, required: [true, 'Name field is required.'] },
  users: [{ type: mongoose.Types.ObjectId, ref: 'User' }],
  messages: [{ type: mongoose.Types.ObjectId, ref: 'Message' }],
});

const ChatBoxSchema = new Schema({
  name: {
    type: String,
    required:[true, 'Name field is required.']
  },
  messages: [{
    sender: { type: String },
    body : { type: String }, 
  }],
});

const ChatBoxModel = mongoose.model('ChatBox', ChatBoxSchema);*/

const UserSchema = new Schema({
  name: {
    type: String,
    required:[true, 'Name field is required.']
  },
  account: {
    type: String,
    required:[true, 'account field is required.']
  },
  password: {
    type: String,
    required:[true, 'password field is required.']
  },
})
const UserModel = mongoose.model('User', UserSchema);

const RestaurantSchema = new Schema({
  name: {
    type: String,
    required:[true, 'Name field is required.']
  },
  comments: [{
    name: { type: String ,required:[true, 'Name field is required.']},
    person_id: {type: mongoose.Types.ObjectId, ref: 'User',required:[true, 'person_id field is required.']},
    body: { type: String ,required:[true, 'body field is required.']},
    star: { type: Int ,required:[true, 'star field is required.']},
    time: { type: String ,required:[true, 'time field is required.']},
  }],
  information: [{
    name: { type: String ,required:[true, 'Name field is required.']},
    body: { type: String ,required:[true, 'body field is required.']},
  }],
  sprate: [{
    name: { type: String ,required:[true, 'Name field is required.']},
    score: { type: Float ,required:[true, 'score field is required.']},
    people: {type: Int ,required:[true, 'people field is required.']},
  }],
  spTFrate: [{
    name: { type: String ,required:[true, 'Name field is required.']},
    Tnum: { type: Int ,required:[true, 'Tnum field is required.']},
    Fnum: { type: Int ,required:[true, 'Fnum field is required.']},
  }]
})
const RestaurantModel = mongoose.model('Restaurant', RestaurantSchema);

export {UserModel, RestaurantModel};