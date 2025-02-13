'use client'

import { useState } from "react";
interface JobInputProps {
    onSubmit:(jobDescription: string)=>void
}

const JobDescriptionInput = ({onSubmit}:JobInputProps) => {
    const [description, setDescription] = useState("")
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (description.trim() === "") return;
        onSubmit(description)
    }

    return(
        <form onSubmit={handleSubmit}>
                <textarea name="description" id="job-desc" rows={4} placeholder="Enter job description here..." value={description} onChange={(e)=>setDescription(e.target.value)} />
                <button type="submit">Generate Question</button>
            </form>
    )
};

export default JobDescriptionInput;