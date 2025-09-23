import React from "react";

const LocationMap = () => {
  return (
    <div className="w-full px-4 mt-10">
      <iframe
        title="Google Map - Office Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.8702841358714!2d77.37990557523637!3d28.62639498493256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce54ce3f30e69%3A0x9ce4f4edab8ccf9b!2sC-171%2C%20C%20Block%2C%20Sector%2063%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1694862717926!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-xl w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px]"
      ></iframe>
    </div>
  );
};

export default LocationMap;
