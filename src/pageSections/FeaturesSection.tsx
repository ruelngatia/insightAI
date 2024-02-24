import React from "react";
import { FeatureCardInterface } from "../models/FeatureCardInterface";
import frame from "../assets/svg/frame.svg";
import layers from "../assets/svg/layers.svg";
import present from "../assets/svg/present.svg";
import window from "../assets/svg/window.svg";
import { FeatureCard } from "../componets/FeatureCard";

export default function FeaturesSection() {
  const features: FeatureCardInterface[] = [
    {
      svg: layers,
      title: "Real-Time Data Visualisation",
      content:
        "Visualise the voice of your customers through InsightAI's real-time data visualisation, presenting dynamic graphs and charts that illuminate feedback trends and insights at a glance.",
    },
    {
      svg: frame,
      title: "Interactive Reporting Tools",
      content:
        "Create bespoke reports with InsightAI's interactive reporting tools, empowering you to extract custom insights and actionable intelligence from customer feedback."
    },
    {
      svg: present,
      title: "Multi-Language Support",
      content:
        "Globalise your insight gathering with InsightAI, offering multi-language support to break down barriers and access customer feedback from around the world.",
    },
    {
      svg: window,
      title: "User Feedback Feature",
      content:
        "Shape the future of InsightAI with our user feedback feature, allowing you to contribute towards platform enhancements and ensure it meets your evolving needs.",
    },
  ];

  return (
    <section
      id="features"
      className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[650px] text-center lg:mb-[70px]">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Features
              </span>
              <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
                Explore InsightAI's Cutting-Edge Features: Where AI Meets
                Customer Insight
              </h2>
              <p className="text-base text-body-color dark:text-dark-6"></p>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap">
          {features.map((feature) => (
            <div className="w-full px-4 md:w-1/2 lg:w-1/4 rounded-lg shadow-2">
              <FeatureCard
                svg={feature.svg}
                title={feature.title}
                content={feature.content}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
