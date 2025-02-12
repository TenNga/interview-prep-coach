import { NextResponse } from "next/server";

export async function POST(req:Request) {
    const { jobDescription } = await req.json();
    
    //Simulated response (called OpenAI API here), and it will response with questions

    const questions = [
        "What experience do you have with React and Next.js?",
    "How do you optimize a React application for performance?",
    "Can you explain the difference between client-side and server-side rendering?"
    ];

    return NextResponse.json({questions})
}