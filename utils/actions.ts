'use server';

export const generateChatResponse = async (chatMessage: string | Array<string>) => {
  console.log(chatMessage);
  return 'awesome';
};