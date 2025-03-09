import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { QuestionType } from "@/app/types";
import { Textarea } from "@/components/ui/textarea"
import { NotebookPen } from 'lucide-react';
import useJobDescription from '@/app/hooks/useJobDescription';
import { useResponseFeedback } from '@/app/hooks/useResponseFeedback';

const EachQuestion = ({ question }: QuestionType) => {

    const [showForm, setShowForm] = useState(false);
    const [userResponse, setUserResponse] = useState("");
    const {jobDescription, setJobDescription} = useJobDescription();
    const {response, loading, generateFeedback} = useResponseFeedback();

    const handleResponse = (e: React.FormEvent) => {
        e.preventDefault();
        if (userResponse?.trim() === "") return;
        generateFeedback({userResponse, question, jobDescription})
    }

    return (
        <div>
            <div className="flex justify-between">
                <p>{question}</p>
                <Button onClick={() => setShowForm(!showForm)}><NotebookPen /> write</Button>
            </div>
            {showForm &&
                <form className="flex flex-col items-start w-1/2 my-4" onSubmit={handleResponse}>
                    <Textarea className="w-full rounded-lg mb-4" placeholder="Type your answer here." id="user-answer" onChange={(e)=>setUserResponse(e.target.value)}/>
                    <Button className="rounded-lg" type="submit" variant="outline">{loading? 'loading' : 'Submit'}</Button>
                </form>
            }
        </div>
    )
};

export default EachQuestion;