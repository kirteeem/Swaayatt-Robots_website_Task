import React, { useState } from "react";
import { MapPin, Clock, Briefcase } from "lucide-react";

import head from "/images/career/head.png";
import frame from "/images/career/frame.jpg";

export default function Career() {
  /* ================= STATE ================= */
  const [activeTab, setActiveTab] = useState("Full Time");

  /* ================= DUMMY DATA (API READY) ================= */
 const jobsData = [
  // ===== FULL TIME (5) =====
  {
    id: 1,
    title: "Full Stack Developer",
    location: "Bhopal, Madhya Pradesh",
    type: "Full Time",
    experience: "2 – 3 year",
  },
  {
    id: 2,
    title: "Full Stack Developer",
    location: "Bhopal, Madhya Pradesh",
    type: "Full Time",
    experience: "2 – 3 year",
  },
  {
    id: 3,
    title: "Full Stack Developer",
    location: "Bhopal, Madhya Pradesh",
    type: "Full Time",
    experience: "2 – 3 year",
  },
  {
    id: 4,
    title: "Full Stack Developer",
    location: "Bhopal, Madhya Pradesh",
    type: "Full Time",
    experience: "2 – 3 year",
  },
  {
    id: 5,
    title: "Full Stack Developer",
    location: "Bhopal, Madhya Pradesh",
    type: "Full Time",
    experience: "2 – 3 year",
  },

  // ===== INTERNSHIP (5) =====
  {
    id: 6,
    title: "Full Stack Developer",
    location: "Bhopal, Madhya Pradesh",
    type: "Internship",
    experience: "2 – 3 year",
  },
  {
    id: 7,
    title: "Full Stack Developer",
    location: "Bhopal, Madhya Pradesh",
    type: "Internship",
    experience: "2 – 3 year",
  },
  {
    id: 8,
    title: "Full Stack Developer",
    location: "Bhopal, Madhya Pradesh",
    type: "Internship",
    experience: "2 – 3 year",
  },
  {
    id: 9,
    title: "Full Stack Developer",
    location: "Bhopal, Madhya Pradesh",
    type: "Internship",
    experience: "2 – 3 year",
  },
  {
    id: 10,
    title: "Full Stack Developer",
    location: "Bhopal, Madhya Pradesh",
    type: "Internship",
    experience: "2 – 3 year",
  },
];


  return (
    <main className="w-full">

      {/* ================= HERO ================= */}
      <section className="w-full py-8">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="relative rounded-2xl overflow-hidden">

            <img
              src={head}
              alt="Careers at Swaayatt Robots"
              className="w-full h-[240px] sm:h-[320px] md:h-[420px] lg:h-[480px] xl:h-[560px] object-cover brightness-110 contrast-105"
            />

            <div className="absolute inset-0 bg-[#6b4e2e] opacity-20 mix-blend-overlay" />

            <div className="absolute bottom-0 left-0 right-0 bg-black/60 py-4 sm:py-5 md:py-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-6 sm:px-10 text-white gap-4">

                <div>
                  <p className="font-rethink text-[20px] tracking-[-0.02em] opacity-90 mb-1">
                    Careers @ Swaayatt Robots
                  </p>

                  <p className="font-rethink text-[36px] sm:text-[44px] md:text-[56px] lg:text-[68px] tracking-[-0.02em] max-w-[600px] opacity-90">
                    Join the Journey
                  </p>

                  <p className="font-rethink text-[20px] sm:text-[24px] md:text-[30px] lg:text-[38px] tracking-[-0.02em] max-w-[517px] opacity-90">
                    Build Something Great With Us
                  </p>
                </div>

                <div className="bg-white/20 backdrop-blur-md px-5 py-3 rounded-xl text-sm sm:text-base font-medium border border-white/10 hover:bg-white/30 hover:scale-[1.03] transition cursor-pointer">
                  Machine Learning Engineer
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= MISSION ================= */}
      <section className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 py-10 text-center">
        <p className="font-rethink text-[18px] sm:text-[22px] md:text-[26px] lg:text-[33px] tracking-[-0.01em] text-gray-700 max-w-[1350px] mx-auto">
          <span className="text-blue-600">Our mission</span> is to revolutionize
          the future of transportation and contribute to the advancement of
          autonomous systems on a global scale.
        </p>
      </section>

      {/* ================= IMAGE + TEXT ================= */}
      <section className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 pb-20">
        <div className="relative rounded-2xl overflow-hidden">

          <img
            src={frame}
            alt="Innovation That Matters"
            className="w-full h-[360px] sm:h-[420px] lg:h-[480px] object-cover brightness-110 contrast-105"
          />

          <div className="absolute inset-0 bg-[#6b4e2e] opacity-20 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/50 to-transparent" />

          <div className="absolute inset-0 flex items-center justify-end">
            <div className="max-w-xl px-6 sm:px-10 lg:px-16 text-white text-right">

              <h2 className="font-rethink font-bold text-[24px] sm:text-[28px] md:text-[32px] lg:text-[38px] tracking-[-0.02em] mb-4">
                Innovation That Matters
              </h2>

              <p className="font-rethink text-[14px] sm:text-[16px] md:text-[18px] leading-[140%] tracking-[-0.02em] text-justify max-w-[520px]">
                At Swaayatt Robots, we have been at the forefront of developing
                India's first Autonomous Driving technology since 2016.
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* ================= WE ARE HIRING ================= */}
      <section className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 py-20">

        {/* Header */}
        <div className="text-center max-w-5xl mx-auto mb-12">
          <h2 className="font-rethink font-bold text-[24px] sm:text-[30px] md:text-[34px] lg:text-[38px] tracking-[-0.02em] text-[#1A212F] mb-4">
            We Are Hiring | Join Us
          </h2>

          <p className="font-rethink text-[16px] sm:text-[18px] md:text-[20px] tracking-[-0.02em] text-[#5D5D5D] max-w-[1081px] mx-auto mb-6">
            Swaayatt Robots is looking for passionate minds ready to shape the
            future of autonomous driving and AI. If you’re eager to make real
            impact in cutting-edge technology, this is where your journey begins.
          </p>

          <p className="font-rethink text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] tracking-[-0.02em] text-[#1A212F]">
            Check out current openings and send your resume to{" "}
            <a href="mailto:career@swaayatt.com" className="text-blue-600 underline">
              career@swaayatt.com
            </a>
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex border rounded-full p-1">
            {["Full Time", "Internship"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                  activeTab === tab
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Job Cards */}
        <div className="space-y-6">
          {jobsData
            .filter((job) => job.type === activeTab)
            .map((job) => (
              <div
                key={job.id}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border border-gray-200 rounded-xl px-6 py-5"
              >
                <div>
                  <h3 className="text-lg font-medium text-[#1A212F]">
                    {job.title}
                    <span className="ml-3 text-blue-600 text-sm cursor-pointer inline-flex items-center gap-1">
                      View Job Description <span className="text-xs">↗</span>
                    </span>
                  </h3>

                  <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mt-2">
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

                <button className="self-start sm:self-center bg-blue-50 text-blue-600 px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-100 transition">
                  Apply to this role
                </button>
              </div>
            ))}
        </div>

      </section>

    </main>
  );
}
