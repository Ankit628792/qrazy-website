import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion";
import AnimationContainer from './global/animation-container';
import Wrapper from "./global/wrapper";
import SectionBadge from './ui/section-badge';

export type FAQItem = {
    question: string;
    answer: string;
};

export const FAQS: FAQItem[] = [
    {
        question: "How does Qrazy prevent counterfeit products?",
        answer: "Each QR code is unique and linked to our secure database, preventing duplication and fake product circulation."
    },
    {
        question: "Can I customize the reward system?",
        answer: "Yes! Admins can set custom reward limits based on product category and marketing goals."
    },
    {
        question: "Is Qrazy suitable for small businesses?",
        answer: "Absolutely! Qrazy is designed for both large enterprises and growing brands."
    },
    {
        question: "How do I track scams and fraud attempts?",
        answer: "The admin dashboard provides real-time reports on QR scans, customer behavior, and suspicious activity."
    },
    {
        question: "What kind of support do you provide?",
        answer: "We offer 24/7 customer support through multiple channels including live chat, email, and phone. Our dedicated support team is trained to help with technical issues, platform navigation, and best practices for management."
    }
];


const FAQ = () => {
    return (
        <Wrapper className="py-20 lg:py-32">
            <div className="flex flex-col items-center text-center gap-4">
                <AnimationContainer animation="fadeUp" delay={0.2}>
                    <SectionBadge title="FAQ" />
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.3}>
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium !leading-tight text-transparent bg-clip-text bg-gradient-to-b from-foreground to-neutral-400">
                        Still have questions?
                    </h2>
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.4}>
                    <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
                        Find answers to common questions about our Qrazy
                    </p>
                </AnimationContainer>
            </div>

            <div className="max-w-3xl mx-auto pt-10">
                <Accordion type="single" collapsible className="w-full space-y-4">
                    {FAQS.map((item, index) => (
                        <AnimationContainer
                            key={index}
                            animation="fadeUp"
                            delay={0.5 + (index * 0.1)}
                        >
                            <AccordionItem
                                value={`item-${index}`}
                                className="border-none bg-[#191919] rounded-2xl px-6"
                            >
                                <AccordionTrigger className="hover:no-underline py-6 text-base md:text-lg text-left font-normal">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground text-left">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        </AnimationContainer>
                    ))}
                </Accordion>
            </div>
        </Wrapper>
    );
};

export default FAQ;
