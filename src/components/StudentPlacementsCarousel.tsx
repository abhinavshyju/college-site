import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Student {
  name: string;
  company: string;
  position: string;
  year: string;
  image: string;
}

const StudentPlacementsCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const students: Student[] = [
    {
      name: "John Doe",
      company: "Tech Solutions Inc.",
      position: "Software Engineer",
      year: "2023",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    },
    {
      name: "Jane Smith",
      company: "Data Analytics Corp",
      position: "Data Scientist",
      year: "2023",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    },
    {
      name: "Mike Johnson",
      company: "Global Innovations",
      position: "Product Manager",
      year: "2023",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    },
    {
      name: "Sarah Wilson",
      company: "Digital Solutions Ltd",
      position: "UX Designer",
      year: "2023",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    },
    {
      name: "David Brown",
      company: "Cloud Technologies",
      position: "DevOps Engineer",
      year: "2023",
      image:
        "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
    },
    {
      name: "Emily Davis",
      company: "AI Research Labs",
      position: "Machine Learning Engineer",
      year: "2023",
      image:
        "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg",
    },
  ];

  // Create slides with responsive number of students per slide
  const getStudentsPerSlide = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 1; // Mobile: 1 student per slide
      if (window.innerWidth < 1024) return 2; // Tablet: 2 students per slide
      return 3; // Desktop: 3 students per slide
    }
    return 3; // Default fallback
  };

  const [studentsPerSlide, setStudentsPerSlide] = useState(
    getStudentsPerSlide()
  );

  // Update students per slide on window resize
  useEffect(() => {
    const handleResize = () => {
      setStudentsPerSlide(getStudentsPerSlide());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slides: Student[][] = [];
  for (let i = 0; i < students.length; i += studentsPerSlide) {
    slides.push(students.slice(i, i + studentsPerSlide));
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentSlide]);

  const pauseAutoPlay = () => setIsAutoPlaying(false);
  const resumeAutoPlay = () => setIsAutoPlaying(true);

  return (
    <div className="bg-white py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
          Student Placements
        </h2>

        {/* Carousel Container */}
        <div
          className="relative"
          onMouseEnter={pauseAutoPlay}
          onMouseLeave={resumeAutoPlay}
        >
          {/* Navigation Arrows */}
          <button
            onClick={() => {
              prevSlide();
              pauseAutoPlay();
            }}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-1.5 sm:p-2 shadow-lg transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6 text-gray-700" />
          </button>

          <button
            onClick={() => {
              nextSlide();
              pauseAutoPlay();
            }}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-1.5 sm:p-2 shadow-lg transition-all duration-200 hover:scale-110"
          >
            <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6 text-gray-700" />
          </button>

          {/* Carousel Track */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2 sm:px-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {slide.map((student, slideIndex) => (
                      <div
                        key={slideIndex}
                        className="relative h-48 sm:h-56 lg:h-64 overflow-hidden rounded-lg hover:shadow-lg transition-shadow"
                      >
                        <img
                          src={student.image}
                          alt={student.name}
                          className="w-full h-full object-cover a"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 transition-all hover:bg-opacity-50 flex flex-col justify-end p-4 sm:p-6">
                          <h4 className="text-base sm:text-lg font-semibold text-white mb-1">
                            {student.name}
                          </h4>
                          <p className="text-white text-xs sm:text-sm mb-1">
                            {student.position}
                          </p>
                          <p className="text-white text-xs sm:text-sm mb-1">
                            {student.company}
                          </p>
                          <p className="text-gray-200 text-xs">
                            Graduated: {student.year}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
            {Array.from({ length: slides.length }, (_, index) => (
              <button
                key={index}
                onClick={() => {
                  goToSlide(index);
                  pauseAutoPlay();
                }}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                  currentSlide === index
                    ? "bg-blue-600 scale-110"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPlacementsCarousel;
