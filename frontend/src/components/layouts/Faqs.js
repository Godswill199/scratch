import React, { useState, useRef } from "react";
import {VscAdd} from 'react-icons/vsc'
import { loremIpsum } from 'react-lorem-ipsum';


const Faqs = () => {

const [faqQuestions, setFaqQuestions] = useState([
    { id: 0, question: "What is Scratch9ja?", answer: "Scratch9ja is a fun scratch-off game. In Scratch9ja, All your winnings are up to you because every card is a winning card", isActive: false },
    { id: 1, question: "How does it work?", answer: "Purchase any Scratch9ja game card of your choice, read the instruction on the card carefully, follow the instruction to play, submit your winning card to claim your winnings", isActive: false },
    { id: 2, question: "Where can I play?", answer: "Your Scratch9ja card will be available for you to play offline from the comfort of your home after purchase", isActive: false },
    { id: 3, question: "What can I win on Scratch9ja?", answer: "You can win cash prizes, gadgets, electronics, travel and lifestyle deals, shopping voucher, fashion items and lots more.", isActive: false },
    { id: 4, question: "How can I claim my prize", answer: "you can claim your prize by Filling out the form at the back of your winning card and submit your winning card at our district office. alternatively, you can claim by sending an email with your winning card to winner@scratch9ja.com. All confirmed won cards must be sent down to the district office for confirmation, once confirmed you'll be contacted for your details and payment will be made immediately."
    , isActive: false },
]);

const faqBox = faqQuestions.map(faq => {
    const displayClass = faq.isActive ? "opened" : "";

    return (
        <div className={"faq-box " + displayClass} onClick={ () => toggleAccordion(faq.id) }>
            <div className="flex justify-between faq-question">
                <h1>{ faq.question }</h1>
                <VscAdd />
            </div>
            <div className="faq-answer">
                <span>{ faq.answer }</span>
            </div>
        </div>
    );
});


const toggleAccordion = (faqId) => {
    let updatedFaqs = faqQuestions.map(faq => {
    if (faq.id === faqId) {
        faq.isActive = !faq.isActive;
    } else {
        faq.isActive = false;
    }
    return faq;
    });
    setFaqQuestions(updatedFaqs);
};

return (
    <div className="mt-20 mb-20">
        <div className="flex justify-center section-heading mt-20 mb-10">
            <span>Frequently Asked Questions</span>
        </div>
        <div className="flex justify-center faq-container">
            <div>
                { faqBox }
            </div>
        </div>
    </div>
);
};

export default Faqs;