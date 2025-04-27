import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { EachFeedback, QuestionType } from "@/app/types";
import { Textarea } from "@/components/ui/textarea"
import { NotebookPen } from 'lucide-react';
import useJobDescription from '@/app/hooks/useJobDescription';
import { useResponseFeedback } from '@/app/hooks/useResponseFeedback';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { FeedbackAccordion } from './ui/FeedbackAccordion';

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
            <div className="flex flex-col items-start mt-3">
                <p>{question}</p>
                <Button onClick={() => setShowForm(!showForm)}><NotebookPen /> Your answer</Button>
            </div>
            {showForm &&
                <form className="flex flex-col items-start w-1/2 my-4" onSubmit={handleResponse}>
                    <Textarea className="w-full rounded-lg mb-4" placeholder="Type your answer here." id="user-answer" onChange={(e)=>setUserResponse(e.target.value)}/>
                    <Button className="rounded-lg" type="submit" variant="outline">{loading? 'loading' : 'Check'}</Button>
                </form>
            }
           
            {response && <FeedbackAccordion response={response} />}
        </div>
    )
};

export default EachQuestion;