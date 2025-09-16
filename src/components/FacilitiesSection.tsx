import React from "react";

const FacilitiesSection: React.FC = () => {
  const facilities = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-computer"
        >
          <rect width="14" height="8" x="5" y="2" rx="2"></rect>
          <rect width="20" height="8" x="2" y="14" rx="2"></rect>
          <path d="M6 18h2"></path>
          <path d="M12 18h6"></path>
        </svg>
      ),
      name: "Computer Lab",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-landmark"
        >
          <line x1="3" x2="21" y1="22" y2="22"></line>
          <line x1="6" x2="6" y1="18" y2="11"></line>
          <line x1="10" x2="10" y1="18" y2="11"></line>
          <line x1="14" x2="14" y1="18" y2="11"></line>
          <line x1="18" x2="18" y1="18" y2="11"></line>
          <polygon points="12 2 20 7 4 7"></polygon>
        </svg>
      ),
      name: "Auditorium",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-book"
        >
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"></path>
        </svg>
      ),
      name: "Library",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-trophy"
        >
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
          <path d="M4 22h16"></path>
          <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
          <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
          <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
        </svg>
      ),
      name: "Badminton Court",
    },
  ];

  return (
    <div className="w-full bg-blue-500 p-10 text-white">
      <div className="mx-auto max-w-6xl">
        <h3 className="text-xl font-semibold mb-4">Our Facility</h3>
        <div className="flex justify-between flex-wrap gap-10">
          {facilities.map((facility, index) => (
            <div key={index} className="flex items-center gap-2">
              {facility.icon}
              <p className="text-sm font-medium">{facility.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacilitiesSection;
