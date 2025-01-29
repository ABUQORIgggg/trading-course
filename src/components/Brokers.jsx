import React from "react";
import { FaChartLine, FaShieldAlt, FaGlobe, FaMobileAlt, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const BrokerCards = () => {
  const brokers = [
    {
      name: "Exness",
      image:
        "https://media.licdn.com/dms/image/v2/D4D12AQEcZByllrEqBg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1731651076675?e=2147483647&v=beta&t=eepX10_vh4VHEV1dFFVUmlrFD7N-UcK1QXhzfYmVKDU",
      description: "Keng ko'lamli savdo vositalari va ilg'or savdo platformalarini taklif etuvchi ishonchli broker.",
      features: [
        { icon: <FaChartLine />, text: "Ilg'or grafik vositalar" },
        { icon: <FaShieldAlt />, text: "Kuchli xavfsizlik choralari" },
        { icon: <FaGlobe />, text: "Global bozorga kirish" },
        { icon: <FaMobileAlt />, text: "Mobil savdo ilovasi" },
      ],
      bonus: "Exness bilan savdoni boshlang va 100$ gacha bonus oling!",
      registrationLink: "https://one.exnesstrack.org/a/7vm6tpkrmq",
    },
    {
      name: "Libertex",
      image:
        "https://sjc.microlink.io/6tp5zu7CTy5MjTYdlBQTh9IrbqQ7oiuVD-dIVosb8IkWAmgCFYy7qwPRpA6FjUvE3RvsKkdwdZy4owVWKSkSIA.jpeg",
      description: "Innovatsion broker, ham yangi, ham tajribali treyderlarga qulay platforma taqdim etadi.",
      features: [
        { icon: <FaChartLine />, text: "CFD va Forex savdosi" },
        { icon: <FaShieldAlt />, text: "Salbiy balans himoyasi" },
        { icon: <FaGlobe />, text: "Ko'p aktivli savdo" },
        { icon: <FaMobileAlt />, text: "Mukofotlangan mobil ilova" },
      ],
      bonus: "Libertex Brokerdan ro'yxatdan o'tib 30$ bonus oling!",
      registrationLink: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-blue-400 mb-6 md:mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Eng Yaxshi Brokerlar Haqida Ma'lumot
      </motion.h1>

      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 gap-6">
        {brokers.map((broker, index) => (
          <motion.div
            key={broker.name}
            className="w-full bg-gray-800 rounded-lg overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <motion.img
              src={broker.image}
              alt={`${broker.name} Image`}
              className="w-full h-40 md:h-48 object-cover object-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <div className="p-4 flex flex-col justify-between h-auto md:h-[300px]">
              <div>
                <motion.h2 className="text-lg md:text-xl font-bold text-blue-500 mb-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 + index * 0.2 }}>
                  {broker.name}
                </motion.h2>
                <motion.p className="text-gray-300 text-sm mb-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 + index * 0.2 }}>
                  {broker.description}
                </motion.p>
                <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 + index * 0.2 }}>
                  {broker.features.map((feature, idx) => (
                    <motion.div key={idx} className="flex items-center space-x-2 text-gray-300 text-xs" whileHover={{ scale: 1.05, color: "#3B82F6" }}>
                      <span className="text-blue-500 text-lg">{feature.icon}</span>
                      <span>{feature.text}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
              <div>
                <motion.div className="bg-blue-600 text-white p-3 rounded-md mb-3 flex items-center justify-center shadow-md" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + index * 0.2 }}>
                  <p className="font-semibold text-center text-sm md:text-base">{broker.bonus}</p>
                </motion.div>
                <motion.a href={broker.registrationLink} target="_blank" rel="noopener noreferrer" className="w-full bg-gradient-to-r from-blue-500 to-teal-400 text-white font-bold rounded-md text-sm md:text-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-lg flex items-center justify-center py-2" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  Brokerdan ro'yxatdan o'tish <FaExternalLinkAlt className="ml-2" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BrokerCards;