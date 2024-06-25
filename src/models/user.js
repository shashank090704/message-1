import mongoose from "mongoose";
import message from "./message";

const userscheme = new mongoose.Schema({

username : {
  type : String,
  require : [true , "please provide a username"],
  unique : true
},
bio:{
  type : String,
  default: "no bio",
}
,
email : {
  type : String,
  require: [ true , "please provide a email"],
  unique: true
},
password : {
  type : String,
  require : [true , "please provide password"]
},
isverified : {
  type : Boolean,
  default : false
},
isaccepting: {
  type : Boolean,
  default : false
},
message:[ {
  type :  mongoose.Schema.Types.ObjectId,
  ref : 'message'
}],
dp :String,
forgotpasswordtoken : String,
forgorpasswordexpiry : Date,
verifytoken : String,
verifytokenexpiry : Date



})

const Users =  mongoose.models.user || mongoose.model("user" , userscheme )

export default Users;