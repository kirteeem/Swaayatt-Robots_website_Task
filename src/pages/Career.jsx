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
      <section className="py-6 sm:py-8 mt-8">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="relative rounded-2xl overflow-hidden">

            <img
              src={head}
              alt="Careers at Swaayatt Robots"
              className="w-full h-[240px] sm:h-[320px] md:h-[420px] lg:h-[480px] object-cover"
            />

            <div className="absolute inset-0 bg-black/55" />

            <div className="absolute bottom-0 left-0 right-0 py-6">
              <div className="flex justify-between items-end text-white px-6">

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

                <div className="hidden sm:block text-center text-white pointer-events-none">
                  <p className="text-[14px] opacity-40 mb-2">
                    Machine Learning Engineer
                  </p>

                  <div className="px-6 py-3 rounded-xl bg-white/25 backdrop-blur-md border border-white/30 text-[15px] font-medium">
                    Machine Learning Engineer
                  </div>

                  <p className="text-[14px] opacity-40 mt-2">
                    Machine Learning Engineer
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= MISSION TEXT (ADDED ONLY) ================= */}
{/* ================= MISSION TEXT ================= */}
<section className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-20">
  <p
    className="
      max-w-[1100px]
      mx-auto
      text-center

      font-rethink
      font-normal
      text-[32px]
      sm:text-[33px]
      leading-[1.3]
      tracking-[-0.01em]
      text-[#1A212F]
    "
  >
    <span className="text-blue-600">Our mission</span> is to revolutionize
    the future of transportation and contribute to the advancement of
    autonomous systems on a global scale. By becoming part of the
    Swaayatt&apos;s team, you will be surrounded by passionate individuals
    who are dedicated to pushing the boundaries of technology and
    reshaping the world of autonomy.
  </p>
</section>


      {/* ================= INNOVATION ================= */}
     <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pb-20">
  <div className="relative rounded-2xl overflow-hidden">

    {/* IMAGE */}
    <img
      src={frame}
      alt="Innovation That Matters"
      className="w-full h-[380px] sm:h-[420px] lg:h-[480px] object-cover"
    />

    {/* OVERLAY */}
    <div className="absolute inset-0 bg-black/60" />

    {/* CONTENT */}
    <div className="absolute inset-0 flex items-center justify-end">
      <div
        className="
          w-full
          max-w-[560px]
          px-4
          sm:px-6
          lg:px-8
          text-white
        "
      >
        <h2 className="font-rethink text-[26px] sm:text-[30px] lg:text-[32px] tracking-[-0.02em] mb-4">
          Innovation That Matters
        </h2>

        <p className="font-rethink text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.6] opacity-90 space-y-4">
          <span className="block">
            At Swaayatt Robots, we have been at the forefront of developing
            India’s first autonomous driving technology since 2016.
          </span>

          <span className="block">
            Join our innovative team and embark on a journey to work on
            cutting-edge research in the field of autonomous driving and
            artificial intelligence.
          </span>

          <span className="block">
            At Swaayatt, you'll have access to continuous learning opportunities
            and the latest advancements in tools and technologies related to
            autonomous driving and AI.
          </span>

          <span className="block">
            We take pride in being recognized as the first company in the world
            to enable autonomous driving in some of the most challenging and
            stochastic environments, such as India.
          </span>
        </p>
      </div>
    </div>

  </div>
</section>


      {/* ================= WE ARE HIRING ================= */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pt-12 pb-20 mb-12">


       <div className="text-center mx-auto mb-12">

  <h2 className="font-rethink text-[38px] tracking-[-0.02em] text-[#1A212F] mb-4">
    We Are Hiring | Join Us
  </h2>

  {/* ✅ NEW TEXT — ADDED AS PER FIGMA */}
  <p
    className="
      max-w-[1081px]
      mx-auto
      font-rethink
      font-normal
      text-[20px]
      leading-[1.35]
      tracking-[-0.02em]
      text-[#5D5D5D]
      mb-6
    "
  >
    Swaayatt Robots is looking for passionate minds ready to shape the future
    of autonomous driving and AI. Join a team pushing the limits of innovation,
    where every idea drives progress and every project breaks new ground. If
    you’re eager to make real impact in cutting-edge technology, this is where
    your journey begins.
  </p>

  {/* EXISTING TEXT — UNCHANGED */}
  <p className="font-rethink text-[20px] text-[#1A212F]">
    Check out current openings and send your resume to{" "}
    <a
      href="mailto:career@swaayatt.com"
      className="underline text-blue-600"
    >
      career@swaayatt.com
    </a>
  </p>

</div>

        {/* ================= TABS ================= */}
        <div className="flex justify-center mb-14">
          <div className="flex border border-blue-300 rounded-full p-1">
            {["Full Time", "Internship"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full text-sm transition ${
                  activeTab === tab
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-blue-50"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* ================= JOB LIST ================= */}
        <div className="space-y-6">
          {jobsData
            .filter((job) => job.type === activeTab)
            .map((job) => (
              <div
                key={job.id}
                className="
                  flex flex-col
                  sm:flex-row
                  items-start
                  sm:items-center
                  justify-between
                  gap-6
                  border
                  border-gray-200
                  rounded-xl
                  px-6
                  py-6
                "
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-medium text-[#1A212F]">
                      {job.title}
                    </h3>

                    <a
                      href="#"
                      className="text-sm text-blue-600 hover:underline flex items-center gap-1"
                    >
                      View Job Description ↗
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-6 text-sm text-gray-500">
                    <span className="flex items-center gap-2">
                      <MapPin size={16} />
                      {job.location}
                    </span>

                    <span className="flex items-center gap-2">
                      <Clock size={16} />
                      {job.type}
                    </span>

                   <span className="flex items-center gap-2">
  <Briefcase size={16} className="[&>line]:hidden" />
  {job.experience}
</span>

                  </div>
                </div>

                <button
                  className="
                    bg-blue-50
                    text-blue-600
                    px-6
                    py-2.5
                    rounded-lg
                    text-sm
                    hover:bg-blue-100
                    transition
                    whitespace-nowrap
                  "
                >
                  Apply to this role
                </button>
              </div>
            ))}
        </div>

      </section>
    </main>
  );
}
