import express from "express";
import connectDB from "@/db/connect";
import UserModel from "@/models/userModel";
import nodemailer from "nodemailer";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const app = express();

app.post("/api/email-verification/getUser", async (req: express.Request, res: express.Response) => {
    const { username }: any = req.body;
    try {
        const user = await UserModel.findOne({ username });
        if (!user) {
            return res.status(404).json({ error: "User Not Found!" });
        }
        const code = Math.floor(100000 + Math.random() * 900000);
        const expiresAt = new Date();
        expiresAt.setMinutes(expiresAt.getMinutes() + 5); // Set the verification code expiration to 5 minutes from now

        user.verificationCode = { code: code.toString(), expiresAt };
        // console.log(user.verificationCode);
        
        await user.save();
        const mailOptions = {
            from: "teamdevgym@gmail.com",
            to: user.username,
            subject: "Change Password",
            html: `<h4>Change your password</h2> </br> <p> To change your password enter this code: <b>${code}</b> </p>`,
        };

        const transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
            user: "teamdevgym@gmail.com",
            pass: "fnfmnsoochmyrlue",
        },
    }); 
        await transporter.sendMail(mailOptions);
        res.json({ user, code });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Server Error" });
    }
});

(async () => {
    try {
        await connectDB(process.env.URL);
        console.log("MongoDB connected");
    } catch (e) {
        console.log(e);
    }
})();

export default app;
