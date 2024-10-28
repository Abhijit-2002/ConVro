import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../Utils/generateToken.js";
//import user from "../models/user.model.js";
export const signup = async (req, res) => {
  // console.log("Signup page");
  // res.send("SignUp user");
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "passwords dont match" });
    }

    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ error: "username already exists" });
    }

    // Hash Password here
    const salt = await bcryptjs.genSalt(12);
    const hashedpassword = await bcryptjs.hash(password, salt);
    //const hashedpassword = await bcrypt.hash(password,12);

    //

    //const boyprofilepic = `https://avatar-placeholder.iran.liara.run/`
    const boyprofilepic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlprofilepic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newuser = new User({
      fullName,
      username,
      password: hashedpassword,
      gender,
      profilepic: gender === "male" ? boyprofilepic : girlprofilepic,
    });

    if (newuser) {
      //generate JWT token here
      generateTokenAndSetCookie(newuser._id, res);

      await newuser.save();
      res.status(201).json({
        _id: newuser._id,
        fullName: newuser.fullName,
        username: newuser.username,
        profilepic: newuser.profilepic,
      });
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }
  } catch (error) {
    console.log("error in signup controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const login = async (req, res) => {
  // res.send("LogInUser");
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const ispasswordCorrect = await bcryptjs.compare(
      password,
      user?.password || ""
    );
    if (!user || !ispasswordCorrect) {
      return res.status(400).json({ error: "Invalid Credentials" });
    } else {
      generateTokenAndSetCookie(user._id, res);
    }

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilepic: user.profilepic,
    });
  } catch (error) {
    console.log("error in LogIn controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const logout = async (req, res) => {
  // res.send("LogOUT user");
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.log("Error in logout controler", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
