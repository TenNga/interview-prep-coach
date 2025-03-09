'use client'
import { JobDescriptionContextType } from "@/app/types"
import { createContext, ReactNode, useState } from "react"

export const JobDescriptionContext = createContext<JobDescriptionContextType | null>(null);

export const JobDescriptionProvider = ({children} : { children: ReactNode}) => {
    const [jobDescription, setJobDescription] = useState<string>("")

    return(
        <JobDescriptionContext.Provider value={{jobDescription,setJobDescription}}>
            {children}
        </JobDescriptionContext.Provider>
    )
}