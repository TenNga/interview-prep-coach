import { useState } from "react";

interface EachQuestion  {
    header: string,
    questions: string[]
}

export function useGenerateQuestion() {
    const [ questions, setQuestions ] = useState<EachQuestion[]>([]);
    const [loading, setIsLoading] = useState(false);

    const generateQuestions = async (jobDescription: string) => {
        setIsLoading(true);

        try{
          const resp = await fetch('/api/generateQuestions', {
                method: 'POST',
                body: JSON.stringify({jobDescription}),
                headers: { "Content-Type": "application/json"},
            });

            if(!resp.ok){
                throw new Error("Failed to generate questions.");
            }

            const data = await resp.json();
            console.log("DATA AT HOOKS: ",data.questions)
            setQuestions(data.questions);  
        } catch (error) {
            console.error("Error: ",error);
        } finally {
            setIsLoading(false);
        }
        
    }

    return {questions, loading, generateQuestions };
}