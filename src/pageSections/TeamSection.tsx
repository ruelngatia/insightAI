import React from "react";
import { TeamMemberInterface } from "../models/TeamMemberInterface";
import memberPhoto from "../assets/team/team-01.png";
import { TeamMemberCard } from "../componets/TeamMemberCard";

export default function TeamSection() {
  const teamMemebers: TeamMemberInterface[] = [
    {
      image: memberPhoto,
      title: "Stella Ekeke",
      description:
        "CEO Visionary leader, orchestrating company strategy and fostering business growth in the tech industry.",
    },
    {
      image: memberPhoto,
      title: "Ruel Ngatia",
      description:
        "Chief Technical Officer (CTO) Tech genius, driving innovation in AI and digital twin technology, spearheading product development.",
    },
    {
      image: memberPhoto,
      title: "Amina Patel",
      description: `Chief Marketing Officer (CMO) Marketing strategist, expert in brand building and digital campaigns, enhancing Twin Tech's global presence.`,
    },
    {
      image: memberPhoto,
      title: "Oliver Smith",
      description:
        "Chief Financial Officer (CFO) Financial guru, managing Twin Tech’s financial health with astute planning and risk analysis.",
    },
  ];

  return (
    <section
      id="team"
      className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[486px] text-center">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Our Team Members
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                Our management team combines strategic, technical, operational,
                marketing, financial, and security expertise
              </h2>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap justify-center">
          {teamMemebers.map((member) => (
            <TeamMemberCard
              image={member.image}
              title={member.title}
              description={member.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
