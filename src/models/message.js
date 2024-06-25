import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  content : {
     type : String,
     require: true
  },
  date :{
    type : Date,
    default: Date.now()
  }
,
user : {
  type :  mongoose.Schema.Types.ObjectId,
  ref : 'user'
}
    
});

const message = mongoose.models.message || mongoose.model('message', messageSchema);

export default message;