import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  try {
    console.error("🔥 Error before calling anything");
    const { jobDescription } = await req.json();
    if (!jobDescription) {
      return NextResponse.json(
        { error: "Job description is required" },
        { status: 400 }
      );
    }

    const OPEN_API_KEY = process.env.OPENAI_API_KEY;
    if (!OPEN_API_KEY) {
      return NextResponse.json({ error: "Missing API Key" }, { status: 500 });
    }
    console.log("🔹 Calling OpenAI API...");
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4o",
        messages: [
          {
            role: "system",
            content: "Your are an interview question generator.",
          },
          {
            role: "user",
            content: `Generate interview questions for this job: ${jobDescription} Please strictly return the questions in this format, without markdown format like 'json' before the data:
            [
              {
                "header": "Category Name",
                "questions": [
                  "Question 1",
                  "Question 2"
                ]
              },
              {
                "header": "Another Category",
                "questions": [
                  "Question 1",
                  "Question 2"
                ]
              }
            ]
            Only return the JSON, no additional text, no explanations, no summaries.`,
          },
        ],
        temperature: 0.7,
        // max_token: 200
      },
      {
        headers: {
          Authorization: `Bearer ${OPEN_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(
      "✅ OpenAI Response:",
      response.data.choices[0].message.content
    );
    return NextResponse.json({
      questions: JSON.parse(response.data.choices[0].message.content),
    });
  } catch (error: any) {
    console.error(
      "🔥 Error generating questions:",
      error.response?.data || error.message
    );
    return NextResponse.json(
      { error: "Failed to generate questions" },
      { status: 500 }
    );
  }
}
