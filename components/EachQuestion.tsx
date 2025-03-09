import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { QuestionType } from "@/app/types";
import { Textarea } from "@/components/ui/textarea"
import { NotebookPen } from 'lucide-react';

const EachQuestion = ({ question }: QuestionType) => {

    const [showForm, setShowForm] = useState(false);

    return (
        <div>
            <div className="flex justify-between">
                <p>{question}</p>
                <Button onClick={() => setShowForm(!showForm)}><NotebookPen /> write</Button>
            </div>
            {showForm &&
                <form className="flex flex-col items-start w-1/2 my-4">
                    <Textarea className="w-full rounded-lg mb-4" placeholder="Type your answer here." id="user-answer" />
                    <Button className="rounded-lg" type="submit" variant="outline">Submit</Button>
                </form>
            }
        </div>
    )
};

export default EachQuestion;