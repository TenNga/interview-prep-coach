'use client'

import Header from "@/components/Header";
import JobDescriptionInput from "@/components/JobDescriptionInput";
import QuestionCard from "@/components/QuestionCard";
import { useState } from "react";
import { useGenerateQuestion } from "../hooks/useGenerateQuestion";

const InterviewPage = () => {

    const {loading, questions, generateQuestions } = useGenerateQuestion();
    

    return(
        <main className="p-10 ">
            <Header />
            <div className="mt-6">
                <h2 className="text-lg mb-3">Enter Job Description Below</h2>
                <JobDescriptionInput onSubmit={generateQuestions} isLoading={loading} />
                <h1>Question Length: {questions.length}</h1>
                {/* {loading && <p className="mt-4 text-blue-600">Generating question...</p>} */}

                {questions.length > 0 && (
                    <div className="mt-6">
                        <h3 className="text-lg font-semibold"> 🤖 AI-Generated Questions:</h3>
                        {questions.map((q,i) => (
                            <QuestionCard key={i} question={q} />
                        ))}
                    </div>
                )}
            </div>
        </main>
    )
}

export default InterviewPage;