'use client';
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { generateChatResponse } from "../../../utils/actions";

const Chat = () => {
  const [userInput, setUserInput] = useState('')
  const [chatFeed, setChatFeed] = useState([''])
  const { mutate } = useMutation({
    mutationFn: (chatFeed: string | Array<string>) => generateChatResponse(chatFeed),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(userInput);
  }

  return (
    <div className="min-h-[calc(100vh-6rem)] grid grid-rows-[1fr,auto]">
      <div>
        <h2 className="text-5xl">Chat Feed</h2>
      </div>
      <form onSubmit={handleSubmit} className="max-w-4xl pt-12">
        <div className="join w-full">
          <input type="text" placeholder="Message CloneGPT" className="input input-bordered join-item w-full" value={userInput} required onChange={(e) => setUserInput(e.target.value)} />
          <button type="submit" className="btn btn-primary join-item">ask</button>
        </div>
      </form>
    </div>
  )
}

export default Chat