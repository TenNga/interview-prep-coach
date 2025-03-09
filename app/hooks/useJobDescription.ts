import { useContext } from "react"
import { JobDescriptionContext } from "../api/contexts/JobDescriptionContext";

const useJobDescription = () => {
    const context = useContext(JobDescriptionContext);

    if(!context){
        throw new Error("useJobDescription must be used within a JobDescriptionProvider");
    }

    return context;
}

export default useJobDescription;