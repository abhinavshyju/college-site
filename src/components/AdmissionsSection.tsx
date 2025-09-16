import React, { useState } from "react";
import { Download, FileText, AlertCircle } from "lucide-react";

const AdmissionsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("prospectus");

  const tabs = [
    { id: "prospectus", label: "Prospectus" },
    // { id: "process", label: "Admission Process" },
    // { id: "schedule", label: "Schedule" },
    // { id: "seats", label: "Seat Matrix" },
    // { id: "fees", label: "Fee Structure" },
    // { id: "refund", label: "Refund Policy" },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "prospectus":
        return (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  IHRD Prospectus
                </h3>
                <p className="text-blue-800 mb-4">
                  Download the official IHRD admission prospectus for detailed
                  information about courses, eligibility criteria, and admission
                  procedures.
                </p>
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center"
                  onClick={() =>
                    window.open(
                      "https://ihrd.ac.in/images/stories/admin25/ugkannurp.pdf"
                    )
                  }
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download IHRD Prospectus
                </button>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-green-900 mb-4">
                  University Prospectus
                </h3>
                <p className="text-green-800 mb-4">
                  Access the Calicut University prospectus for comprehensive
                  details about undergraduate and postgraduate programs.
                </p>
                <button
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center"
                  onClick={() =>
                    window.open(
                      "https://admission.uoc.ac.in/downloads/1748418502_Prospectus_ug7672.pdf"
                    )
                  }
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download University Prospectus
                </button>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
              <div className="flex items-start">
                <AlertCircle className="h-6 w-6 text-yellow-600 mr-3 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-yellow-900 mb-2">
                    Important Notice
                  </h4>
                  <p className="text-yellow-800">
                    Please read both prospectuses carefully before applying.
                    Ensure you meet all eligibility criteria and have the
                    required documents ready for the admission process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case "process":
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Admission Process
            </h3>
            <div className="space-y-4">
              {[
                {
                  step: 1,
                  title: "Online Application",
                  description:
                    "Fill out the online application form on the IHRD portal with accurate details.",
                  status: "Open",
                },
                {
                  step: 2,
                  title: "Document Verification",
                  description:
                    "Upload all required documents including mark sheets, certificates, and photographs.",
                  status: "Required",
                },
                {
                  step: 3,
                  title: "Merit List Publication",
                  description:
                    "Merit lists will be published based on qualifying examination scores.",
                  status: "Pending",
                },
                {
                  step: 4,
                  title: "Counseling Process",
                  description:
                    "Attend counseling sessions as per the published schedule.",
                  status: "Scheduled",
                },
                {
                  step: 5,
                  title: "Seat Allotment",
                  description:
                    "Seats will be allotted based on merit, preferences, and availability.",
                  status: "Final",
                },
                {
                  step: 6,
                  title: "Admission Confirmation",
                  description:
                    "Complete admission formalities by paying fees and submitting documents.",
                  status: "Required",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="flex items-start bg-white border border-gray-200 rounded-lg p-6"
                >
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 mb-2">{step.description}</p>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        step.status === "Open"
                          ? "bg-green-100 text-green-800"
                          : step.status === "Required"
                          ? "bg-blue-100 text-blue-800"
                          : step.status === "Pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : step.status === "Scheduled"
                          ? "bg-purple-100 text-purple-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {step.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "seats":
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Seat Matrix 2024-25
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Course
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Total Seats
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      General
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      OBC
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      SC
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ST
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    {
                      course: "B.Sc. Computer Science",
                      total: 60,
                      general: 30,
                      obc: 16,
                      sc: 9,
                      st: 5,
                    },
                    {
                      course: "B.Sc. Electronics",
                      total: 40,
                      general: 20,
                      obc: 11,
                      sc: 6,
                      st: 3,
                    },
                    {
                      course: "B.Sc. Mathematics",
                      total: 40,
                      general: 20,
                      obc: 11,
                      sc: 6,
                      st: 3,
                    },
                    {
                      course: "B.Sc. Physics",
                      total: 40,
                      general: 20,
                      obc: 11,
                      sc: 6,
                      st: 3,
                    },
                    {
                      course: "M.Sc. Computer Science",
                      total: 20,
                      general: 10,
                      obc: 5,
                      sc: 3,
                      st: 2,
                    },
                    {
                      course: "M.Sc. Electronics",
                      total: 15,
                      general: 8,
                      obc: 4,
                      sc: 2,
                      st: 1,
                    },
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {row.course}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-semibold">
                        {row.total}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {row.general}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {row.obc}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {row.sc}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {row.st}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case "fees":
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Fee Structure 2025-26
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Undergraduate Programs
                </h4>
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                          Fee Type
                        </th>
                        <th className="px-4 py-3 text-right text-sm font-medium text-gray-500">
                          Amount (₹)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-900">
                          Tuition Fee (Annual)
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900 text-right">
                          12,000
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-900">
                          Lab Fee (Annual)
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900 text-right">
                          8,000
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-900">
                          Library Fee
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900 text-right">
                          2,000
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-900">
                          Sports Fee
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900 text-right">
                          1,000
                        </td>
                      </tr>
                      <tr className="bg-blue-50">
                        <td className="px-4 py-3 text-sm font-semibold text-blue-900">
                          Total Annual Fee
                        </td>
                        <td className="px-4 py-3 text-sm font-semibold text-blue-900 text-right">
                          23,000
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Postgraduate Programs
                </h4>
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                          Fee Type
                        </th>
                        <th className="px-4 py-3 text-right text-sm font-medium text-gray-500">
                          Amount (₹)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-900">
                          Tuition Fee (Annual)
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900 text-right">
                          18,000
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-900">
                          Lab Fee (Annual)
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900 text-right">
                          12,000
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-900">
                          Library Fee
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900 text-right">
                          3,000
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-900">
                          Research Fee
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900 text-right">
                          5,000
                        </td>
                      </tr>
                      <tr className="bg-green-50">
                        <td className="px-4 py-3 text-sm font-semibold text-green-900">
                          Total Annual Fee
                        </td>
                        <td className="px-4 py-3 text-sm font-semibold text-green-900 text-right">
                          38,000
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-900 mb-2">
                Payment Information
              </h4>
              <ul className="text-yellow-800 text-sm space-y-1">
                <li>
                  • Fees can be paid online through the college portal or
                  in-person
                </li>
                <li>• Installment options available for annual fees</li>
                <li>• Additional charges may apply for hostel accommodation</li>
                <li>
                  • Fee concessions available for economically weaker sections
                </li>
              </ul>
            </div>
          </div>
        );

      default:
        return (
          <div className="text-center py-8">
            <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
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
            <h1 className="text-3xl font-bold mb-2">Admissions & Fee</h1>
            <p className="text-blue-100">
              Complete information about admission process, requirements, and
              fee structure
            </p>
          </div>

          {/* Apply Now CTA */}
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-4">
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-1">
                  Admissions Open for 2025-26
                </h3>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div>
                <p className="text-orange-100">
                  CASCAP Admission Portal for IHRD Applied Science Colleges
                </p>
              </div>
              <div className="">
                <button
                  className="mt-4 sm:mt-0 bg-white text-orange-600 hover:bg-orange-50 px-6 py-3 rounded-lg font-semibold transition-colors"
                  onClick={() => {
                    window.open("https://ihrdadmissions.org/");
                  }}
                >
                  Apply Now
                </button>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between mt-2">
              <div>
                <p className="text-orange-100">
                  CAP Admission Portal for Colleges under Calicut University
                </p>
              </div>
              <div className="">
                <button
                  className="mt-4 sm:mt-0 bg-white text-orange-600 hover:bg-orange-50 px-6 py-3 rounded-lg font-semibold transition-colors"
                  onClick={() => {
                    window.open(
                      "https://admission.uoc.ac.in/admission?pages=ug"
                    );
                  }}
                >
                  Apply Now
                </button>
              </div>
            </div>
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

export default AdmissionsSection;
