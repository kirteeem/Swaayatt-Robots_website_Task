import { MapPin, Mail, Briefcase, Phone } from "lucide-react";

/* ================= CONTACT PAGE ================= */
export default function Contact() {
  return (
    <div className="bg-white">
      <main className="py-10 sm:py-12">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* ================= CONTACT INFO ================= */}
            <div className="border border-gray-300 rounded-lg p-4 sm:p-6 bg-white">
              <h1 className="text-2xl sm:text-3xl font-[600] mb-1 text-[#1A212F]">
                Contact Us
              </h1>

              <p className="text-sm text-[#1A212FB2] mb-4">
                Have any questions? Drop us a mail or give us a call.
              </p>

              <hr className="border-gray-300 mb-4" />

              <div className="space-y-4">
                <ContactRow
                  icon={MapPin}
                  title="Location"
                  text="No. 42, Abhinav Regal Homes, Awadhpuri, Pipilani, Bhopal, Madhya Pradesh - 462022"
                />

                <ContactRow
                  icon={Mail}
                  title="For General Queries"
                  link="mailto:contact@swaayatt.com"
                  linkText="contact@swaayatt.com"
                />

                <ContactRow
                  icon={Briefcase}
                  title="For Potential Investment"
                  link="mailto:investment@swaayatt.com"
                  linkText="investment@swaayatt.com"
                />

                <ContactRow
                  icon={Phone}
                  title="Call"
                  link="tel:+917554947025"
                  linkText="+91-755-4947025"
                />
              </div>
            </div>

            {/* ================= MAP ================= */}
            <div
              className="
                w-full
                max-w-[942px]
                h-[260px]
                sm:h-[400px]
                lg:h-[560px]
                rounded-[20px]
                overflow-hidden
                border border-gray-300
              "
            >
              <iframe
                title="Swaayatt Robots Location"
                src="https://www.google.com/maps?q=Swaayatt%20Robots%20Bhopal&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

/* ================= CONTACT ROW ================= */
function ContactRow({ icon: Icon, title, text, link, linkText }) {
  return (
    <div className="flex items-start gap-4">
      
      {/* ICON — SAME SIZE AS BEFORE */}
      <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
        <Icon className="w-4 h-4 text-blue-600" />
      </div>

      {/* TEXT CONTENT */}
      <div>
        <h3 className="text-[16px] font-[500] text-[#1A212F66]">
          {title}
        </h3>

        {text && (
          <p className="text-[16px] font-[400] text-[#1A212F] leading-snug mt-0.5">
            {text}
          </p>
        )}

        {link && (
          <a
            href={link}
            className={`text-sm font-[500] mt-0.5 inline-block ${
              title === "Call"
                ? "text-[#1A212F]"
                : "text-[#174CD2] underline"
            }`}
          >
            {linkText}
          </a>
        )}
      </div>
    </div>
  );
}
