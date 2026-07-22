import { FAQCategory } from "../types";

export const faqCategories: FAQCategory[] = [
  {
    title: "About the Course",
    faqs: [
      {
        id: "f1",
        question: "What specific technical disciplines do you cover?",
        answer: "Our focus spans Advanced AI, Cloud Architecture, Cyber Defense, and Executive Strategy, curated entirely for enterprise teams."
      },
      {
        id: "f2",
        question: "Can we request a custom technology stack?",
        answer: "Absolutely. We routinely design programs around proprietary systems, niche languages, and legacy tech modernization."
      },
      {
        id: "f3",
        question: "How do you measure the ROI of your programs?",
        answer: "We measure ROI through post-training capability assessments, capstone project impact, and organizational productivity metrics."
      }
    ]
  },
  {
    title: "About the Delivery",
    faqs: [
      {
        id: "f4",
        question: "Do you support asynchronous learning?",
        answer: "Yes, our delivery model blends synchronous instructor-led sessions with asynchronous, project-based milestones on our Next-Gen LMS."
      },
      {
        id: "f5",
        question: "Who facilitates the technical deep-dives?",
        answer: "Our facilitators are active senior engineers, engineering managers, and product leads from global tech giants."
      }
    ]
  },
  {
    title: "Miscellaneous",
    faqs: [
      {
        id: "f6",
        question: "Is there a minimum team size required?",
        answer: "We cater to teams of all sizes. Whether you are training a specialized squad of 5 or upskilling a workforce of 500+, we have scalable solutions."
      },
      {
        id: "f7",
        question: "Do participants receive a certificate?",
        answer: "Yes, upon successful completion of the program and assessments, participants receive an official Accredian Certificate which is highly recognized in the industry."
      }
    ]
  }
];
