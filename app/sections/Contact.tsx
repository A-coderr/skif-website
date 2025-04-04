import React from "react";

const Contact = () => {
  return (
    <section className="w-full px-6 pt-6 pb-16 max-w-7xl mx-auto text-gray-800">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800">
        Contact Us
      </h1>

      <div className="flex flex-col md:flex-row justify-between p-6">
        {/* Left Side */}
        <div className="w-full md:w-1/2 space-y-4">
          <p>
            <strong>Location:</strong> 2233 Hurontario St, Mississauga, ON L5A
            2E9
          </p>
          <p>
            <strong>Email:</strong> skiftorontokaratedo@hotmail.com
          </p>
          <p>
            <strong>Phone:</strong> (905) 275-9395
          </p>
        </div>

        {/* Right Side (Google Maps) */}
        <div className="w-full md:w-1/2">
          <iframe
            src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;q=2233%20Hurontario%20St,%20Mississauga,%20ON%20L5A%202E9+(Skif%20Karate%20Canada)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
