import React from "react";
import { ProjectPlannerForm } from "@/components/ProjectPlannerForm";

export const metadata = {
  title: "Start a Project | Contact Technical Team",
  description:
    "Start a project conversation with Dhruvi Software Solutions. Request software development, SaaS product engineering, or technical consultation.",
};

export default function ContactPage() {
  return (
    <div className="py-12 sm:py-20 bg-slate-50 min-h-screen">
      <ProjectPlannerForm />
    </div>
  );
}
