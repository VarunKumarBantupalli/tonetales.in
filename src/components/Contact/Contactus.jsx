import React from 'react';
import { Phone, Mail, Instagram } from 'lucide-react';

const Contactus = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Phone",
      value: "+91 75695 94275",
      link: "tel:+917569594275",
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email",
      value: "tonetaless04@gmail.com",
      link: "mailto:tonetaless04@gmail.com",
    },
    {
      icon: <Instagram className="w-8 h-8" />,
      title: "Instagram",
      value: "@tonetaless",
      link: "https://www.instagram.com/tonetaless/",
    },
  ];

  return (
    <div className="min-h-screen ">
      {/* Header Section */}
      <div className="pt-20 pb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-bronze-start to-bronze-end text-transparent bg-clip-text">
          Connect Now !
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto px-4">
          Ready to bring your event to life? Reach out to us through any of these channels, and we'll get back to you within 24 hours.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              target={info.title === "Instagram" ? "_blank" : "_self"}
              rel={info.title === "Instagram" ? "noopener noreferrer" : ""}
              className="group relative"
            >
              {/* Animated Background */}
              <div className="absolute -inset-1 bg-gradient-to-r from-bronze-start to-bronze-end rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-float" />
              
              {/* Card Content */}
              <div className="relative h-full flex flex-col items-center justify-center px-8 py-12 bg-gray-900 rounded-xl transition-transform duration-500 group-hover:-translate-y-2">
                {/* Icon Container */}
                <div className="mb-6 p-4 rounded-full bg-gradient-to-r from-bronze-start to-bronze-end transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                  <div className="text-black">
                    {info.icon}
                  </div>
                </div>

                {/* Text Content */}
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-bronze-start transition-colors duration-300">
                  {info.title}
                </h3>
                <p className="text-gray-400 text-center group-hover:text-white transition-colors duration-300">
                  {info.value}
                </p>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-bronze-start to-bronze-end group-hover:w-2/3 transition-all duration-300" />
              </div>
            </a>
          ))}
        </div>           
      </div>

      {/* Bottom Section */}
      <div className="text-center pb-12">
        <p className="text-gray-400">
          Looking forward to creating unforgettable moments together!
        </p>
      </div>
    </div>
  );
};

export default Contactus;