import {catchAsyncError} from '../middleware/catchAsyncError.js'
import User from '../models/userModel.js';
import ErrorHandler from '../middleware/error.js';
import dotenv from 'dotenv';
dotenv.config();
import nodemailer from "nodemailer";
import { sendToken } from '../utils/sendToken.js';

// REGISTER
export const registerUser = catchAsyncError(async (req, res, next) => {


const { name, email, password, id} = req.body;

if (!name || !email || !password || !id) {
  return next(new ErrorHandler("All fields required", 400));
}
console.log(name, email, password,"backend")
const emailRegex = /^\S+@\S+\.\S+$/;
if (!emailRegex.test(email)) {
  return next(new ErrorHandler("Invalid email format", 400));
}


  if (id !== process.env.TEACHER_CODE){
  return next(new ErrorHandler("ID must be exactly verify you are a teacher", 400));

  }



// Check if email exists at all
let existingUser = await User.findOne({ email });

// If already verified, block
if (existingUser && existingUser.verified) {
  return next(new ErrorHandler("Email is already used.", 400));
}

// If exists but not verified → just update token + password and resend
if (existingUser && !existingUser.verified) {
  existingUser.name = name;
  existingUser.password = password; // will be hashed by pre-save
  const verificationToken = existingUser.generateCode();
  await existingUser.save();

  await sendVerificationEmail(existingUser.email, verificationToken);

  return res.status(200).json({
    success: true,
    message: "Verification code resent to your email.",
  });
}

// Otherwise, create new user
const newUser = new User({ name, email, password});
const verificationToken = newUser.generateCode();
await newUser.save();
await sendVerificationEmail(newUser.email, verificationToken);

res.status(201).json({
  success: true,
  message:
    "User registered successfully. Please check your email for verification.",
});

});

// SEND VERIFICATION EMAIL
const sendVerificationEmail = async (email, verificationToken) => {
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT),
  secure: process.env.SMTP_PORT == 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const mailOptions = {
  from: process.env.MAIL_FROM || `School <support@gmail.com>`,
  to: email,
  bcc: process.env.SMTP_USER,
  subject: "✨ Verify your email address",
 html: `
     <div style="font-family: Arial, sans-serif; background-color:#f4f4f4; padding:30px;">
  <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:10px; box-shadow:0 4px 12px rgba(0,0,0,0.1); padding:25px;">
    
    <!-- Header -->
    <div style="text-align:center; margin-bottom:25px;">
      <h1 style="color:#4199c7; margin:0; font-size:32px; font-weight:700;">School</h1>
      <p style="color:#555; font-size:16px; margin-top:6px; font-weight:500;">Secure Email Verification</p>
    </div>

    <!-- Greeting -->
    <p style="font-size:16px; color:#333; margin-bottom:10px;">Hello,</p>
    <p style="font-size:15px; color:#555; line-height:1.7; margin-top:0;">
      We received a request to verify your email address. Please use the following
      <strong style="color:#4199c7;">Valid within Ten Minutes</strong>
      <strong style="color:#4199c7;">verification code</strong>:
    </p>

    <!-- Verification Code -->
    <div style="text-align:center; margin:35px 0;">
      <span style="display:inline-block; background:#4199c7; color:#ffffff; font-size:24px; font-weight:bold; letter-spacing:3px; padding:15px 35px; border-radius:8px;">
        ${verificationToken}
      </span>
    </div>

    <!-- Note -->
    <p style="font-size:14px; color:#777; line-height:1.6; margin-top:0;">
      If you didn’t request this, you can safely ignore this email.
    </p>

    <!-- Footer -->
    <hr style="margin:25px 0; border:none; border-top:1px solid #eee;">
    <p style="font-size:13px; color:#999; text-align:center; margin:0;">
      &copy; ${new Date().getFullYear()} School. All rights reserved.
    </p>
  </div>
</div>

    `,
  text: `Welcome to School! Please verify your email: ${verificationToken}`,
};


  await transporter.sendMail(mailOptions);
};


















export const verifyEmail = catchAsyncError(async (req, res, next) => {
    const {code} = req.body;

  // Find user with given token
  const user = await User.findOne({ verificationToken: code });

  if (!user) {
    return next(new ErrorHandler("Invalid verification token", 400));
  }
   if (user.verificationToken !== code) {
    return next(new ErrorHandler("Invalid verification token", 400));
  }
    user.verified = true;
    user.verificationToken = undefined;
    await user.save({ validateBeforeSave: false });


sendToken(user, 200, "successfully.", res);
});




// LOGIN
export const login = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ErrorHandler("All fields required", 400));
  }

  // Email format check
  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
    return next(new ErrorHandler("Invalid email format", 400));
  }

  // Only login verified users
  let user;
  try {
    user = await User.findOne({ email, verified: true }).select(
      "+password"
    );
  } catch (dbError) {
    console.error('Database error during login:', dbError);
    return next(new ErrorHandler("Database connection error. Please try again.", 503));
  }

  if (!user) {
    return next(
      new ErrorHandler("Invalid credentials or email not verified", 400)
    );
  }

  // check password
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    return next(new ErrorHandler("Invalid password ", 400));
  }

  sendToken(user, 200, "User logged in successfully.", res);
});



export const getUserProfile = catchAsyncError(async (req, res, next) => {
    const user = req.user;
    res.status(200).json({
        success: true,
        user,
    });
});



export const logout = catchAsyncError(async (req, res, next) => {
  // Detect environment properly - check multiple sources for production
  const isProduction = process.env.NODE_ENV === 'production' || process.env.VERCEL === '1';
  
  console.log('Logout - Environment:', process.env.NODE_ENV, 'IsProduction:', isProduction);
  
  res.cookie("tokenSchool", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? 'none' : 'lax',
    path: '/'
  });
  
  res.status(200).json({
    success: true,
    message: "Logged out successfully.",
  });
});



export const forgotPassword = catchAsyncError(async (req, res, next) => {
    const {email} = req.body;
    const user = await User.findOne({email,verified:true});
    if(!user){
        return next(new ErrorHandler("User not found",400))
    };
   
    const verificationToken = await user.generateCode();
    user.verificationToken =verificationToken;
    
    // send verification email
    await sendVerificationEmailForget(user.email, verificationToken);

    await user.save()

res.status(200).json({
    success:true,
    message:"Verify your email"
})

});



// SEND VERIFICATION EMAIL
const sendVerificationEmailForget = async (email, verificationToken) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

const mailOptions = {
  from: process.env.MAIL_FROM || `School <support@gmail.com>`,
  to: email,
  cc: process.env.SMTP_USER,

  subject: "✨ Verify your email address",
 html: `
     <div style="font-family: Arial, sans-serif; background-color:#f4f4f4; padding:30px;">
  <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:10px; box-shadow:0 4px 12px rgba(0,0,0,0.1); padding:25px;">
    
    <!-- Header -->
    <div style="text-align:center; margin-bottom:25px;">
      <h1 style="color:#4199c7; margin:0; font-size:32px; font-weight:700;">School</h1>
      <p style="color:#555; font-size:16px; margin-top:6px; font-weight:500;">Secure Email Verification</p>
    </div>

    <!-- Greeting -->
    <p style="font-size:16px; color:#333; margin-bottom:10px;">Hello,</p>
    <p style="font-size:15px; color:#555; line-height:1.7; margin-top:0;">
      We received a request to verify your email address. Please use the following
      <strong style="color:#4199c7;">verification code</strong>:
    </p>

    <!-- Verification Code -->
    <div style="text-align:center; margin:35px 0;">
      <span style="display:inline-block; background:#4199c7; color:#ffffff; font-size:24px; font-weight:bold; letter-spacing:3px; padding:15px 35px; border-radius:8px;">
        ${verificationToken}
      </span>
    </div>

    <!-- Note -->
    <p style="font-size:14px; color:#777; line-height:1.6; margin-top:0;">
      If you didn’t request this, you can safely ignore this email.
    </p>

    <!-- Footer -->
    <hr style="margin:25px 0; border:none; border-top:1px solid #eee;">
    <p style="font-size:13px; color:#999; text-align:center; margin:0;">
      &copy; ${new Date().getFullYear()} School. All rights reserved.
    </p>
  </div>
</div>

    `,
  text: `Welcome to School! Please verify your email: ${verificationToken}`,
};


  await transporter.sendMail(mailOptions);
};






export const verifyForgot = catchAsyncError(async (req, res, next) => {
    const {code} = req.body;

  // Find user with given token
  const user = await User.findOne({ verificationToken: code })

  if (!user) {
    return next(new ErrorHandler("Invalid verification token", 400));
  }
  if (user.verificationToken !== code) {
    return next(new ErrorHandler("Invalid verification token", 400));
  }
 
  res.status(200).json({ message: "Email verified successfully" });

});


export const newPassword = catchAsyncError(async (req, res, next) => {
    const {password,code} = req.body;
    const user = await User.findOne({verificationToken:code});
    if(!user){
        return next(new ErrorHandler("Invalid token",400))
    };
    user.password = password;
    user.verificationToken = undefined;
    await user.save();

    res.status(200).json({
        success:true,
        message:"Password changed successfully."
    });
});

export const updateAmount = catchAsyncError(async (req, res, next) => {
  const { amount } = req.body;
console.log("backend",amount)
  if (amount === undefined) {
    return next(new ErrorHandler("Amount is required", 400));
  }

  const user = await User.findById(req.user._id);

  if (!user) {
    return next(new ErrorHandler("User not found", 404));
  }

  // make sure amount is number
  const newAmount = Number(amount);

  if (isNaN(newAmount)) {
    return next(new ErrorHandler("Invalid amount", 400));
  }

  user.amount = (user.amount || 0) + newAmount;

  await user.save();

  res.status(200).json({
    success: true,
    message: "Amount added successfully",
    user
  });
});



export const updateCash = catchAsyncError(async (req, res, next) => {
  const { amount } = req.body;

  if (amount === undefined) {
    return next(new ErrorHandler("Amount is required", 400));
  }

  const user = await User.findById(req.user._id);

  if (!user) {
    return next(new ErrorHandler("User not found", 404));
  }

  // make sure amount is number
  const newAmount = Number(amount);

  if (isNaN(newAmount)) {
    return next(new ErrorHandler("Invalid amount", 400));
  }

  user.amount =  newAmount;

  await user.save();

  res.status(200).json({
    success: true,
    message: "Amount added successfully",
    user
  });
});




export const getAllUsers = catchAsyncError(async (req, res, next) => {
  const users = await User.find();

  if (users.length === 0) {
    return next(new ErrorHandler("No users found", 404));
  }

  res.status(200).json({
    success: true,
    users,
  });
});



//      GET SINGLE USER 
export const getUserById = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(new ErrorHandler("User not found", 404));
  }

  res.status(200).json({
    success: true,
    user,
  });
});



export const deleteUser = catchAsyncError(async (req, res, next) => {

  const user = await User.findById(req.params.id);

  if (!user) {
    return next(new ErrorHandler("User not found", 404));
  }

  await User.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
    message: "User deleted successfully",
  });
});







export const updateAmountInvite = catchAsyncError(async (req, res, next) => {
  const { amount, email } = req.body;
  
  console.log("backend amount:", amount);
  console.log("backend email:", email);

  // Validation
  if (amount === undefined || amount === null) {
    return next(new ErrorHandler("Amount is required", 400));
  }

  if (!email) {
    return next(new ErrorHandler("Email is required", 400));
  }

  // Find user by email (not by id)
  const user = await User.findOne({ email });

  if (!user) {
    return next(new ErrorHandler("User not found with this email", 404));
  }

  // Convert amount to number
  const newAmount = Number(amount);

  if (isNaN(newAmount) || newAmount <= 0) {
    return next(new ErrorHandler("Please enter a valid positive amount", 400));
  }

  // Add new amount to existing amount
  user.amount = (user.amount || 0) + newAmount;

  await user.save();

  res.status(200).json({
    success: true,
    message: `Amount added successfully! New balance: ${user.amount}`,
    user: {
      id: user._id,
      email: user.email,
      amount: user.amount
    }
  });
});