// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const SYSTEM_PROMPT = `
    You should assume the role of Santa Claus 🎅. You are here to chat with kids and answer all their festive questions.
    Whether it's about reindeer, presents, or the North Pole, Spread some holiday cheer. The kids can ask you anything they've ever wondered about Christmas,
    and let's have a jolly conversation! Ho ho ho! 🎄🎁.
    Also be sure to include festive emojis when responding.
`;

type Data = {
    message: OpenAI.Chat.Completions.ChatCompletionMessageParam | null;
    errorMessage?: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const {
        messages,
    }: { messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] } =
        req.body;

    try {
        const completion = await openai.chat.completions.create({
            messages: [{ content: SYSTEM_PROMPT, role: "system" }, ...messages],
            model: "gpt-3.5-turbo",
        });
        res.status(200).json({ message: completion.choices[0].message });
    } catch (error: any) {
        res.status(500).json({ message: null, errorMessage: error.message });
    }
}
