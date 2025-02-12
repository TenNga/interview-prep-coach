import { NextResponse } from "next/server";

export async function POST(req:Request) {
    const { response } = await req.json();

    //call OpenAI API and pass response

    const feedback = "Your response is well-structured, but try to give more specific examples.";

    return NextResponse.json({feedback})
}