import React from "react";

export default function InTheMedia() {
  const mediaCards = [
    {
      id: 1,
      image: "/images/media/news/n1.webp",
      title:
        "Driverless Car: बिना ड्राइवर के ही फर्राटे भर रही ये गाड़ी, अब तक 50 हजार Km का ट्रायल रन हुआ कंप्लीट",
      description:
        "Driverless Car Trial: यह एक गाड़ी है जिसे चलाने के लिए ड्राइवर की ज़रूरत नहीं पड़ती. शुरुआत में ड्राइवर इसे बस चालू कर के छोड़ दे फिर तो सामने से गाड़ी आए... क्या भारत में भी कभी ड्राइवरलेस कार कार Driverless Car Trial: यह एक गाड़ी है जिसे चलाने के लिए ड्राइवर की ज़रूरत नहीं पड़ती. शुरुआत में ड्राइवर इसे बस चालू कर के छोड़ दे फिर तो सामने से गाड़ी आए... क्या भारत में भी कभी ड्राइवरलेस कार कार",
      date: "2023-10-28",
    },
    {
      id: 2,
      image: "/images/media/news/n2.webp",
      title:
        "Anand Mahindra praises startup from Bhopal for developing self-driving cars",
      description:
        "With advancements in tech, self-driving cars are creating a buzz across the automobile industry. A startup from Bhopal has amazed people with its Mahindra Bolero SUV With advancements in tech, self-driving cars are creating a buzz across the automobile industry. A startup from Bhopal has amazed people with its Mahindra Bolero SUV",
      date: "2023-10-28",
    },
    {
      id: 3,
      image: "/images/media/news/n3.webp",
      title:
        "Self-Driving Vehicle | Meet Sanjeev Sharma, An IITian Who Turned Bolero Into Self-Driving Car",
      description:
        "Self-driving Vehicle: Sanjeev Sharma, an IITian living in Bhopal, has been doing research on self-driving cars for several years. Mr Sharma describes that he was inspiredSelf-driving Vehicle: Sanjeev Sharma, an IITian living in Bhopal, has been doing research on self-driving cars for several years. Mr Sharma describes that he was inspired",
      date: "2023-10-28",
    },
    {
      id: 4,
      image: "/images/media/news/n1.webp",
      title:
        "Driverless Car: बिना ड्राइवर के ही फर्राटे भर रही ये गाड़ी, अब तक 50 हजार Km का ट्रायल रन हुआ कंप्लीट",
      description:
        "Driverless Car Trial: यह एक गाड़ी है जिसे चलाने के लिए ड्राइवर की ज़रूरत नहीं पड़ती. शुरुआत में ड्राइवर इसे बस चालू कर के छोड़ दे फिर तो सामने से गाड़ी आए... क्या भारत में भी कभी ड्राइवरलेस कार कार Driverless Car Trial: यह एक गाड़ी है जिसे चलाने के लिए ड्राइवर की ज़रूरत नहीं पड़ती. शुरुआत में ड्राइवर इसे बस चालू कर के छोड़ दे फिर तो सामने से गाड़ी आए... क्या भारत में भी कभी ड्राइवरलेस कार कार",
      date: "2023-10-28",
    },
    {
      id: 5,
      image: "/images/media/news/n3.webp",
      title:
        "Self-Driving Vehicle | Meet Sanjeev Sharma, An IITian Who Turned Bolero Into Self-Driving Car",
      description:
        "Self-driving Vehicle: Sanjeev Sharma, an IITian living in Bhopal, has been doing research on self-driving cars for several years. Mr Sharma describes that he was inspiredSelf-driving Vehicle: Sanjeev Sharma, an IITian living in Bhopal, has been doing research on self-driving cars for several years. Mr Sharma describes that he was inspired",
      date: "2023-10-28",
    },
    {
      id: 6,
      image: "/images/media/news/n2.webp",
      title:
        "Anand Mahindra praises startup from Bhopal for developing self-driving cars",
      description:
        "Anand Mahindra praises startup from Bhopal for developing self-driving cars",
      date: "2023-10-28",
    },
    {
      id: 7,
      image: "/images/media/news/n3.webp",
      title:
        "Self-Driving Vehicle | Meet Sanjeev Sharma, An IITian Who Turned Bolero Into Self-Driving Car",
      description:
        "Self-driving Vehicle: Sanjeev Sharma, an IITian living in Bhopal, has been doing research on self-driving cars for several years. Mr Sharma describes that he was inspiredSelf-driving Vehicle: Sanjeev Sharma, an IITian living in Bhopal, has been doing research on self-driving cars for several years. Mr Sharma describes that he was inspired",
      date: "2023-10-28",
    },
    {
      id: 8,
      image: "/images/media/news/n1.webp",
      title:
        "Driverless Car: बिना ड्राइवर के ही फर्राटे भर रही ये गाड़ी, अब तक 50 हजार Km का ट्रायल रन हुआ कंप्लीट",
      description:
        "Driverless Car Trial: यह एक गाड़ी है जिसे चलाने के लिए ड्राइवर की ज़रूरत नहीं पड़ती. शुरुआत में ड्राइवर इसे बस चालू कर के छोड़ दे फिर तो सामने से गाड़ी आए... क्या भारत में भी कभी ड्राइवरलेस कार कार Driverless Car Trial: यह एक गाड़ी है जिसे चलाने के लिए ड्राइवर की ज़रूरत नहीं पड़ती. शुरुआत में ड्राइवर इसे बस चालू कर के छोड़ दे फिर तो सामने से गाड़ी आए... क्या भारत में भी कभी ड्राइवरलेस कार कार",
      date: "2023-10-28",
    },
  ];

  return (
    <section className="max-w-screen-xl mx-auto px-6 pb-20">
      {/* SECTION TITLE */}
      <h2 className="text-[20px] font-semibold mb-6">
        In the Media
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {mediaCards.map((item) => (
          <div key={item.id}>
            {/* IMAGE */}
            <div className="relative rounded-[12px] overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full aspect-video object-cover"
              />

              {/* PLAY ICON */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-red-600 rounded-full" />
              </div>
            </div>

            {/* CONTENT BELOW IMAGE */}
            <div className="mt-4">
              {/* TITLE */}
              <h3
                className="
                  font-rethink
                  font-bold
                  text-[#3F3F3F]
                  tracking-[-0.02em]
                  leading-[100%]

                  text-[18px]
                  sm:text-[20px]
                "
              >
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p
                className="
                  mt-2
                  font-rethink
                  font-normal
                  text-[#737373]
                  tracking-[-0.02em]
                  leading-[100%]

                  text-[13px]
                  sm:text-[14px]
                "
              >
                {item.description}
              </p>

              {/* DATE */}
              <p className="mt-3 text-[12px] text-gray-400">
                {item.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
