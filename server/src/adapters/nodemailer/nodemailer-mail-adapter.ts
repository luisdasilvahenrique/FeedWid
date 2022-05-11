import { MailAdpater, sendMailData } from "../mail-adapter";
import nodemailer from "nodemailer"
const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "451ef2ebdcc788",
      pass: "78fd575daa8257"
    }
  });

export class NodemailerMailAdapter implements MailAdpater{
    async sendMail({subject, body}: sendMailData) {
        await transport.sendMail({
            from: "Equipe Feedget <oi@feedget.com>",
            to: "Luis Henrique <luisenriklh1177027@gmail.com>",
            subject,
            html: body,
        });
    }
}