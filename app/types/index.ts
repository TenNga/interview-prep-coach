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

export type feedbackType = {
    score: number | string,
    feedback: string
} 

export interface EachFeedback {
    clarity: feedbackType,
    depth: feedbackType,
    relevance: feedbackType
}

// clarity: {
//     score: 1,
//     feedback: "The response is very unclear. It consists of only three words and does not provide any information about the candidate's experience with modern JavaScript and ES6+ features. To improve clarity, the candidate should provide a detailed explanation of their experience, including specific examples of projects or tasks they have completed using these technologies."
//   },
//   depth: {
//     score: 1,
//     feedback: "The response lacks depth. There is no information provided that demonstrates the candidate's understanding or experience with modern JavaScript or ES6+ features. To improve depth, the candidate should discuss specific ES6+ features they are familiar with, such as arrow functions, promises, or destructuring, and describe how they have applied these in their work."
//   },
//   relevance: {
//     score: 1,
//     feedback: "The response is not relevant to the question asked. The job description specifically requires proficiency in modern JavaScript and ES6+, and the candidate's response does not address this requirement. To improve relevance, the candidate should focus on sharing their direct experience and knowledge regarding the use of modern 
// JavaScript and ES6+ features in their development work."
//   }
// }

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