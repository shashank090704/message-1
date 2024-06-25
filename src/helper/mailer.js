// 
import nodemailer from 'nodemailer';
import Users from '@/models/user';
import bcrypt from 'bcryptjs';

export const sendEmail = async function({ email, emailType, userId }) {
  try {
    const hashedToken = await bcrypt.hash(userId.toString(), 10);
    const tokenExpiryTime = Date.now() + 3600000; // 1 hour

    if (emailType === 'VERIFY') {
      await Users.findByIdAndUpdate(userId, {
        $set: {
          verifytoken: hashedToken,
          verifytokenexpiry: tokenExpiryTime,
        },
      });
    } else if (emailType === 'Reset') {
      await Users.findByIdAndUpdate(userId, {
        $set: {
          forgotpasswordtoken: hashedToken,
          forgotpasswordexpiry: tokenExpiryTime,
        },
      });
    }

    var transporter = nodemailer.createTransport({
      host: 'sandbox.smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: '80b002bffff75b',
        pass: 'b0a1850512c237',
      },
    });

    const mailOption = {
      from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
      to: email, // list of receivers
      subject: emailType === 'VERIFY' ? 'Verify Your Email' : 'Reset Your Password', // Subject line
      text: 'Hello world?', // plain text body
      html: `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a> to ${
        emailType === 'VERIFY' ? 'verify your email' : 'change your password'
      }.</p>`,
    };

    const mailResponse = await transporter.sendMail(mailOption);
    return mailResponse;
  } catch (error) {
    throw new Error(error.message);
  }
};
