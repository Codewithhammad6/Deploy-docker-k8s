export const sendToken = (user, statusCode, message, res) => {
  const token = user.generateAuthToken();
  
  const cookieExpireDays = parseInt(process.env.COOKIE_EXPIRE) || 7;
  
  const isProduction = process.env.NODE_ENV === 'production' || process.env.VERCEL === '1';
  
  console.log('sendToken - Environment:', process.env.NODE_ENV, 'IsProduction:', isProduction);
  
  res
    .status(statusCode)
    .cookie("tokenSchool", token, {
      expires: new Date(Date.now() + cookieExpireDays * 24 * 60 * 60 * 1000),
      httpOnly: true,
      secure: isProduction, // true on Vercel
      sameSite: isProduction ? 'none' : 'lax', // Cross-domain support
      path: '/'
    })
    .json({
      success: true,
      message,
      token,
      user,
    });
};
