import { MailAdpater } from "../adapters/mail-adapter";
import { FeedbacksRepository } from "../repositories/feedbacks-repositories";

interface SubmitFeedbackCaseRequest{
    type: string;
    comment: string;
    screenshot?: string;
}

export class SubmitFeedbackCase{
    
    constructor(
        private feedbacksRepostitory: FeedbacksRepository,
        private mailAdapter: MailAdpater,
    ){}

    async execute(request: SubmitFeedbackCaseRequest) {
        const { type, comment, screenshot } = request;

        if(!type){
            throw new Error('Type is required.')
        }

        if(!comment){
            throw new Error('comment is required.')
        }

        if(screenshot && !screenshot.startsWith('data:image/png;base64')){
            throw new Error('Invalid screenshot format.')
        }
        await this.feedbacksRepostitory.create({
            type,
            comment,
            screenshot,
        })

        await this.mailAdapter.sendMail({
            subject:'Novo feedback',
            body: [
                `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
                `<p>Tipo do feedback: ${type}</>`,
                `<p>Comentário: ${comment}</>`,
                `</div>`
            ].join("\n")
        })
    }
}