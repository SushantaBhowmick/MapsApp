const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({
    username:{
        type: String,
        require:true,
        min:3,
        max:20,
        unique:true,
    },
    email:{
        type: String,
        require:true,
        max:50,
        unique:true,
    },
    password:{
        type: String,
        require:true,
        min:6
    },

},{timestamps:true}
);

userSchema.pre("save",async function(next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password,10)
    }
    next();
})

userSchema.methods.matchPassword = async function(password){
    return await bcrypt.compare(password,this.password)
}

module.exports = mongoose.model("Users",userSchema);