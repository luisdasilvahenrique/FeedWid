import express from "express";
import { NodemailerMailAdapter } from "./adapters/nodemailer/nodemailer-mail-adapter";
import { PrismaFeedbackRepository } from "./repositories/prisma/prisma-feedbacks-repository";
import { SubmitFeedbackCase } from "./uses-cases/submit-feedback-use-case";

export const routes = express.Router();

routes.post("/feedbacks", async (req, res) => {
    const { type, comment, screenshot } = req.body;
    

    const prismaFeedbacksRepository = new PrismaFeedbackRepository()
    const nodemailerMailAdapter = new NodemailerMailAdapter()


    const submitFeedbackUseCase = new SubmitFeedbackCase(
        prismaFeedbacksRepository,
        nodemailerMailAdapter
    )

    await submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot,
    })
        return res.status(201).send();
    })