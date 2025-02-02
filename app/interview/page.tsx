import Header from "@/components/Header";
import JobDescriptionInput from "@/components/JobDescriptionInput";

const InterviewPage = () => {
    return(
        <main>
            <Header />
            <div className="m-lg">
            <h2>Enter Job Description Below</h2>
            <JobDescriptionInput />
            </div>
        </main>
    )
}

export default InterviewPage;