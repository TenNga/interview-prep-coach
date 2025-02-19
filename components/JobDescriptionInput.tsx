'use client'

import { useState } from "react";
interface JobInputProps {
    onSubmit:(jobDescription: string)=>void,
    isLoading: boolean
}

const JobDescriptionInput = ({onSubmit,isLoading}:JobInputProps) => {
    const [description, setDescription] = useState("")
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (description.trim() === "") return;
        onSubmit(description)
    }

    return(
        <form onSubmit={handleSubmit}>
                <textarea name="description" id="job-desc" rows={4} placeholder="Enter job description here..." value={description} onChange={(e)=>setDescription(e.target.value)} className="border py-3 px-2 w-[350px]"/>
                <button type="submit" className="block py-3 px-5 bg-blue-600 rounded-lg text-white font-semibold">{isLoading? "Getting questions" : "Generate Question"}</button>
            </form>
    )
};

export default JobDescriptionInput;