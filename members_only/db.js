const mongoose = require('mongoose');

exports.connectMongoose = () => {
    mongoose
    .connect('mongodb://localhost:27017/passport')
    .then(e=> console.log(`connected to mongoDB: ${e.connection.host}`))
    .catch((e) => console.log(e));
}

const userSchema = new mongoose.Schema({
    name : {
        type: String
    },
    username : {
        type: String,
        required: true,
        unique: true
    },
    password : {
        type : String
    }
});

exports.User = mongoose.model("User", userSchema);