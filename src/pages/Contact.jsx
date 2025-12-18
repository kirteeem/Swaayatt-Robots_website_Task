// ICON IMAGES
import locationIcon from "../assets/images/phone.png";
import mailIcon from "../assets/images/email.png";
import mailInvestIcon from "../assets/images/investmentlogo.png";
import phoneIcon from "../assets/images/phone.png";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* MAIN */}
      <main className="flex-1 flex items-center">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-6 py-8">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* CONTACT BOX */}
            <div className="border border-gray-400 rounded-lg p-4 sm:p-5 lg:p-6 bg-white">
              <h1 className="text-2xl sm:text-3xl font-bold mb-1">
                Contact Us
              </h1>

              <p className="text-sm text-gray-600 mb-4">
                Have any questions? Drop us a mail or give us a call.
              </p>

              {/* Divider below heading */}
              <hr className="border-gray-300 border-t-[1px] w-full mb-3" />

              {/* Contact rows */}
              <div className="divide">
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

            {/* MAP */}
            <div className="h-[280px] sm:h-[360px] lg:h-full min-h-[280px] rounded-lg overflow-hidden border border-gray-300">
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

/* CONTACT ROW */
function ContactRow({ icon, title, text, link, linkText }) {
  return (
    <div className="flex items-start gap-2.5 py-3">
      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
        <img src={icon} alt={title} className="w-3.5 h-3.5" />
      </div>

      <div>
        <h3 className="text-xs font-medium text-gray-500 leading-tight">
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
