import { SubmitFeedbackCase } from "./submit-feedback-use-case"

const submitFeedback = new SubmitFeedbackCase(
    { create: async() => {} },
    { sendMail: async() => {} }
)

describe('Submit feedback', () => {
    it('should be able to submit a feedback', async() =>{
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'example commet',
            screenshot: 'data:image/png;base64,askdsakdjsakdjsadkjsadkjaskj1j',
        })).resolves.not.toThrow();
    });

    it('should not be able to submit feedback without type', async() =>{
        await expect(submitFeedback.execute({
            type: '',
            comment: 'example commet',
            screenshot: 'data:image/png;base64,askdsakdjsakdjsadkjsadkjaskj1j',
        })).rejects.toThrow();
    });

})


