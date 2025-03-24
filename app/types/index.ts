export interface QuestionCardProps {
    question: {
        header: string,
        questions:string[]
    }
}

export type QuestionType = {
    question: string
}

export interface EachQuestion  {
    header: string,
    questions: string[]
}

export interface feedbackType {
    score: number;
    feedback: string
} 

export interface EachFeedback {
    clarity: feedbackType;
    depth: feedbackType;
    relevance: feedbackType
}

export interface GenerateFeedbackProps {
    jobDescription: string,
    question: string,
    userResponse: string
}

export interface JobDescriptionContextType {
    jobDescription: string;
    setJobDescription: (jobDescription: string) => void;
}


export interface FeedbackAccordionProps {
    response: EachFeedback
  }