// ICON IMAGES
import locationIcon from "../assets/images/location.png";
import mailIcon from "../assets/images/email.png";
import mailInvestIcon from "../assets/images/investmentlogo.png";
import phoneIcon from "../assets/images/phone.png";

/* ================= CONTACT PAGE ================= */
export default function Contact() {
  return (
    <div className="bg-white">
      <main className="py-10 sm:py-12">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* ================= CONTACT INFO ================= */}
            <div className="border border-gray-300 rounded-lg p-4 sm:p-6 bg-white">
              <h1 className="text-2xl sm:text-3xl font-bold mb-1">
                Contact Us
              </h1>

              <p className="text-sm text-gray-600 mb-4">
                Have any questions? Drop us a mail or give us a call.
              </p>

              <hr className="border-gray-300 mb-4" />

              <div className="space-y-3">
                <ContactRow
                  icon={locationIcon}
                  title="Location"
                  text="No. 42, Abhinav Regal Homes, Awadhpuri, Pipilani, Bhopal, Madhya Pradesh - 462022"
                />

                <ContactRow
                  icon={mailIcon}
                  title="For General Queries"
                  link="mailto:contact@swaayatt.com"
                  linkText="contact@swaayatt.com"
                />

                <ContactRow
                  icon={mailInvestIcon}
                  title="For Potential Investment"
                  link="mailto:investment@swaayatt.com"
                  linkText="investment@swaayatt.com"
                />

                <ContactRow
                  icon={phoneIcon}
                  title="Call"
                  link="tel:+917554947025"
                  linkText="+91-755-4947025"
                />
              </div>
            </div>

            {/* ================= MAP ================= */}
            <div className="h-[260px] sm:h-[340px] lg:h-[420px] rounded-lg overflow-hidden border border-gray-300">
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
function ContactRow({ icon, title, text, link, linkText }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
        <img src={icon} alt={title} className="w-4 h-4" />
      </div>

      <div>
        <h3 className="text-xs font-medium text-gray-500">
          {title}
        </h3>

        {text && (
          <p className="text-xs text-gray-700 leading-snug mt-0.5">
            {text}
          </p>
        )}

        {link && (
          <a
            href={link}
            className={`text-xs ${
              title === "Call"
                ? "text-gray-900"
                : "text-blue-600 underline"
            }`}
          >
            {linkText}
          </a>
        )}
      </div>
    </div>
  );
}
