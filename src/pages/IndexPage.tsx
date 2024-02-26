import React, { useState } from "react";
import HeroSection from "../pageSections/HeroSection";
import FeaturesSection from "../pageSections/FeaturesSection";
import AboutSection from "../pageSections/AboutSection";
import CTASection from "../pageSections/CTASection";
import PricingSection from "../pageSections/PricingSection";
import FAQSection from "../pageSections/FAQSection";
import TeamSection from "../pageSections/TeamSection";
import ContactSection from "../pageSections/ContactSection";
import Dialog from "@mui/material/Dialog";
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";
import { FeedbackForm } from "../componets/FeedbackForm";


export default function IndexPage() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <CTASection />
      <PricingSection />
      {/* testimonials */}
      <FAQSection />
      {/* <TeamSection /> */}
      <ContactSection />
      <div className="fixed z-20 bottom-8 right-5">
      <Fab variant="extended" color="primary" onClick={() => setIsOpen(true)}>
        <NavigationIcon sx={{ mr: 1 }} />
        Submit feed back
      </Fab>
      </div>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        fullWidth
        maxWidth="xs"
      >
        <FeedbackForm onClose={setIsOpen}/>
      </Dialog>
    </div>
  );
}
