interface QuestionCardProps {
    question: string
}

const QuestionCard:React.FC<QuestionCardProps> = ({question}) => {
    return(
        <div className="bg-white p-4 shadow-md rounded-md mt-4">
            <h3 className="text-lg font-semibold">{question}</h3>
        </div>
    )
}

export default QuestionCard;