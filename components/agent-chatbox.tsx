"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { LuSparkle, LuSend, LuBrain } from "react-icons/lu";
import { sendMessage, type ChatMessage } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AgentChatbox() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    const userMessage: ChatMessage = { role: "user", content: text };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const newMessages = [...messages, userMessage];
      const reply = await sendMessage(newMessages);
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Something went wrong. Please check OPENAI_API_KEY and try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog>
      <DialogTrigger className="fixed bottom-4 right-4 bg-linear-to-br from-[#bcc9a7] to-[#7a8960] border-[#c0cea7] border-4 text-white p-3 rounded-full text-xl hover:scale-105  hover:from-[#7a8960]/75 hover:to-[#bcc9a7]/75 transition-all">
        <LuSparkle />
      </DialogTrigger>
      <DialogContent className="flex max-h-[85vh] flex-col bg-[#F6F0D7]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-[#67774a]">Ask My Portfolio <LuBrain /></DialogTitle>
        </DialogHeader>

        <div className="flex flex-1 flex-col gap-3 overflow-hidden min-h-[200px]">
          <div className="flex-1 overflow-y-auto space-y-3 pr-2">
            {messages.length === 0 && (
              <p className="text-muted-foreground text-sm">
                Ask me anything about Charles and his work.
              </p>
            )}
            {messages.map((m, i) => (
              <div
                key={i}
                className={
                  m.role === "user"
                    ? "ml-auto max-w-[85%] rounded-2xl bg-green-600 px-3 py-2 text-sm text-white [&_a]:underline"
                    : "mr-auto max-w-[85%] rounded-2xl bg-muted px-3 py-2 text-sm [&_a]:text-primary [&_a]:underline [&_ul]:list-disc [&_ol]:list-decimal [&_ul,_ol]:pl-4 [&_pre]:overflow-x-auto [&_code]:rounded [&_code]:bg-muted-foreground/10 [&_code]:px-1 [&_pre]:rounded [&_pre]:bg-muted-foreground/10 [&_pre]:p-2"
                }
              >
                <ReactMarkdown>{m.content}</ReactMarkdown>
              </div>
            ))}
            {loading && (
              <div className="mr-auto max-w-[85%] rounded-2xl bg-muted px-3 py-2 text-sm text-muted-foreground">
                ...
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="flex gap-2">
            <div className="flex-1 flex flex-col gap-1.5">
              <Label htmlFor="chat-input" className="sr-only">
                Message
              </Label>
              <Input
                id="chat-input"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="rounded-xl outline-none focus:ring-0 focus:ring-offset-0"
                disabled={loading}
              />
            </div>
            <Button type="submit" size="icon" className="bg-[#7a8960] hover:bg-[#7a8960]/75 text-white" disabled={loading || !input.trim()}>
              <LuSend className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
