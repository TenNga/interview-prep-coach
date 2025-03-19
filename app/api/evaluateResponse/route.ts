import { NextResponse } from "next/server";
import axios from "axios";
import { EachFeedback } from "@/app/types";

export async function POST(req: Request) {
  try {
    console.error("🔥 Error before calling anything");
    const { question,userResponse,jobDescription } = await req.json();
    if (!question) {
      return NextResponse.json(
        { error: "Question is required" },
        { status: 400 }
      );
    }
    if (!jobDescription) {
        return NextResponse.json(
          { error: "Job description is required" },
          { status: 400 }
        );
      }
      if (!userResponse) {
        return NextResponse.json(
          { error: "User response is required" },
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
            content: "Your are an interview answer feedback generator.",
          },
          {
            role: "user",
            content: `Evaluate the following interview response based on three criteria: clarity, depth, and relevance. Score each on a scale of 1 to 10 and provide specific feedback for improvement:

        Job Description: ${jobDescription}
        Question: ${question}
        User Response: "${userResponse}"

        Format your response as:
        {
          clarity: {
            score: <score out of 10>,
            feedback: "<feedback>"
          },
          depth: {
            score: <score out of 10>,
            feedback: "<feedback>"
          },
          relevance: {
            score: <score out of 10>,
            feedback: "<feedback>"
          }
        }`,
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
    return NextResponse.json<{feedback:EachFeedback}>({
      feedback: response.data.choices[0].message.content
    });
  } catch (error: any) {
    console.error(
      "🔥 Error generating feedback:",
      error.response?.data || error.message
    );
    return NextResponse.json(
      { error: "Failed to generate feedback" },
      { status: 500 }
    );
  }
}
