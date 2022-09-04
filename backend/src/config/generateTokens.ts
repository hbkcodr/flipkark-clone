import jwt from 'jsonwebtoken';
// import env from "../../utils/env";
const activeToken = process.env.ACTIVE_TOKEN_SECRET;

export const generateActiveToken = (payload: Object) => {
    return jwt.sign(payload, `${activeToken}`, { expiresIn: "5m" });
}
