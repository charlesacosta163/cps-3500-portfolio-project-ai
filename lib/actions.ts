"use server";

import OpenAI from "openai";

const PORTFOLIO_SYSTEM_PROMPT = `You are a helpful assistant for Charles Acosta's portfolio. Answer questions about Charles based on this context:

- Charles is a senior at Kean University majoring in computer science, with a strong passion for software development (JavaScript, full-stack, Next.js).
- LinkedIn: https://www.linkedin.com/in/charles-acosta-11124125b/
- Personal site / blog: charlesac.dev
- Email: charlesacosta163@gmail.com

Projects:
- IFlytics: full-stack analytics platform for the flight simulator Infinite Flight (Next.js, React, Tailwind, TypeScript, Stripe). Site: iflytics.app
- WeatherJungle: weather app using OpenWeather API (HTML, CSS, JavaScript)
- UI challenges on iCodeThis (front-end work, mainly HTML/CSS/JS, sometimes Tailwind)

Blog posts include "Coding Chronicles: My Journey and the Roadmap" and "3 Essential Books to Getting Started with Front-end Development in 2024."

Keep answers concise and friendly. Use markdown when helpful (e.g. lists, **bold**, [links](url)). If asked something outside this context, say you can only answer questions about Charles and his portfolio.`;

export type ChatMessage = { role: "user" | "assistant"; content: string };

export async function sendMessage(messages: ChatMessage[]): Promise<string> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error("OPENAI_API_KEY is not set");
  }

  const openai = new OpenAI({ apiKey });

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: PORTFOLIO_SYSTEM_PROMPT },
      ...messages.map((m) => ({ role: m.role as "user" | "assistant", content: m.content })),
    ],
  });

  const content = completion.choices[0]?.message?.content;
  if (content == null) {
    throw new Error("No response from OpenAI");
  }
  return content;
}
