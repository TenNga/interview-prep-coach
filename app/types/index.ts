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

export interface ResponseProps { 
    clarity: {
        score: number,
        feedback: string
      },
      depth: {
        score: number,
        feedback: string
      },
      relevance: {
        score: number,
        feedback: string
      }
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