import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

console.log(
  "Gemini key starts with:",
  process.env.GEMINI_API_KEY?.substring(0, 8)
);

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });

    return NextResponse.json({
      result: response.text,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Gemini failed.",
      },
      {
        status: 500,
      }
    );
  }
}