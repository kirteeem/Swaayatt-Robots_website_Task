import React, { useState } from "react";
import { MapPin, Clock, Briefcase } from "lucide-react";

import head from "/images/career/head.png";
import frame from "/images/career/frame.jpg";

export default function Career() {
  const [activeTab, setActiveTab] = useState("Full Time");

  const jobsData = [
    ...Array.from({ length: 5 }, (_, i) => ({
      id: `ft-${i}`,
      title: "Full Stack Developer",
      location: "Bhopal, Madhya Pradesh",
      type: "Full Time",
      experience: "2 – 3 year",
    })),
    ...Array.from({ length: 5 }, (_, i) => ({
      id: `in-${i}`,
      title: "Full Stack Developer",
      location: "Bhopal, Madhya Pradesh",
      type: "Internship",
      experience: "2 – 3 year",
    })),
  ];

  return (
    <main className="w-full">

      {/* ================= HERO ================= */}
      <section className="py-6 sm:py-8">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="relative rounded-2xl overflow-hidden">

            <img
              src={head}
              alt="Careers at Swaayatt Robots"
              className="w-full h-[240px] sm:h-[320px] md:h-[420px] lg:h-[480px] object-cover"
            />

            <div className="absolute inset-0 bg-black/55" />

            <div className="absolute bottom-0 left-0 right-0 py-6">
              <div className="flex flex-col lg:flex-row justify-between gap-6 text-white px-6">

                {/* LEFT CONTENT */}
                <div>
                  <p className="font-rethink text-[18px] opacity-80 mb-2">
                    Careers @ Swaayatt Robots
                  </p>

                  <h1 className="font-rethink text-[42px] sm:text-[52px] lg:text-[60px] tracking-[-0.02em] mb-2">
                    Join the Journey
                  </h1>

                  <p className="font-rethink text-[20px] sm:text-[24px] opacity-85 max-w-[520px]">
                    Build Something Great With Us
                  </p>
                </div>

                {/* RIGHT – NON-INTERACTIVE ROLE CAROUSEL */}
                <div className="overflow-hidden h-[32px]">
                  <div className="font-rethink text-[14px] opacity-80 animate-[slideUp_8s_linear_infinite]">
                    <p>Machine Learning Engineer</p>
                    <p>Autonomous Systems Engineer</p>
                    <p>Robotics Software Engineer</p>
                    <p>AI Research Scientist</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INNOVATION ================= */}
      <section className="max-w-[1440px] mx-auto px-6 pb-20">
        <div className="relative rounded-2xl overflow-hidden">

          <img
            src={frame}
            alt="Innovation That Matters"
            className="w-full h-[420px] lg:h-[480px] object-cover"
          />

          <div className="absolute inset-0 bg-black/70" />

          <div className="absolute inset-0 flex items-center justify-end">
            <div className="max-w-[480px] pr-6 text-white">

              <h2 className="font-rethink text-[32px] tracking-[-0.02em] mb-4">
                Innovation That Matters
              </h2>

              <p className="font-rethink text-[16px] leading-[160%] opacity-85 space-y-4">
                <span className="block">
                  At Swaayatt Robots, we have been at the forefront of developing
                  India’s first autonomous driving technology since 2016.
                </span>

                <span className="block">
                  Join our innovative team and work on cutting-edge research in
                  autonomous driving and artificial intelligence.
                </span>

                <span className="block">
                  We enable autonomous driving in some of the most challenging
                  and stochastic environments in the world.
                </span>
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* ================= WE ARE HIRING ================= */}
      <section className="max-w-[1440px] mx-auto px-6 py-20">

        <div className="text-center max-w-5xl mx-auto mb-12">
          <h2 className="font-rethink text-[38px] tracking-[-0.02em] text-[#1A212F] mb-4">
            We Are Hiring | Join Us
          </h2>

          <p className="font-rethink text-[18px] text-[#5D5D5D] mb-6">
            Join a team shaping the future of autonomous driving and AI.
          </p>

          <p className="font-rethink text-[20px] text-[#1A212F]">
            Send your resume to{" "}
            <a href="mailto:career@swaayatt.com" className="underline text-blue-600">
              career@swaayatt.com
            </a>
          </p>
        </div>

        {/* TABS */}
        <div className="flex justify-center mb-12">
          <div className="flex border rounded-full p-1">
            {["Full Time", "Internship"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full text-sm transition ${
                  activeTab === tab
                    ? "bg-blue-600 text-white"
                    : "text-gray-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* JOB CARDS */}
        <div className="space-y-6">
          {jobsData
            .filter((job) => job.type === activeTab)
            .map((job) => (
              <div
                key={job.id}
                className="flex flex-col sm:flex-row justify-between gap-4 border border-gray-200 rounded-xl px-6 py-5"
              >
                <div>
                  <h3 className="text-lg font-medium text-[#1A212F]">
                    {job.title}
                  </h3>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mt-2">
                    <span className="flex items-center gap-2">
                      <MapPin size={16} /> {job.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock size={16} /> {job.type}
                    </span>
                    <span className="flex items-center gap-2">
                      <Briefcase size={16} /> {job.experience}
                    </span>
                  </div>
                </div>

                <button className="bg-blue-50 text-blue-600 px-6 py-2.5 rounded-lg text-sm hover:bg-blue-100 transition">
                  Apply to this role
                </button>
              </div>
            ))}
        </div>

      </section>
    </main>
  );
}
