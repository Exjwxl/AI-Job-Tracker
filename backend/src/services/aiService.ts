import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY!,
  baseURL: "https://openrouter.ai/api/v1",
  defaultHeaders: {
    "HTTP-Referer": "http://localhost:3000",
    "X-Title": "AI Job Tracker",
  },
});

export async function analyzeResume(
  resumeText: string,
  jobDescription: string
) {
  const prompt = `
You are an expert ATS Resume Analyzer.

Analyze the resume against the job description.

Return ONLY valid JSON.

{
  "score": 0,
  "matchingSkills": [],
  "missingKeywords": [],
  "strengths": [],
  "weaknesses": [],
  "suggestions": []
}

Resume:
${resumeText}

Job Description:
${jobDescription}
`;

  console.log("Using model:", "google/gemma-4-26b-a4b-it:free");

  const completion = await client.chat.completions.create({
    model: "google/gemma-4-26b-a4b-it:free",

    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],

    temperature: 0.3,
  });

  let response = completion.choices[0].message.content ?? "{}";

  console.log("===== AI RESPONSE =====");
  console.log(response);

  response = response
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  try {
    return JSON.parse(response);
  } catch {
    console.error("Invalid JSON:");
    console.log(response);

    throw new Error("AI returned invalid JSON.");
  }
}