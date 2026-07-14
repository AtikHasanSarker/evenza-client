"use client";

import { Accordion, AccordionItem } from "@heroui/react";

const faqs = [
  {
    key: "1",
    title: "How do I create an account?",
    content:
      "Click the Register button, fill in your name, email, and password, then submit the form to create your Evenza account.",
  },
  {
    key: "2",
    title: "Can I publish my own event?",
    content:
      "Yes. After logging into your account, you can access the Add Event page and publish your own event by providing the required information.",
  },
  {
    key: "3",
    title: "Do I need an account to browse events?",
    content:
      "No. Anyone can browse and explore events without creating an account. However, publishing and managing events requires authentication.",
  },
  {
    key: "4",
    title: "Can I delete my published events?",
    content:
      "Yes. You can manage all of your published events from the Manage Events page and delete any event you own.",
  },
  {
    key: "5",
    title: "Is Evenza free to use?",
    content:
      "Yes. Evenza is free to use for discovering, exploring, and publishing events.",
  },
];

export default function FaqSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-3 text-gray-600">
            Find answers to the most common questions about Evenza and how the
            platform works.
          </p>
        </div>

        <Accordion
          variant="bordered"
          selectionMode="multiple"
          className="rounded-xl"
        >
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.key}
              aria-label={faq.title}
              title={faq.title}
            >
              <p className="leading-7 text-gray-600">{faq.content}</p>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
