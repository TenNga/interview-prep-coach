import { useState } from "react";

const JobDescriptionInput = () => {
    const [description, setDescription] = useState("")
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    }

    return(
        <form action="">
                <textarea name="description" id="job-desc" rows={4} placeholder="Enter job description here..." value={description} onChange={()=>setDescription(e.target.value)} />
                <button type="submit">Generate Question</button>
            </form>
    )
};

export default JobDescriptionInput;