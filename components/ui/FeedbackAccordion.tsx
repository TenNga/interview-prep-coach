import { EachFeedback, FeedbackAccordionProps } from "@/app/types"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"


export const FeedbackAccordion:React.FC<FeedbackAccordionProps> = ({response}) => {
    return(
        <Accordion type="single" collapsible className="w-full border px-3">
      <AccordionItem value="item-1">
        <AccordionTrigger className="capitalize font-semibold">clarity {response?.clarity?.score}</AccordionTrigger>
        <AccordionContent>
        {response.clarity?.feedback}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>depth {response.depth?.score}</AccordionTrigger>
        <AccordionContent>
        {response.depth?.feedback}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Relevance {response.relevance?.score}</AccordionTrigger>
        <AccordionContent>
        {response.relevance?.feedback}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    )
}