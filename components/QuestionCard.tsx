interface QuestionCardProps {
    question: {
        header: string,
        questions:string[]
    }
}

const QuestionCard:React.FC<QuestionCardProps> = ({question}) => {
    return(
        <div className="bg-white p-4 shadow-md rounded-md mt-4">
            <h3 className="text-lg font-semibold">{question.header}</h3>
            {question.questions?.map(each=>{
                return(
                    <p key={each}>{each}</p>
                )
            })}
        </div>
    )
}

export default QuestionCard;