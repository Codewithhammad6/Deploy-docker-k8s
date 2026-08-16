import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken"

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
email: {
  type: String,
  required: [true, "Email is required"],
  validate: {
    validator: function (v) {
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
    },
    message: (props) => `${props.value} is not a valid email!`,
  },
  unique: true,
},
  password: {
    type: String,
    select: false,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least 6 characters long"],
    maxlength: [32, "Password cannot exceed 32 characters"],
  },
  verified: {
    type: Boolean,
    default: false,
  },
  verificationToken:String,
  amount:{
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Hash Password before saving
userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 10);
});


// Compare Password
userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign(
      {id: this._id}, 
      process.env.JWT_SECRET_KEY || 'fallback_secret', // Add fallback
      {
        expiresIn: process.env.JWT_EXPIRE || '7d' // Default 7 days
      }
    );
    return token;
};
//  Generate a 5-digit verification code
userSchema.methods.generateCode = function () {
  const code = Math.floor(10000 + Math.random() * 90000).toString();
  this.verificationToken = code;
  return code;
};



const User = mongoose.model("User", userSchema);
export default User;
