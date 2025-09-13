import React from "react";

function Mentors() {
  const mentors = [
    { id: 1, name: "Dr. A Sharma", expertise: "Agriculture", bio: "Helping farmers adopt modern practices." },
    { id: 2, name: "Ravi Kumar", expertise: "Technology", bio: "10+ years in software and digital innovation." },
    { id: 3, name: "Sneha Patel", expertise: "Innovation", bio: "Guiding startups with product-market fit." }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Meet Our Mentors </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {mentors.map((mentor) => (
            <div key={mentor.id} className="bg-gray-300 shadow-lg rounded-lg p-6 hover:shadow-blue-300 transition">
              <h3 className="text-xl font-semibold text-blue-700">{mentor.name}</h3>
              <p className="text-gray-600">{mentor.expertise}</p>
              <p className="text-sm text-gray-500 mt-2">{mentor.bio}</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Connect
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Mentors;
