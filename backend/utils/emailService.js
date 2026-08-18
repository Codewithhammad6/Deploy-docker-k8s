import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

// Initialize Resend with your API key (only if key exists)
let resend = null;
if (process.env.RESEND_API_KEY) {
  resend = new Resend(process.env.RESEND_API_KEY);
  console.log('Resend API initialized');
} else {
  console.log('RESEND_API_KEY not found - Resend email service disabled');
}

// Email templates
const getVerificationEmailHTML = (verificationToken) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: Arial, sans-serif; background-color:#f4f4f4; padding:30px; margin:0;">
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
      If you didn't request this, you can safely ignore this email.
    </p>

    <!-- Footer -->
    <hr style="margin:25px 0; border:none; border-top:1px solid #eee;">
    <p style="font-size:13px; color:#999; text-align:center; margin:0;">
      &copy; ${new Date().getFullYear()} School. All rights reserved.
    </p>
  </div>
</body>
</html>
`;

const getForgotPasswordEmailHTML = (verificationToken) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: Arial, sans-serif; background-color:#f4f4f4; padding:30px; margin:0;">
  <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:10px; box-shadow:0 4px 12px rgba(0,0,0,0.1); padding:25px;">
    <!-- Header -->
    <div style="text-align:center; margin-bottom:25px;">
      <h1 style="color:#4199c7; margin:0; font-size:32px; font-weight:700;">School</h1>
      <p style="color:#555; font-size:16px; margin-top:6px; font-weight:500;">Password Reset Request</p>
    </div>

    <!-- Greeting -->
    <p style="font-size:16px; color:#333; margin-bottom:10px;">Hello,</p>
    <p style="font-size:15px; color:#555; line-height:1.7; margin-top:0;">
      We received a request to reset your password. Please use the following
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
      If you didn't request this, you can safely ignore this email. This code will expire in 10 minutes.
    </p>

    <!-- Footer -->
    <hr style="margin:25px 0; border:none; border-top:1px solid #eee;">
    <p style="font-size:13px; color:#999; text-align:center; margin:0;">
      &copy; ${new Date().getFullYear()} School. All rights reserved.
    </p>
  </div>
</body>
</html>
`;

// Send verification email using Resend
export const sendVerificationEmail = async (email, verificationToken) => {
  if (!resend) {
    console.log('Resend not configured - skipping verification email');
    return { success: false, message: 'Email service not configured' };
  }
  
  console.log('Sending verification email to:', email);
  console.log('Using Resend API...');

  try {
    const data = await resend.emails.send({
      from: process.env.MAIL_FROM || 'School <onboarding@resend.dev>',
      to: email,
      subject: "✨ Verify your email address",
      html: getVerificationEmailHTML(verificationToken),
    });

    console.log('Verification email sent successfully!', data);
    return data;
  } catch (error) {
    console.error('Failed to send verification email:', error.message);
    throw error;
  }
};

// Send forgot password email using Resend
export const sendForgotPasswordEmail = async (email, verificationToken) => {
  if (!resend) {
    console.log('Resend not configured - skipping forgot password email');
    return { success: false, message: 'Email service not configured' };
  }
  
  console.log('Sending forgot password email to:', email);
  console.log('Using Resend API...');

  try {
    const data = await resend.emails.send({
      from: process.env.MAIL_FROM || 'School <onboarding@resend.dev>',
      to: email,
      subject: "🔐 Reset Your Password",
      html: getForgotPasswordEmailHTML(verificationToken),
    });

    console.log('Forgot password email sent successfully!', data);
    return data;
  } catch (error) {
    console.error('Failed to send forgot password email:', error.message);
    throw error;
  }
};

// Fallback nodemailer transporter for traditional SMTP
import nodemailer from 'nodemailer';

export const createNodemailerTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: parseInt(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    connectionTimeout: 10000,
    socketTimeout: 10000,
  });
};

export default { sendVerificationEmail, sendForgotPasswordEmail, createNodemailerTransporter };

