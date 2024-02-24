import React from "react";
import grid from "../assets/svg/grid.svg";
import { FAQInterface } from "../models/FAQInterface";
import { FAQCard } from "../componets/FAQCard";

export default function FAQSection() {
  const questions: FAQInterface[] = [
    {
      question: "What does AI-driven customer feedback analysis involve?",
      answer: `InsightAI's AI-driven analysis employs cutting-edge technology to dissect and interpret complex customer feedback, making it easily understandable for our clients.`,
    },
    {
      question: "How does InsightAI highlight key insights from customer feedback?",
      answer:
        "Using advanced natural language processing, InsightAI identifies and emphasises crucial insights within your customer feedback, ensuring you're aware of important trends and sentiments",
    },
    {
      question: "What types of feedback analysis does InsightAI automate?",
      answer:
        "Our platform automates a variety of feedback analyses, including sentiment analysis, trend spotting, and identifying recurring customer issues, streamlining the insight-gathering process.",
    },
    {
      question: "Can InsightAI simplify complex customer feedback for better understanding?",
      answer: `Absolutely, InsightAI breaks down complex feedback into simpler terms, providing clear explanations to help you grasp the underlying customer opinions and needs`,
    },
    {
      question: "Will InsightAI notify me about emerging customer trends or issues?",
      answer:
        "Certainly, InsightAI includes a notification system to alert you to new insights and emerging trends in your customer feedback, ensuring you're always one step ahead.",
    },
    {
      question: "Is InsightAI suitable for businesses new to customer feedback analysis?",
      answer:
        "Indeed, InsightAI is designed to be user-friendly for businesses of all expertise levels, especially those new to customer feedback analysis, making sophisticated insights accessible to everyone.",
    },
  ];

  return (
    <section className="relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[50px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center">
              <span className="mb-2 block text-lg font-semibold text-primary">
                FAQ
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                Making the Most of Your Twin Tech Experience:
              </h2>
              <p className="mx-auto max-w-[485px] text-base text-body-color dark:text-dark-6">
                Get tips on how to effectively use Twin Tech to enhance your
                job-seeking or recruitment process.
              </p>
            </div>
          </div>
        </div>
        <div className="-mx-4 grid grid-cols-1 md:grid-cols-2">
          {questions.map((question) => (
            <FAQCard question={question.question} answer={question.answer} />
          ))}
        </div>
      </div>
      <div>
        <span className="absolute left-4 top-4 -z-[1]">
          <img src={grid} alt="start" />
        </span>
        <img src={grid} alt="end" />
      </div>
    </section>
  );
}
