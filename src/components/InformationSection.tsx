import React, { useState } from "react";
import {
  HelpCircle,
  FileText,
  Bell,
  Calendar,
  Briefcase,
  Users,
  Globe,
  Download,
} from "lucide-react";

const InformationSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("helpdesk");

  const tabs = [
    { id: "helpdesk", label: "Helpdesk" },
    // { id: "rti", label: "RTI Information" },
    // { id: "circulars", label: "Circulars & Newsletters" },
    { id: "events", label: "Recent Events" },
    // { id: "jobs", label: "Job Openings" },
    // { id: "roster", label: "Reservation Roster" },
    // { id: "international", label: "International Students" },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "helpdesk":
        return (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Student Helpdesk
                </h3>
                <p className="text-gray-600 mb-6">
                  Our helpdesk is available to assist students with academic,
                  administrative, and general queries. We are committed to
                  providing prompt and helpful support.
                </p>

                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-3">
                      Contact Information
                    </h4>
                    <div className="space-y-2 text-blue-800 text-sm">
                      <div className="flex items-center">
                        <HelpCircle className="h-4 w-4 mr-2" />
                        <span>General Helpdesk: +91-495-2244567</span>
                      </div>
                      <div className="flex items-center">
                        <FileText className="h-4 w-4 mr-2" />
                        <span>
                          Academic Queries: academic@casthamarassery.ac.in
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2" />
                        <span>
                          Admission Queries: admissions@casthamarassery.ac.in
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="h-4 w-4 mr-2" />
                        <span>
                          Placement Queries: placement@casthamarassery.ac.in
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-3">
                      Office Hours
                    </h4>
                    <div className="space-y-1 text-green-800 text-sm">
                      <div>Monday - Friday: 9:00 AM - 5:00 PM</div>
                      <div>Saturday: 9:00 AM - 1:00 PM</div>
                      <div>Sunday: Closed</div>
                      <div className="mt-2 font-medium">
                        Emergency Contact: +91-495-2244599 (24/7)
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Frequently Asked Questions
                </h4>
                <div className="space-y-3">
                  {[
                    {
                      question: "How do I apply for admission?",
                      answer:
                        "Visit our Admissions section for detailed application procedures and requirements.",
                    },
                    {
                      question: "What are the fee payment options?",
                      answer:
                        "Fees can be paid online through our portal or offline at the accounts office.",
                    },
                    {
                      question: "How can I access my academic records?",
                      answer:
                        "Login to the student portal with your credentials to access transcripts and records.",
                    },
                    {
                      question: "What documents are required for admission?",
                      answer:
                        "Check the prospectus for complete list of required documents for your program.",
                    },
                  ].map((faq, index) => (
                    <div
                      key={index}
                      className="bg-white border border-gray-200 rounded-lg p-4"
                    >
                      <h5 className="font-medium text-gray-900 mb-2">
                        {faq.question}
                      </h5>
                      <p className="text-gray-600 text-sm">{faq.answer}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-yellow-900 mb-2">
                    Need More Help?
                  </h5>
                  <p className="text-yellow-800 text-sm mb-3">
                    Can't find what you're looking for? Submit a query and we'll
                    get back to you.
                  </p>
                  <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors">
                    Submit Query
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case "rti":
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Right to Information (RTI)
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-blue-900 mb-4">
                    Central Public Information Officer (CPIO)
                  </h4>
                  <div className="space-y-2 text-blue-800">
                    <div>
                      <strong>Name:</strong> Dr. Rajesh Kumar
                    </div>
                    <div>
                      <strong>Designation:</strong> Principal
                    </div>
                    <div>
                      <strong>Email:</strong> cpio@casthamarassery.ac.in
                    </div>
                    <div>
                      <strong>Phone:</strong> +91-495-2244567
                    </div>
                    <div>
                      <strong>Office:</strong> Principal's Office, Ground Floor
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-4">
                    Appellate Authority
                  </h4>
                  <div className="space-y-2 text-green-800">
                    <div>
                      <strong>Name:</strong> Dr. K.R. Nair
                    </div>
                    <div>
                      <strong>Designation:</strong> Joint Director, IHRD
                    </div>
                    <div>
                      <strong>Email:</strong> appellate@ihrd.ac.in
                    </div>
                    <div>
                      <strong>Phone:</strong> +91-471-2700100
                    </div>
                    <div>
                      <strong>Office:</strong> IHRD Headquarters,
                      Thiruvananthapuram
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  How to File RTI Application
                </h4>
                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h5 className="font-medium text-gray-900 mb-2">
                      Step 1: Prepare Application
                    </h5>
                    <p className="text-gray-600 text-sm">
                      Write your application in the prescribed format with
                      specific information required.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h5 className="font-medium text-gray-900 mb-2">
                      Step 2: Pay Fee
                    </h5>
                    <p className="text-gray-600 text-sm">
                      Pay the prescribed fee of ₹10 through demand draft or
                      cash.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h5 className="font-medium text-gray-900 mb-2">
                      Step 3: Submit Application
                    </h5>
                    <p className="text-gray-600 text-sm">
                      Submit to CPIO in person or by registered post with
                      acknowledgment.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h5 className="font-medium text-gray-900 mb-2">
                      Step 4: Receive Response
                    </h5>
                    <p className="text-gray-600 text-sm">
                      Response will be provided within 30 days of receipt of
                      application.
                    </p>
                  </div>
                </div>

                <div className="mt-6 bg-orange-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-orange-900 mb-2">
                    Download Forms
                  </h5>
                  <div className="space-y-2">
                    <button className="flex items-center text-orange-800 hover:text-orange-900 text-sm">
                      <Download className="h-4 w-4 mr-2" />
                      RTI Application Form
                    </button>
                    <button className="flex items-center text-orange-800 hover:text-orange-900 text-sm">
                      <Download className="h-4 w-4 mr-2" />
                      Appeal Application Form
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "circulars":
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Circulars & Newsletters
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Recent Circulars
                </h4>
                <div className="space-y-4">
                  {[
                    {
                      title: "Academic Calendar 2024-25 - Revised Schedule",
                      date: "December 10, 2024",
                      type: "Academic",
                      urgent: true,
                    },
                    {
                      title: "Winter Break Guidelines for Students",
                      date: "December 8, 2024",
                      type: "General",
                      urgent: false,
                    },
                    {
                      title: "Examination Fee Payment - Last Date Extended",
                      date: "December 5, 2024",
                      type: "Examination",
                      urgent: true,
                    },
                    {
                      title: "Library Renovation - Temporary Closure Notice",
                      date: "December 3, 2024",
                      type: "Facility",
                      urgent: false,
                    },
                    {
                      title: "Annual Sports Meet 2024 - Registration Open",
                      date: "November 28, 2024",
                      type: "Sports",
                      urgent: false,
                    },
                  ].map((circular, index) => (
                    <div
                      key={index}
                      className={`border-l-4 p-4 rounded-lg ${
                        circular.urgent
                          ? "border-red-500 bg-red-50"
                          : "border-blue-500 bg-blue-50"
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h5 className="font-semibold text-gray-900">
                          {circular.title}
                        </h5>
                        {circular.urgent && (
                          <span className="bg-red-200 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
                            Urgent
                          </span>
                        )}
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center text-gray-600 text-sm">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{circular.date}</span>
                          <span className="mx-2">•</span>
                          <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">
                            {circular.type}
                          </span>
                        </div>
                        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
                          <Download className="h-3 w-3 mr-1" />
                          Download
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Newsletters
                </h4>
                <div className="space-y-4">
                  {[
                    {
                      title: "CAS Newsletter - December 2024",
                      issue: "Vol. 5, Issue 12",
                      cover:
                        "https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg",
                    },
                    {
                      title: "CAS Newsletter - November 2024",
                      issue: "Vol. 5, Issue 11",
                      cover:
                        "https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg",
                    },
                    {
                      title: "CAS Newsletter - October 2024",
                      issue: "Vol. 5, Issue 10",
                      cover:
                        "https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg",
                    },
                  ].map((newsletter, index) => (
                    <div
                      key={index}
                      className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start space-x-3">
                        <img
                          src={newsletter.cover}
                          alt="Newsletter Cover"
                          className="w-16 h-20 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h5 className="font-medium text-gray-900 mb-1">
                            {newsletter.title}
                          </h5>
                          <p className="text-gray-600 text-sm mb-2">
                            {newsletter.issue}
                          </p>
                          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
                            <Download className="h-3 w-3 mr-1" />
                            Download PDF
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 bg-green-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-green-900 mb-2">
                    Subscribe to Updates
                  </h5>
                  <p className="text-green-800 text-sm mb-3">
                    Get the latest circulars and newsletters delivered to your
                    email.
                  </p>
                  <div className="flex">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-3 py-2 border border-green-300 rounded-l-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-r-lg text-sm font-medium transition-colors">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "events":
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Recent Events
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
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
                {
                  title: "Industry-Academia Interface Program",
                  date: "January 25, 2024",
                  description:
                    "Interactive session with industry experts discussing current trends and career opportunities.",
                  image:
                    "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
                  participants: "300+ Attendees",
                  type: "Academic",
                },
                {
                  title: "Blood Donation Camp",
                  date: "January 15, 2024",
                  description:
                    "Annual blood donation drive organized by NSS volunteers in collaboration with local blood bank.",
                  image:
                    "https://images.pexels.com/photos/6823567/pexels-photo-6823567.jpeg",
                  participants: "150+ Donors",
                  type: "Social Service",
                },
                {
                  title: "Inter-College Sports Championship",
                  date: "December 10-12, 2023",
                  description:
                    "Annual sports meet featuring various indoor and outdoor games with participation from multiple colleges.",
                  image:
                    "https://images.pexels.com/photos/163444/sport-treadmill-tor-trainer-163444.jpeg",
                  participants: "400+ Athletes",
                  type: "Sports",
                },
                {
                  title: "Alumni Homecoming 2023",
                  date: "November 25, 2023",
                  description:
                    "Grand reunion of alumni from various batches with networking sessions and cultural programs.",
                  image:
                    "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg",
                  participants: "800+ Alumni",
                  type: "Alumni",
                },
              ].map((event, index) => (
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
        );

      default:
        return (
          <div className="text-center py-8">
            <Bell className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">
              Content for {activeTab} section will be available soon.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-blue-600 text-white px-6 py-8">
            <h1 className="text-3xl font-bold mb-2">Information</h1>
            <p className="text-blue-100">
              Access important information, circulars, events, and support
              services
            </p>
          </div>

          {/* Tabs Navigation */}
          <div className="border-b border-gray-200">
            <div className="px-6">
              <div className="flex flex-wrap -mb-px">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`mr-8 py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab.id
                        ? "border-blue-500 text-blue-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6">{renderTabContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default InformationSection;
