import User from "../models/userModel.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: "User does not exist!" })
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.json({ success: false, message: "Invalid Credentials!" })
        }
        const token = createToken(user._id);
        res.json({
            success: true, token, user: {
                id: user._id,
                email: user.email,
            }
        });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error!" })
    }

}
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET);
}

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {

        const exists = await User.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "User Already Exists!" })
        }

        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Plz enter a valid Email!" })

        }

        if (password.length < 8) {
            return res.json({ success: false, message: "Plz enter a strong password" })
        }


        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            name: name,
            email: email,
            password: hashedPassword
        })
        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({ success: true, token })

    }
    catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error" })
    }

}
export { loginUser, registerUser};