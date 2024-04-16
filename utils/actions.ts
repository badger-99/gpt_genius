'use server';
import OpenAI from "openai";

interface Message {
  role: string;
  content: string;
}


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const generateChatResponse = async (chatMessage: Array<any>) => {
  try {
    const response = await openai.chat.completions.create({
      messages: [
        { role: 'system', content: 'you are a helpful assistant' },
        ...chatMessage,
      ],
      model: 'gpt-3.5-turbo',
      temperature: 0,
    });
    console.log(response.choices[0].message);
    console.log(response);
    const message = response.choices[0].message;
    return message;
  } catch (error) {
    return null;
  }
};