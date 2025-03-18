import { useState } from "react";
import { EachFeedback, EachQuestion, GenerateFeedbackProps } from "../types";

export function useResponseFeedback() {
    const [ response, setResponse ] = useState<EachFeedback | null>(null);
    const [loading, setIsLoading] = useState(false);

    const generateFeedback = async ({userResponse, question, jobDescription} : GenerateFeedbackProps) => {
        setIsLoading(true);

        try{
          const resp = await fetch('/api/evaluateResponse', {
                method: 'POST',
                body: JSON.stringify({userResponse, question, jobDescription}),
                headers: { "Content-Type": "application/json"},
            });

            if(!resp.ok){
                throw new Error("Failed to generate questions.");
            }

            const data = await resp.json();
            // console.log("DATA AT HOOKS: ",data.feedback)
            setResponse(data.feedback);  
        } catch (error) {
            console.error("Error: ",error);
        } finally {
            setIsLoading(false);
        }
        
    }

    return {response, loading, generateFeedback };
}