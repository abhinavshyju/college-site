import React from "react";
import { Calendar, Users } from "lucide-react";

const EventsSection: React.FC = () => {
  const events = [
    {
      title: "National Conference on Applied Sciences (NCAS 2024)",
      date: "March 15-17, 2024",
      description:
        "Three-day national conference featuring research presentations, keynote speeches, and networking sessions.",
      image:
        "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg",
      participants: "200+ Participants",
      type: "Conference",
    },
    {
      title: "Annual Cultural Festival - Kaleidoscope 2024",
      date: "February 20-22, 2024",
      description:
        "Vibrant cultural festival showcasing student talents in music, dance, drama, and literary arts.",
      image:
        "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg",
      participants: "500+ Students",
      type: "Cultural",
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Events</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {event.title}
                    </h4>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                      {event.type}
                    </span>
                  </div>

                  <div className="flex items-center text-gray-600 mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">{event.date}</span>
                  </div>

                  <p className="text-gray-600 text-sm mb-3">
                    {event.description}
                  </p>

                  <div className="flex items-center text-gray-500 text-sm">
                    <Users className="h-4 w-4 mr-2" />
                    <span>{event.participants}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsSection;
