import { Request, Response, NextFunction } from "express";

export const validateRegister = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, email, phone, password } = req.body;

  // Name
  if (!name) {
    return res.status(400).json({ msg: "Please add your name" });
  } else if (name.length > 200) {
    return res.status(400).json({ msg: "Your name is up to 20 chars long" });
  }

  // Email
  if (!email) {
    return res.status(400).json({ msg: "Please add your email" });
  } else if (!validateEmail(email)) {
    return res
      .status(400)
      .json({ msg: "You must provide a valid email address" });
  }
  // Phone
  if (!phone) {
    return res.status(400).json({ msg: "Please add your phone number" });
  } else if (!validPhone(phone)) {
    return res
      .status(400)
      .json({ msg: "You must provide a valid phone number" });
  }

  // Password
  if (password.length < 6) {
    return res
      .status(400)
      .json({ msg: "Your password must be at least 6 chars" });
  }

  next();
};

// Phone number
const validPhone = (phone: string) => {
  const result = /^\d{10}$/;
  return result.test(phone);
};
// Email
const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      ///^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ///^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    );
};
