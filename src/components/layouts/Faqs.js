import React, { useState, useRef } from "react";
import {VscAdd} from 'react-icons/vsc'
import { loremIpsum } from 'react-lorem-ipsum';


const Faqs = () => {

const [faqQuestions, setFaqQuestions] = useState([
    { id: 0, question: "What is Scratch9ja?", answer: "Scratch9ja is a fun scratch-off game. In Scratch9ja, All your winnings are up to you because every card is a winning card", isActive: false },
    { id: 1, question: "How does it work?", answer: "Purchase any Scratch9ja game card of your choice, read the instruction on the card carefully, contact us on instagram or chat us on whatsapp to choose your preferred method of playing, claim your winnings", isActive: false },
    { id: 2, question: "Where can I play?", answer: "You can walk into any scratch9ja gaming centre closest to you to play or schedule a live video call on instagram or whatsapp to play with one of our agents; you can also make your decision from the card designs sent to you from any of our online representative. ", isActive: false },
    { id: 3, question: "What can I win on Scratch9ja?", answer: "You can win cash prizes, gadgets, electronics, travel and lifestyle deals, shopping voucher, fashion items and lots more.", isActive: false },
    { id: 4, question: "How can I claim my prize", answer: "you can claim your prize by Filling out the form at the back of your winning card and submit your winning card at our district office. alternatively, you can claim by sending an email with your winning card to winner@scratch9ja.com. All confirmed won cards must be sent down to the district office for confirmation, once confirmed you'll be contacted for your details and payment will be made immediately."
    , isActive: false },
     { id: 5, question: "What happens if I cheat the gaming system?", answer: "IF SCRATCH9JA DETECTIVE TEAM DETECTS ANY MANIPULATION ON THE CARD GAME; YOU WILL BE CALLED TO THE SCRATCH9JA HEAD OFFICE TO PLAY THAT PARTICULAR GAME WHEREBY YOU HAVE TWO CHANCES TO TRY YOUR LUCK. OR, YOU'LL BE CALLED VIA VIDEO CALL AND GIVEN TWO CHANCES TO TRY YOUR LUCK REMOTELY. IF YOU WIN; ALL YOUR WINNINGS WILL BE CREDITED; ELSE YOU WON'T BE CREDITED.  Signed and approved by the management. Note: If you can't accept these terms and conditions; DO NOT PLAY THE GAME.", isActive: false }
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
