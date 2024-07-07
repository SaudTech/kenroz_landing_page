"use client";
import { HoverEffect } from "../ui/card-hover-effect";
import { MdMenuBook, MdManageAccounts } from "react-icons/md";
import { HiOutlineCash } from "react-icons/hi";
import { FaRegFilePdf, FaSms } from "react-icons/fa";
import { PiExam } from "react-icons/pi";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

export function Features() {
  const words = [
    {
      text: "Management",
    },
    {
      text: "made",
    },
    {
      text: "easy",
    },
    {
      text: "with",
    },
    {
      text: "Kenroz.",
      className: "text-primary",
    },
  ];

  return (
    <div>
      <div className="text-center">
        <TypewriterEffectSmooth className="mx-auto justify-center" words={words} />
        <h1 className="text-xl font-normal mx-auto">We offer the following features</h1>
      </div>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={features} />
      </div>
    </div>
  );
}
export const features = [
  {
    title: "Attendance",
    description:
      "Manage student's attendance in app and notify parents if their child is absent.",
    icon: <MdMenuBook className="text-white/70 h-14 w-14" />,
  },
  {
    title: "Fees Management",
    description:
      "Manage fees of students acccording to your school's fee structure.",
    icon: <HiOutlineCash className="text-white/70 h-14 w-14" />,
  },
  {
    title: "Upload Assignments",
    description:
      "Students can upload their assignments, homeworks, projects... and teachers can check them.",
    icon: <FaRegFilePdf className="text-white/70 h-14 w-14" />,
  },
  {
    title: "Exams",
    description:
      "Schedule exams, generate results and notify parents about their child's performance.",
    icon: <PiExam className="text-white/70 h-14 w-14" />,
  },
  {
    title: "Manage users",
    description: "Manage students, teachers and parents and their profiles.",
    icon: <MdManageAccounts className="text-white/70 h-14 w-14" />,
  },
  {
    title: "SMS Notifications",
    description:
      "Send SMS notifications to parents about their child's attendance, results, fees and other important information.",
    icon: <FaSms className="text-white/70 h-14 w-14" />,
  },
];
