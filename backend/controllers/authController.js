import axios from "axios";
import { oauth2client } from "../utils/googleConfig.js";
import User from "../models/UserModel.js";
import jwt from "jsonwebtoken";

export const googleLogin = async (req, res) => {
  try {
    const { code } = req.query;
    console.log(req.query);
    const googleResponse = await oauth2client.getToken(code);
    oauth2client.setCredentials(googleResponse.tokens);

    const userResponse = await axios.get(`
      https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${googleResponse.tokens.access_token}`);

    console.log(userResponse);
    const { email, name, picture } = userResponse.data;
    let user = await User.findOne({ email });
    if (!user) {
      user = await new User({ email, name, image: picture }).save();
    }

    const { _id } = user;
    const token = jwt.sign({ _id, email }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_TIMEOUT,
    });

    console.log(token);

    return res.status(200).json({
      message: "Login successful",
      token,
      user,
    });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};
