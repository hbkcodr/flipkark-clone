import { Request, Response } from "express";
import bcrypt from "bcrypt";
import User from "../models/User";
import { generateActiveToken } from "../config/generateTokens";

export const Auth = {
  register: async (req: Request, res: Response) => {
    const { name, email, phone, password } = req.body;
    const user = await User.findOne({ email, phone });
    if (user) {
      return res
        .status(400)
        .json({ msg: "Email or Phone Number already exist" });
    }
    try {
      // Encrypt password
      const hashedPassword = await bcrypt.hash(password, 12);

      // Create new User
      const newUser = {
        name,
        email,
        phone,
        password: hashedPassword,
      };

      // Generate active token
      const activeTokens = generateActiveToken(newUser);

      res.json({
        status: "OK",
        msg: "Registered successfully",
        data: newUser,
        activeTokens,
      });
    } catch (error: any) { return res.status(500).json({msg: error.message}) }
  },
};
