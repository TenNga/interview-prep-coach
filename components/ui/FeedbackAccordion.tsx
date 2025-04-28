import { EachFeedback, FeedbackAccordionProps } from "@/app/types"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"


export const FeedbackAccordion:React.FC<FeedbackAccordionProps> = ({response}) => {
    return(
        <Accordion type="single" collapsible className="w-full border border-gray-600 px-3">
      <AccordionItem value="item-1" className="border-gray-600">
        <AccordionTrigger className="capitalize font-semibold">clarity {response?.clarity?.score}</AccordionTrigger>
        <AccordionContent>
        {response.clarity?.feedback}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="border-gray-600">
        <AccordionTrigger className="capitalize font-semibold">depth {response.depth?.score}</AccordionTrigger>
        <AccordionContent>
        {response.depth?.feedback}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="border-none">
        <AccordionTrigger className="capitalize font-semibold">Relevance {response.relevance?.score}</AccordionTrigger>
        <AccordionContent>
        {response.relevance?.feedback}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    )
}