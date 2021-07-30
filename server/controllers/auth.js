const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");

//Register Route
exports.register = async (req, res, next) => {
  const { username, email, password } = req.body;

  User.findOne({ email: email }, (error, data) => {
    console.log(error, data);
    if (error) return next(new ErrorResponse("something went wrong", 500));
    if (data) {
      return next(new ErrorResponse("User already exists", 304));
    }

  });
  try {
    const user = await User.create({
      username,
      email,
      password,
    });
    sendToken(user, 201, res);
    // res.status(201).json({
    //   success: true,
    //   token : "23rjedfb",
    // });
  } catch (error) {
    next(error);
  }
};

//login route
exports.login = async (req, res, next) => {
  // res.send("Login Route");
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorResponse("Please provide an email and password", 400));
  }

  try {
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return next(new ErrorResponse("Invalid Credentials", 401));
    }
    const isMatch = await user.matchPasswords(password);
    if (!isMatch) {
      return next(new ErrorResponse("Invalid Credentials", 401));
    }
    sendToken(user, 200, res);
    // console.log(userDetails);
    // console.log(user);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.forgotpassword = async (req, res, next) => {
  // res.send("Forgot password Route");
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return next(new ErrorResponse("Email couldn't be sent", 404));
    }
    const resetToken = user.getResetPasswordToken();
    await user.save();

    const resetUrl = `http://localhost:3000/resetpassword/${resetToken}`;
    // console.log(resetToken);
    const message = `
      <h1>You have requested a password reset </h1>
      <p>Please go  to thislink to reset password</p>
      <a href = ${resetUrl} clicktracking-off> ${resetUrl}</a>
    `;
    try {
      await sendEmail({
        to: user.email,
        subject: "Password reset request",
        text: message,
      });

      res.status(200).json({
        success: true,
        data: "Email sent",
      });
    } catch (error) {
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;

      await user.save();

      return next(new ErrorResponse("Email could not be sent", 500));
    }
  } catch (error) {
    next(error);
  }
};
exports.resetpassword = async (req, res, next) => {
  // res.send("Reset Password Route");
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.resetToken)
    .digest("hex");

  try {
    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });
    if (!user) {
      return next(new ErrorResponse("Invalid reset token", 400));
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();
    res.status(201).json({
      success: true,
      data: "Password reset success",
    });
  } catch (error) {
    next(error);
  }
};

exports.getuserdata = async (req, res, next) => {
  User.find()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("Error:" + err));
};

const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken();
  res.status(statusCode).json({ result: user, token });
};
