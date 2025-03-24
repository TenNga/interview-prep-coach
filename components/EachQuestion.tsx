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
            {/* {response && <p>{response.clarity.score}</p>} */}
            {response && <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>clarity {response?.clarity?.score}</AccordionTrigger>
        <AccordionContent>
        {response.clarity?.feedback}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>depth {response.depth?.score}</AccordionTrigger>
        <AccordionContent>
        {response.depth?.feedback}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated? {typeof response}</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>}
        </div>
    )
};

export default EachQuestion;