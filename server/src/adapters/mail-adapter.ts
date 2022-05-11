export interface sendMailData{
    subject: string;
    body: string;
}

export interface MailAdpater {
    sendMail: (data: sendMailData) => Promise<void>;
}