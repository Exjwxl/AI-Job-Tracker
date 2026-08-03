import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,

  baseURL: "https://openrouter.ai/api/v1",
});

export async function analyzeResume(
  resumeText: string,
  jobDescription: string
) {
  const prompt = `
You are an expert ATS Resume Reviewer.

Analyze the following resume against the given job description.

Return your response in this format:

Resume Score: XX/100

Matching Skills:
- ...

Missing Keywords:
- ...

Strengths:
- ...

Weaknesses:
- ...

Suggestions:
- ...

=========================
RESUME
=========================

${resumeText}

=========================
JOB DESCRIPTION
=========================

${jobDescription}
`;

  const completion = await client.chat.completions.create({
    model: "google/gemma-4-31b-it:free",

    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],

    temperature: 0.3,
  });

  return completion.choices[0].message.content;
}