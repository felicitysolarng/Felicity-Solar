
import { Accordion } from "radix-ui";
import { AccordionContent, AccordionItem, AccordionTrigger } from "./accordion";
import { faq } from "@/lib/data";

const AccordionDemo: React.FC = () => (
    <Accordion.Root
        className="w-full rounded-md bg-white border border-grey-100 flex flex-col"
        type="single"
        defaultValue="What products does Felicity Solar Limited offer?"
        collapsible
    >
        {faq.map((f) => {
            return (
                <AccordionItem key={f.question} value={f.question} className="first:data-[state=closed]:mt-8 last:data-[state=closed]:mb-8 data-[state=open]:px-1 md:data-[state=open]:px-4 data-[state=open]:py-6 data-[state=open]:bg-grey-950 flex flex-col justify-center">
                    <AccordionTrigger className="text-lg md:data-[state=open]:shadow-[0_0_0] data-[state=open]:text-white font-semibold data-[state=closed]:py-12 text-left md:text-center shadow-none">{f.question}</AccordionTrigger>
                    <AccordionContent className="text-sm text-grey-700 data-[state=open]:text-grey-75 font-normal">
                        {f.answer}
                    </AccordionContent>
                </AccordionItem>
            )
        })}
    </Accordion.Root>
);

export default AccordionDemo;