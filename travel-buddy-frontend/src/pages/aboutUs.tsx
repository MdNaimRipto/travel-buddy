import MainLayout from "@/layouts/MainLayout";
import { ReactElement } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import { colorConfig } from "@/configs/colorConfig";

const commonButtonSx = {
  borderRadius: 100,
  py: {
    xs: "12px",
    sm: "4px",
    md: 1,
  },
  px: 2,
  fontSize: {
    xs: "12px",
    md: "0.875rem",
  },
  width: {
    xs: "100%",
    sm: "auto",
  },
  whiteSpace: "nowrap",
};

const About = () => {
  return (
    <main className="container px-4">
      <div className="py-6">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <h1 className="titleFont text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            About Travel Buddy
          </h1>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
            Travel Buddy helps travellers discover trusted hotels, curated
            tours, and local experiences — all with transparent pricing and
            verified reviews.
          </p>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
            Whether you’re planning a short getaway or a long vacation, our
            platform lets you compare options, check availability, and make
            secure reservations in just a few steps.
          </p>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
            We focus on clarity, security, and convenience so you can spend less
            time planning and more time enjoying the journey.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link href="/hotels">
              <Button
                variant="contained"
                sx={{
                  ...commonButtonSx,
                  color: colorConfig.white,
                  background: `linear-gradient(45deg, ${colorConfig.primary}, ${colorConfig.secondary}) !important`,
                  border: `1px solid ${colorConfig.secondary}`,
                  "&:hover": {
                    color: colorConfig.secondary,
                    background: "none !important",
                    border: `1px solid ${colorConfig.secondary}`,
                  },
                }}
              >
                Browse Hotels
              </Button>
            </Link>

            <Link href="/reservations">
              <Button
                variant="outlined"
                sx={{
                  ...commonButtonSx,
                  color: colorConfig.secondary,
                  border: {
                    xs: `1px solid ${colorConfig.secondary}`,
                  },
                  transition: ".3s",
                  "&:hover": {
                    color: colorConfig.secondary,
                    border: {
                      xs: `1px solid ${colorConfig.secondary}`,
                    },
                  },
                }}
              >
                Manage Reservations
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div id="faq" className="pb-24">
        <h2 className="titleFont text-2xl md:text-3xl font-semibold text-gray-900 mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          <Accordion
            disableGutters
            elevation={0}
            className="rounded-xl border border-gray-200"
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <span className="font-medium">How do I make a booking?</span>
            </AccordionSummary>
            <AccordionDetails>
              <p className="text-gray-600">
                Browse hotels or tours, compare available options, and proceed
                to the booking form. Once you enter traveller and payment
                details, your reservation is confirmed instantly.
              </p>
            </AccordionDetails>
          </Accordion>

          <Accordion
            disableGutters
            elevation={0}
            className="rounded-xl border border-gray-200"
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <span className="font-medium">
                Can I cancel or change my reservation?
              </span>
            </AccordionSummary>
            <AccordionDetails>
              <p className="text-gray-600">
                Cancellation and modification policies depend on the hotel or
                service provider. You’ll always see the applicable policy before
                confirming a booking.
              </p>
            </AccordionDetails>
          </Accordion>

          <Accordion
            disableGutters
            elevation={0}
            className="rounded-xl border border-gray-200"
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <span className="font-medium">Is payment secure?</span>
            </AccordionSummary>
            <AccordionDetails>
              <p className="text-gray-600">
                Yes. All payments are processed securely using trusted payment
                gateways. Travel Buddy never stores sensitive card information
                on its servers.
              </p>
            </AccordionDetails>
          </Accordion>

          <Accordion
            disableGutters
            elevation={0}
            className="rounded-xl border border-gray-200"
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <span className="font-medium">
                How do I contact customer support?
              </span>
            </AccordionSummary>
            <AccordionDetails>
              <p className="text-gray-600">
                Our support team is available through the website contact form
                and via email at{" "}
                <span className="font-medium">
                  support@travel-buddy.example.com
                </span>
                .
              </p>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </main>
  );
};

export default About;

About.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
