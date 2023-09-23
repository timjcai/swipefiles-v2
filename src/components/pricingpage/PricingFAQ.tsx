import React, { FC } from "react";
import { Accordion, AccordionProps } from "../common/Accordion";

const data = [
    {
        question: "How does Swipe work?",
        answer: "Swipe allows you to easily save and organize hyperlinks from the internet. You can add links to your Swipe account, categorize them, and access them from any device with an internet connection.",
    },
    {
        question: "Is Swipe free to use?",
        answer: "Yes, Swipe offers a free version with basic features. However, there are also premium subscription plans available with additional functionality.",
    },
    {
        question: "How do I create an account on Swipe?",
        answer: "To create an account on Swipe, simply visit our website or download the app, then follow the registration process. You'll need to provide a valid email address and choose a password.",
    },
    {
        question: "Do I need to install any software to use Swipe?",
        answer: "No, Swipe is a web-based application, and there's no need to install any additional software. You can access it directly from your preferred web browser.",
    },
    {
        question:
            "Can I import bookmarks from other browsers or services into Swipe?",
        answer: "Yes, Swipe provides an import feature that allows you to transfer your existing bookmarks from other browsers or services. You can easily organize them within Swipe.",
    },
    {
        question: "How can I save a webpage or hyperlink using Swipe?",
        answer: "Saving a webpage or hyperlink in Swipe is simple. Just click on the 'Save' button or use our browser extension to quickly add the link to your Swipe account.",
    },
    {
        question:
            "Can I organize my saved links into categories or folders in Swipe?",
        answer: "Absolutely! Swipe offers a robust organization feature that lets you create categories or folders to sort your saved links for easy access and management.",
    },
    {
        question: "Can I access my saved links offline with Swipe?",
        answer: "Swipe primarily operates online, but you can mark specific links for offline access. This way, you can view your saved content even when you're not connected to the internet.",
    },
    {
        question: "How do I share my saved links with others using Swipe?",
        answer: "Sharing links with others is a breeze in Swipe. You can generate shareable links or collaborate with others by inviting them to specific folders or collections.",
    },
    {
        question:
            "What happens if I accidentally delete a saved link in Swipe?",
        answer: "Don't worry! Swipe has a trash or archive feature that allows you to recover deleted links within a certain timeframe. Your data is safe, and accidental deletions can be easily undone.",
    },
];

export const PricingFAQ: FC = () => {
    return (
        <div>
            {data.map((items: AccordionProps) => {
                return (
                    <Accordion
                        question={items.question}
                        answer={items.answer}
                    />
                );
            })}
        </div>
    );
};
