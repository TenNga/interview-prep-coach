import Header from "@/components/Header";
import JobDescriptionInput from "@/components/JobDescriptionInput";
import QuestionCard from "@/components/QuestionCard";
import { useState } from "react";

const InterviewPage = () => {

    const [questions, setQuestions] = useState<string[]>([]);
    const [loading, isLoading] = useState(false);


    return(
        <main>
            <Header />
            <div className="m-lg">
                <h2>Enter Job Description Below</h2>
                <JobDescriptionInput />

                {loading && <p className="mt-4 text-blue-600">Generating question...</p>}

                {questions.length && (
                    <div className="mt-6">
                        <h3 className="text-lg font-semibold">Generated Questions:</h3>
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