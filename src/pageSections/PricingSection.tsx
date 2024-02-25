import React from "react";
import { PricingCardInterface } from "../models/PricingCardInterface";
import { PricingCard } from "../componets/PricingCard";

export default function PricingSection() {
  const pricing: PricingCardInterface[] = [
    {
      title: "Standard Tier",
      amount: "49.99",
      features: [
        "Basic Analytics: Access to standard AI analytics including basic trend analysis and sentiment analysis on social media.",
        "Monthly Reports: Automated monthly reports providing insights into consumer behaviour trends.",
        "Data Integration: Ability to integrate with standard data sources such as social media platforms and basic financial transaction data.",
        `Customer Support: Email support with a response time of 48 hours.
        Data Storage: Limited data storage capability for analytics.`,
      ],
      recommended: false,
    },
    {
      title: "Professional Tier",
      amount: "89.99",
      features: [
        "Advanced Analytics: Includes all Standard features plus enhanced AI analytics with deeper insights into consumer spending habits and online behaviour.",
        "Weekly Reports: More frequent, detailed reports offering nuanced insights into consumer behaviour.",
        "Behavioural Economics Insights: Access to behavioural economics frameworks for deeper understanding of consumer motivations.",
        "Data Integration Plus: Integration with a wider range of data sources, including e-commerce platforms.",
        "Priority Customer Support: Priority email and chat support with a response time of 24 hours.",
        "Customizable Dashboard: Access to a customizable dashboard for real-time data monitoring and analysis.",
        "Data Compliance Assistance: Guidance on UK and EU data protection laws compliance."
      ],
      recommended: true,
    },
    {
      title: "Enterprise Tier",
      amount: "129.99",
      features: [
        "All Professional Features: Includes all features of the Professional tier.",
        "Predictive Analytics and Forecasting: Advanced predictive models for anticipating future consumer trends and behaviours.",
        "Dedicated Account Manager: Personalised service with a dedicated account manager for tailored support.",
        "Unlimited Data Storage: Extensive data storage capabilities for comprehensive analytics.",
        "Real-Time Analytics: Access to real-time analytics for up-to-the-minute insights.",
        "Customised Reports: Tailored reports and analytics customised to specific business needs.",
        "Workshops and Training: Access to exclusive workshops and training sessions on AI, behavioural economics, and data interpretation.",
      ],
      recommended: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Pricing Table
              </span>
              <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
              InsightAI Pricing: Invest in Insights for Strategic Growth
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                Our pricing is as innovative as our job matching. Discover
                packages that make finding the right job in digital twin
                technology accessible and affordable.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap justify-center">
          {pricing.map((price) => (
            <PricingCard
              amount={price.amount}
              title={price.title}
              recommended={price.recommended}
              features={price.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
